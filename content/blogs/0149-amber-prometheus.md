Title: Monitoring Amber apps with Prometheus
Slug: amber-prometheus
Author: Aravinda VK
Date: 2020-11-01
Tags: amber, crystal, prometheus
Summary: Crometheus is the Prometheus client library for the Crystal programming language. It provides an easy way to integrate with any other web frameworks or as a standalone Prometheus exporter to monitor an external application or tool.

[Crometheus](https://github.com/Darwinnn/crometheus) is a [Prometheus](https://prometheus.io) client library for instrumenting programs written in the [Crystal programming](https://crystal-lang.org) language. It provides an easy way to integrate with any other web frameworks or as a standalone Prometheus exporter to monitor an external application or tool.

In this blog, we will see how to integrate Crometheus with [Amber](https://amberframework.org) applications. 

Add Crometheus as a dependency in your shard.yml file.

```yaml
  crometheus:
    github: darwinnn/crometheus
    branch: master
```

And run `shards install` to install the dependencies. In Amber, the HTTP handler is called Plug. To integrate Crometheus, include it as a Plug as shown below.

```crystal
# file: config/initializers/metrics.cr
require "crometheus"

Crometheus.default_registry.path = "/metrics"
```

```diff
diff --git a/config/routes.cr b/config/routes.cr
index c50f03c..db1a94a 100644
--- a/config/routes.cr
+++ b/config/routes.cr
@@ -1,3 +1,5 @@
+require "crometheus"
+
 Amber::Server.configure do
   pipeline :web do
     # Plug is the method to use connect a pipe (middleware)
@@ -10,6 +12,7 @@ Amber::Server.configure do
     plug Amber::Pipe::Session.new
     plug Amber::Pipe::Flash.new
     plug Amber::Pipe::CSRF.new
+    plug Crometheus.default_registry.get_handler
   end
 
   pipeline :api do
```

Crometheus traps the `/metrics` (or configured path), but Amber doesn't know about this dynamic route and produces the following error when the `/metrics` page is opened.

```text
2020-10-23T15:17:27.301760Z   WARN - error: Error: 404
The request was not found. GET - /metrics (Amber::Exceptions::RouteNotFound)
from lib/amber/src/amber/controller/static.cr:7:7 in 'index'
  from config/routes.cr:45:5 in '->'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/primitives.cr:255:3 in 'call'
  from lib/amber/src/amber/router/context.cr:78:5 in 'process_request'
  from lib/amber/src/amber/pipes/controller.cr:8:9 in 'call'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/http/server/handler.cr:28:7 in 'call_next'
  from lib/amber/src/amber/pipes/static.cr:85:11 in 'call_next_with_file_path'
  from lib/amber/src/amber/pipes/static.cr:45:9 in 'call'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/http/server/handler.cr:28:7 in 'call_next'
  from lib/amber/src/amber/pipes/error.cr:11:9 in 'call'
  from lib/amber/src/amber/pipes/pipeline.cr:20:11 in 'call'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/http/server/request_processor.cr:50:11 in 'process'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/http/server.cr:513:5 in 'handle_client'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/http/server.cr:468:13 in '->'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/primitives.cr:255:3 in 'run'
  from ../../../../../../usr/local/Cellar/crystal/0.35.1_1/src/fiber.cr:92:34 in '->'

08:47:27 error (Warn) Error: 404
```

To avoid this, add a dummy route and a controller to make Amber happy.

```diff
diff --git a/config/routes.cr b/config/routes.cr
index c50f03c..876009b 100644
--- a/config/routes.cr
+++ b/config/routes.cr
@@ -30,7 +33,8 @@ Amber::Server.configure do
   routes :web do
     
       get "/", HomeController, :index
+      get "/metrics", ApplicationController, :metrics
+
   end
 
   routes :api do
```

Add the below function to the `application_controller.cr` file.

```diff
diff --git a/src/controllers/application_controller.cr b/src/controllers/application_controller.cr
index 3f7b7e6..3cd44e2 100644
--- a/src/controllers/application_controller.cr
+++ b/src/controllers/application_controller.cr
@@ -3,4 +3,7 @@ require "jasper_helpers"
 class ApplicationController < Amber::Controller::Base
   include JasperHelpers
   LAYOUT = "application.ecr"
+
+  def metrics
+  end
 end
```

Now browse [http://localhost:3000/metrics](http://localhost:3000/metrics) to see the default metrics.

```text
# HELP process Standard process statistics
# TYPE process gauge
process_gc_heap_bytes 786432.0
process_gc_free_bytes 86016.0
process_gc_total_bytes 681168.0
process_gc_unmapped_bytes 0.0
process_bytes_since_gc 681168.0
process_cpu_seconds_total 0.055226
```

Crometheus provides a few metrics by default and enables a few more metrics by adding one more Plug as below. HttpCollector shows metrics related to all HTTP routes of application. To skip tracking the `/metrics` route, add HttpCollector Plug after the Crometheus default handler.


```diff
index c50f03c..fc57a4d 100644
--- a/config/routes.cr
+++ b/config/routes.cr
@@ -1,3 +1,5 @@
+require "crometheus"
+
 Amber::Server.configure do
   pipeline :web do
     # Plug is the method to use connect a pipe (middleware)
@@ -10,6 +12,8 @@ Amber::Server.configure do
     plug Amber::Pipe::Session.new
     plug Amber::Pipe::Flash.new
     plug Amber::Pipe::CSRF.new
+    plug Crometheus::Middleware::HttpCollector.new
+    plug Crometheus.default_registry.get_handler
   end
```

Now visit [http://localhost:3000/metrics](http://localhost:3000/metrics) to see the additional metrics.

```text
# HELP http_request_duration_seconds The HTTP response duration of the application.
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_count{method="GET", path="/metrics"} 12.0
http_request_duration_seconds_sum{method="GET", path="/metrics"} 0.002073
http_request_duration_seconds_bucket{le="0.005", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.01", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.025", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.05", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.1", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.25", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="0.5", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="1.0", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="2.5", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="5.0", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="10.0", method="GET", path="/metrics"} 12.0
http_request_duration_seconds_bucket{le="+Inf", method="GET", path="/metrics"} 12.0
# HELP http_request_exceptions_total The total number of exceptions raised by the application.
# TYPE http_request_exceptions_total counter
# HELP http_requests_total The total number of HTTP requests handled by the application.
# TYPE http_requests_total counter
http_requests_total{code="200", method="GET", path="/metrics"} 12.0
```

Refer examples to add custom metrics specific to your applications. [github.com/Darwinnn/crometheus/tree/master/examples](https://github.com/Darwinnn/crometheus/tree/master/examples)

In the [next blog](https://aravindavk.in/blog/crystal-prometheus) post, we will see how to use Crometheus to monitor external applications/services/tools.

## References:
* [Prometheus](https://prometheus.io)
* [Amber Framework](https://amberframework.org)
* [Crystal Programming language](https://crystal-lang.org)
* [Crometheus](https://github.com/Darwinnn/crometheus)
