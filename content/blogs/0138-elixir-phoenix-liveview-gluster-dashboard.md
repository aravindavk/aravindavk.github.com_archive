Title: Elixir Phoenix Liveview and Gluster dashboard
Slug: elixir-phoenix-liveview-gluster-dashboard
Author: Aravinda VK
Date: 2019-08-30
Tags: gluster, glusterfsblog
Summary: I started working on the Gluster dashboard using Phoenix Liveview feature.

I was introduced to [Erlang](https://www.erlang.org/) language by
[Shashi](http://manku.thimma.org/about/) in one of the Mysore Linux
user group meeting at his office(Feb 2009). That was the time when
NoSql was trending, and [CouchDb](http://couchdb.apache.org/) was one
of the popular NoSQL databases. I was very much impressed by the
Erlang programming language and bought the book "Programming Erlang -
Joe Armstrong"

Unfortunately, I couldn't spend much time with the language to develop
any real-time app other than a few Hello World programs.

Finally, I got a chance to work on a
[Elixir](https://elixir-lang.org/) project! The trigger is the Phoenix
Live view feature.

I watched [Phoenix Liveview announcement](https://www.youtube.com/watch?v=8xJzHq8ru0M)
15 days ago and immediately impressed by that.

> Phoenix LiveView enables rich, real-time user experiences with
> server-rendered HTML. For more information, [see the initial
> announcement](https://dockyard.com/blog/2018/12/12/phoenix-liveview-interactive-real-time-apps-no-need-to-write-javascript).

> Note: Currently LiveView is under active development and we are
> focused on getting a stable and solid initial version out. For this
> reason, we will be accepting only bug reports in the issues tracker
> for now. We will open the issues tracker for features after the
> current milestone is ironed out.

I started working on the [Gluster](https://elixir-lang.org/) dashboard using Phoenix
Liveview feature. This dashboard exposes a webhook to receive the
Gluster cluster details. Gluster webhook exporter is written using D
programming language. It runs the required Gluster commands every 10
seconds(configurable) and parses the XML output and pushes the JSON
data to the webhook exposed by the Phoenix application.

![Gluster dashboard - How it works](/images/phoenix-liveview-gluster.jpg)

**Note**: Running exporter in all nodes is optional, can be run in a
few nodes for better availability. If one node goes down, then
exporter from another node can send the details to the dashboard app.

Phoenix app updates the Cluster state to Db and publishes to all
connected LiveView sockets. All users who opened the dashboard page
will get the updated dashboard.

Gluster dashboard is not yet ready, and I am working on the necessary
features to submit this project for [Phoenix
Phrenzy](https://phoenixphrenzy.com/) contest.

> Phoenix Phrenzy is a contest for developers to build with Phoenix
> LiveView, show off their software engineering skills, and help
> demonstrate the capabilities of this great technology to the open
> source community.

I am still working on many fixes to this dashboard project, watch this
space for an update on this project. Let me know if the below
screenshots look good. Thanks.

![Gluster dashboard preview](/images/gluster-dashboard.gif)

Work in progress project source code is available
[here](https://github.com/aravindavk/live_view_demo).
