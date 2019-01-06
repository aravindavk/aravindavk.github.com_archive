Template based Volgen - Glusterd2
######################################

:slug: template-based-volgen-glusterd2
:author: Aravinda VK
:date: 2019-01-06
:tags: gluster, glusterfsblog, glusterd2
:summary: Glusterd2 also provides facility to set default Volume
          options when a Volume is created. Each Volume type can have
          its own default Volume options to be enabled by default.

Volfiles are the configuration files used by `Gluster <https://www.gluster.org/>`__
processes. Volfile contains the details about the list of Xlators to
be loaded in a glusterfs process and options for each of those
xlators.

`Glusterd2 <https://github.com/gluster/glusterd2>`__ adds flexibility to
the Volfiles generation process by adding template support.

.. figure:: /images/gluster-template-based-volgen.jpg
   :alt: Template based Volfile generation

   Template based Volfile generation

With Template based Volgen,

- Order of Xlators can be customized for each Volfile type (client,
  brick, glustershd etc.)
- Default enabled or disabled state of each Xlator can be
  customized. **Note**: To enable an Xlator using the Volume Set that
  needs to be included in the template with ``disabled=true``.
- By default, if an Xlator is disabled, then that xlator will not be
  included in the Volfile. If some xlator are expected to always
  present in volfile but enabled state is decided based on an xlator
  option, then that can be specified using
  ``enable-by-option=true``. For example, ``features/changelog``

.. code-block:: text

    volume gv1-changelog
        type features/changelog
        option changelog off
        option op-mode realtime
        option fsync-interval 5
        option changelog-barrier-timeout 120
        option rollover-time 15
        option capture-del-path on
        option changelog-brick /exports/bricks/brick1/brick
        option changelog-dir /exports/bricks/brick1/brick/.glusterfs/changelogs
        option encoding ascii
        subvolumes gv1-posix
    end-volume

Glusterd2 generates the default template on its first start, generated
template is saved in
``/var/lib/glusterd2/templates/defaults.json``. Any new changes made
to the template will be applied only on glusterd2 restart.

Default template can be modified by changing the Go
code(``$SRC/glusterd2/volgen/defaults.go``) if the change is
applicable for most use cases or modifying the JSON
template(``/var/lib/glusterd2/templates/defaults.json``) on disk and
restarting the Glusterd2.

**Note**: All New Volumes will get the volfiles using the modified
template, existing Volumes will only get latest volfile on Volume
set/reset or Volume restart.

Glusterd2 also provides facility to set default Volume options when a
Volume is created. Each Volume type can have its own default Volume
options to be enabled by default. For example, when a replicate (or
distributed replicate) volume is created, then
"profile.default.replicate" will be applied. These profiles can be
customized similar to volfile templates customization.

Default template can be modified by changing the Go
code(``$SRC/glusterd2/commands/volumes/grouped-options.go``) or
modifying JSON profile
file(``/var/lib/glusterd2/templates/profiles.json``) and restarting
Glusterd2.

Volume options will be applied in the following order while generating
the Volfile,

- Xlator default options directly from Option table in Xlator ``*.so``
  files.
- Xlator options from the template
- Options from Volume info(This includes default profile options set
  during Volume create and options set using Volume set)

Volume options can be set for a specific Volfile or for all volfiles
which use that xlator. For example, ``debug/io-stats`` xlator is used
in almost all volfiles. If we set log-level to debug as below, then it
will be added to all Volfiles(Client, brick, glustershd etc).

.. code-block:: text

   glustercli volume set <volname> debug/io-stats.log-level DEBUG


But if we want to set log-level only to the client then,

.. code-block:: text

   glustercli volume set <volname> client.debug/io-stats.log-level DEBUG

**Note**: Providing xlator category during Volume set is optional. For
example, below commands are valid too.

.. code-block:: text

   glustercli volume set <volname> io-stats.log-level DEBUG
   glustercli volume set <volname> client.io-stats.log-level DEBUG


Known issues/Limitations:

- Changing Xlator order for each Volume type is not possible. The
  Changed xlator order will be applied to all Volume types.
- Multiple template support not available.
- Adding a new template with a new name is not yet possible
- Since option names are directly read from xlator so files, 1:1
  mapping with option names used in glusterd1 is not yet
  available(https://github.com/gluster/glusterd2/issues/739)
- Volfile post processing via Filter support is not yet
  available(https://docs.gluster.org/en/v3/Administrator%20Guide/GlusterFS%20Filter/)

