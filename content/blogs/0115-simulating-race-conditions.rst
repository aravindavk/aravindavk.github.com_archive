Simulating Race Conditions
##########################

:slug: simulating-race-conditions
:author: Aravinda VK
:date: 2015-09-11
:tags: gluster, glusterfsblog
:summary: To uncover the bugs we need to setup workload and run multiple times since issues may not happen always. But it is tedious to run multiple times with actual data. How about simulating/mocking it?
:image: /images/rebalance.png

`Tiering <http://gluster.readthedocs.org/en/release-3.7.0/Features/tier/>`__ feature is introduced in `Gluster 3.7 <http://www.gluster.org/>`__ release. Geo-replication may not perform well with Tiering feature yet. Races can happen since Rebalance moves files from one brick to another brick(hot to cold and cold to hot), but the Changelog/Journal remails in old brick itself. We know there will be problems since each Geo-replication worker(per brick) processes Changelogs belonging to respective brick and sync the data independently. Sync happens as two step operation, Create entry in Slave with the GFID recorded in Changelog, then use Rsync to sync data(using GFID access)

To uncover the bugs we need to setup workload and run multiple times since issues may not happen always. But it is tedious to run multiple times with actual data. How about simulating/mocking it?

Let us consider simple case of Rebalance, A file "f1" is created in Brick1 and after some time it becomes hot and Rebalance moved it to Brick2.

.. image:: /images/rebalance.png
   :alt: Rebalance explained

In Changelog we don't capture the Rebalance Traffic, so in respective brick changelogs will contain,

.. code-block:: text

   # Brick1 Changelog
   CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Brick2 Changelog
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

  
If Brick1 worker processes fast, then Entry is created in Slave and Data Operation succeeds. Since Both the workers can independently, sequence of execution may be like

.. code-block:: text

   # Possible Sequence 1
   [Brick1] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick1] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef
   [Brick2] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Possible Sequence 2
   [Brick2] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef
   [Brick1] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick1] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Possible Sequence 3
   [Brick1] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick2] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef   
   [Brick1] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

We don't have any problems with first and last sequence, But in second sequence Rsync will try to sync data before Entry Creation and Fails.

To solve this issue, we thought if we record CREATE from Rebalance traffic then it will solve this problem. So now brick Changelogs looks like,

.. code-block:: text

   # Brick1 Changelog
   CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Brick2 Changelog
   CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

and possible sequences,

.. code-block:: text

   # Possible Sequence 1
   [Brick1] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick1] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef
   [Brick2] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick2] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Possible Sequence 2
   [Brick2] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick1] CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   [Brick1] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef
   [Brick2] DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # and many more...

We do not have that problem, second CREATE will fail with EEXIST, we ignore it since it is safe error. But will this approach solves all the problems with Rebalance? When more FOPs added, it is very difficult to visualize or guess the problem.

To mock the concurrent workload, Collect sequence from each bricks Changelog and mix both the sequences. We should make sure that order in each brick remains same after the mix.

For example,

.. code-block:: text

   b1 = ["A", "B", "C", "D", "E"]
   b2 = ["F", "G"]

While mixing b2 in b1, for first element in b2 we can randomly choose a position in b1. Let us say random position we got is 2(Index is 2), and insert "F" in index 2 of b1

.. code-block:: text
   
   # before
   ["A", "B", "C", "D", "E"]
   # after
   ["A", "B", "F", "C", "D", "E"]

Now, to insert "G", we should randomly choose anywhere after "F". Once we get the sequence, mock the FOPs and compare with expected values.

I added a `gist <https://gist.github.com/aravindavk/193eda60b6049ad025f4>`__ for testing following workload, it generates multiple sequences for testing.

.. code-block:: text

   # f1 created in Brick1, Rebalanced to Brick2 and then Unlinked
   # Brick1 Changelog
   CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef

   # Brick2 Changelog
   CREATE 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1
   DATA 0945daec-6f8c-438e-9bbf-b2ebf07543ef
   UNLINK 0945daec-6f8c-438e-9bbf-b2ebf07543ef f1

Found two bugs.

- Trying to sync data after UNLINK(Which can be handled in Geo-rep by Rsync retry)
- Empty file gets created.

I just started simulating with Tiering + Geo-replication workload, I may encounter more problems with Renames(Simple, multiple and cyclic). Will update the results soon.

I am sharing the script since it can be easily modified to work with different workloads and to test other projects/components.

Let me know if this is useful. Comments and Suggestions Welcome.
