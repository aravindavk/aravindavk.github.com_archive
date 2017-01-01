Gluster, Me and 2016
####################

:slug: gluster-and-me
:author: Aravinda VK
:date: 2017-01-01
:tags: gluster, glusterfsblog
:summary: Expecting more and more challenges in this new year. Happy new Year to all

I started working with the Gluster community since 2013.

2016 with Gluster was great, gave me the opportunity to work on many areas of Gluster mainly Geo-replication, Glusterfind and Events APIs. Expecting more and more challenges in this new year. **Happy New Year to all**.

**Main highlights**

- Became `Maintainer <http://www.gluster.org/pipermail/gluster-devel/2016-March/048620.html>`__ of Gluster Geo-replication component
- Designed and implemented Events APIs for Gluster
- Attended Gluster developer summit in Berlin

**Number of patches per year**

.. image:: /images/gluster-contribution-by-year.png
   :alt: Number of Patches per Year

..
    2013     5
    2014    27
    2015    60
    2016    65
    library(ggplot2)
    png("gluster-contribution-by-year.png", width=400, height=300)
    dd <- data.frame(year=c(2013, 2014, 2015, 2016), num=c(5, 27, 60, 65))
    ggplot(dd, aes(x=year)) + geom_bar(stat="identity", aes(y=num), fill="#483d8b") + geom_text(aes(label=num, y=num), vjust=2, color="white") + labs(x="Year", y="Number of Patches")
    dev.off()

**Number of patches per component**

.. image:: /images/gluster-contribution-by-component.png
   :alt: Number of Patches per Component

..
    glusterfind             22
    eventsapi               20
    geo-replication        102
    others                  13
    library(ggplot2)
    png("gluster-contribution-by-component.png", width=400, height=300)
    dd <- data.frame(component=c("geo-replication", "glusterfind", "eventsapi", "others"), num=c(102, 22, 20, 13))
    ggplot(dd, aes(x=component)) + geom_bar(stat="identity", aes(y=num), fill="#483d8b") + geom_text(aes(label=num, y=num), vjust=2, color="white") + labs(x="Component", y="Number of Patches")
    dev.off()
    
Blogs about Gluster
-------------------
**2013**

- `GlusterFS Tools <http://aravindavk.in/blog/glusterfs-tools>`__
- `glusterdf - df for gluster volumes <http://aravindavk.in/blog/glusterdf-df-for-gluster-volumes>`__
- `Effective GlusterFs monitoring using hooks <http://aravindavk.in/blog/effective-glusterfs-monitoring-using-hooks>`__

**2014**

- `gvolinfojson - A utility to convert xml output of gluster volume info to json <http://aravindavk.in/blog/gvolinfojson>`__
- `Introducing gdash - GlusterFS Dashboard <http://aravindavk.in/blog/introducing-gdash>`__

**2015**

- `GlusterFS Geo-replication Tutorials - Understanding Session Creation <http://aravindavk.in/blog/glusterfs-georeplication-tutorials-1>`__
- `Introducing georepsetup - Gluster Geo-replication Setup Tool <http://aravindavk.in/blog/introducing-georepsetup>`__
- `Simulating Race Conditions <http://aravindavk.in/blog/simulating-race-conditions>`__

**2016**

- `Interfaces for Gluster Management <http://aravindavk.in/blog/interfaces-for-gluster-management>`__
- `Qcow2 snapshots and Gluster Geo-replication <http://aravindavk.in/blog/qcow2-snapshots-and-gluster-georeplication>`__
- `10 minutes introduction to Gluster Eventing Feature <http://aravindavk.in/blog/10-mins-intro-to-gluster-eventing>`__
- `Effective Gluster Monitoring using Events APIs <http://aravindavk.in/blog/effective-gluster-monitoring-eventsapis>`__
- `Gluster Geo-replication Tools <http://aravindavk.in/blog/gluster-georep-tools>`__
- `Gluster Geo-replication Dashboard Experiment <http://aravindavk.in/blog/gluster-georep-dashboard-experiment>`__

.. image:: /images/gluster-blogs-till-2016.png
   :alt: Gluster Blogs
  
..
    R code to generate Blogs graph
    library(ggplot2)
    dd <- data.frame(year=c(2013, 2014, 2015, 2016), num=c(3, 2, 3, 6))
    png("gluster-blogs-till-2016.png", width=400, height=300)
    ggplot(dd, aes(x=year)) + geom_bar(stat="identity", aes(y=num), fill="#483d8b") + geom_text(aes(label=num, y=num), vjust=2, color="white") + labs(x="Years", y="Number of Blogs")
    dev.off()

Gluster github projects
-----------------------
Many projects are still in young stage. Comments and Suggestions are welcome.

**Projects started in 2013**

- ``python`` `Tool to show Volume information in tabular format and df like command for Gluster Volumes <https://github.com/aravindavk/glusterfs-tools>`__
- ``python`` `Gluster Monitoring experiment using Gluster hooks <https://github.com/aravindavk/glusterfs-web>`__

**Projects started in 2014**

- ``golang`` `Tool to convert XML output of gluster volume info --xml to json <https://github.com/aravindavk/gvolinfojson>`__
- ``python`` ``emberjs`` `Light weight Web dashboard to view Cluster information in Web <https://github.com/aravindavk/gdash>`__
- ``rust`` `Gluster Changelog parser library and utility <https://github.com/aravindavk/glusterchangelog>`__

**Projects started in 2015**

- ``golang`` `Experimental GlusterFS brick crawler <https://github.com/aravindavk/crawler>`__
- ``python`` `GFID to Path using Historical Changelogs <https://github.com/aravindavk/gfid_to_path>`__
- ``python`` `Collection of Geo-replication troubleshooting scripts(Changelog parser, xtime, stime and gfid utilities) <https://github.com/aravindavk/gluster_georep_scripts>`__
- ``python`` `Alternate setup tool for Gluster Geo-replication <https://github.com/aravindavk/georepsetup>`__

**Projects started in 2016**

- ``go``     `Go language bindings for Gluster CLI commands <https://github.com/aravindavk/glustercli>`__
- ``python`` `Changelog based utility to search modified/not modified files in Gluster Volume <https://github.com/aravindavk/gchangelogapi>`__
- ``python`` `Tool to generate workload by reading existing changelogs <https://github.com/aravindavk/gluster_changelog_to_workload>`__
- ``python`` `Utility to find life cycle of a file or directory using Gluster Changelogs <https://github.com/aravindavk/gluster-file-history>`__
- ``python`` `Python bindings for Gluster CLI commands <https://github.com/gluster/glustercli-python>`__
- ``rust``   `Library to manage Gluster Xattrs(Not all xattrs covered Yet) <https://github.com/aravindavk/glusterxattr>`__
- ``rust``   `A tool to find issues with directories in Gluster Volume <https://github.com/aravindavk/gluster-dir-health-check>`__
- ``python`` `Better Geo-replication status and setup tool <https://github.com/aravindavk/gluster-georep-tools>`__
- ``python`` `(Incomplete) REST APIs for Gluster Management(wrappers around CLI commands) <https://github.com/gluster/restapi>`__
- ``python`` `Collection of Gluster debugging tools(gfid, dirgfid2path, changelogparser, stime, xtime, volmark) <https://github.com/gluster/glustertool>`__
- ``python`` ``elm`` `Geo-replication Dashboard experiment using Events APIs <https://github.com/aravindavk/gluster-georepdash>`__
  
.. image:: /images/gluster-github-projects-till-2016.png
   :alt: Gluster Projects
  
..
    R code to generate Blogs graph
    library(ggplot2)
    dd <- data.frame(year=c(2013, 2014, 2015, 2016), num=c(2, 3, 4, 11))
    png("gluster-github-projects-till-2016.png", width=400, height=300)
    ggplot(dd, aes(x=year)) + geom_bar(stat="identity", aes(y=num), fill="#483d8b") + geom_text(aes(label=num, y=num), vjust=2, color="white") + labs(x="Years", y="Number of Projects")
    dev.off()

Charts are created using ``ggplot2`` of `R <https://www.r-project.org/>`__ programming, For code look in HTML comments of this page :)
