Title: Monitoring GlusterFS - Yet another try
Slug: monitoring-glusterfs-yet-another-try
Author: Aravinda VK
Date: 2019-12-03
Tags: glusterfs, glusterfsblog
Summary: Introduce Metrics SDK - Collection of libraries that helps to collect metrics without knowing about Gluster internals
Image: /images/gluster-volume-utilization.png

Monitoring is one of my favorite topics, and previously I tried
multiple ways to monitor GlusterFS effectively. Initially, I decided
to avoid running Gluster CLI commands with too frequent intervals by
using Gluster hooks(Blog about using Gluster hooks is
[here](https://aravindavk.in/blog/effective-glusterfs-monitoring-using-hooks/)). But
this approach was not practical since hooks are not available for all
events.

Then I started a project called
"[gdash](https://aravindavk.in/blog/introducing-gdash/)" to visualize
the health of the cluster using gluster command-line tools. But this
was having only limited access to the cluster status and depended
solely on what gluster CLI provides.

Events APIs are introduced in Gluster to fill the gaps of limited
hooks support. The events listener needs to be started in each node of
the cluster, and it exports the local events via registered
webhooks.

* [10 minutes introduction to Gluster Eventing Feature](https://aravindavk.in/blog/10-mins-intro-to-gluster-eventing/)
* [Effective Gluster Monitoring using Events APIs](https://aravindavk.in/blog/effective-gluster-monitoring-eventsapis/)
* [Gluster Geo-replication Dashboard Experiment](https://aravindavk.in/blog/gluster-georep-dashboard-experiment/)

Events APIs are great since it helps to reduce polling Gluster
cluster. But Events APIs are not perfect because of the asynchronous
nature it can miss events. If a Webhook listener is down, then there
is no way to get the history of events.

Events APIs are useful for creating health/status boards but not so
helpful while designing monitoring systems that require historical
data to make decisions and plot graphs. For example, adding an event
for each file create/delete is not practical, so events APIs are not
useful for getting Volume utilization details and similar metrics.

Many approaches we tried didn't succeed because all are dependent on
gluster command-line tools. When we depend on Gluster CLIs, then
collecting metrics from every node doesn't make sense because Gluster
CLIs returns the same data from all the nodes. So if we start
collecting from a single node of the cluster, then we need a mechanism
to choose another node when the previously active node goes down.

When we started working on the Prometheus integration, our approach
was to collect metrics at the lowest level possible and use the
monitoring system's capability to aggregate the metrics from multiple
nodes. For example, instead of collecting Volume utilization via mount
or Gluster volume status command, Prometheus exporter collected
utilization metrics from the bricks. This approach avoided all the
complexities related to leader election or duplicate metrics.

The gluster-prometheus project solved problems related to some of the
metrics, but not for all. We are still dependent on Gluster CLI
commands for some of the metrics like Profile and others.

- [Gluster Prometheus project](https://github.com/gluster/gluster-prometheus)
- [Monitoring GlusterFS - Volume Utilization](https://aravindavk.in/blog/monitoring-glusterfs-volume-utilization/)
- [Gluster Volume utilization - Multiple approaches](https://aravindavk.in/blog/gluster-volume-utilization-multiple-approaches/)
- [Elixir Phoenix Liveview and Gluster dashboard](https://aravindavk.in/blog/elixir-phoenix-liveview-gluster-dashboard/) - Dashboard experiment for Gluster but not using Prometheus.

### What's wrong with using Gluster CLI commands for metrics collection?

* Gluster CLI command fails some times due to locks(When gluster
  command-line tools used in parallel)
* Gluster CLIs will not help to collect only local metrics
* If Gluster CLIs are not available(If collecting client metrics or
  external projects like [kadalu.io](https://kadalu.io), which doesn't use
  Glusterd!)

## So what next?

* Similar to the previous approach, collect metrics at as lowest level
  as possible.
* Do not depend on Gluster CLIs, but design an external tool to
  populate the peer, cluster, and volume info files. For example,
  while collecting a brick's utilization, how to find to which node,
  volume, or cluster it belongs? Maintain info file for each entity
  and update whenever cluster state changes. (Events APIs comes handy
  here).
* For collecting volume profile related metrics, understand the RPC
  between brick process and glusterd, and communicate directly to
  brick process and collect only local metrics.
* Integrate with the metrics available from [Amar's project](https://github.com/amarts/glustermetrics)
* Introduce Metrics SDK - Collection of libraries that helps to
  collect metrics without knowing about Gluster internals.  This SDK
  also helps us to integrate with any Monitoring tools(Prometheus,
  Netdata, Nagios, etc.)

Last week [Amar](https://medium.com/@tumballi) invited Gluster
developers to propose features for Gluster 8, 9, and
X([here](https://www.gluster.org/blog-planning-ahead-for-gluster-releases/)
and
[here](https://lists.gluster.org/pipermail/gluster-devel/2019-November/056709.html). I
am planning to spend some time on mentoring/designing/implementing the
Monitoring solution for Gluster.

I am hoping to get some success this time. Let me know if anyone
interested to work on this.

Thanks. Let me know your thoughts.
