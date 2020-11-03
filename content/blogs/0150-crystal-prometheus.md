Title: Writing Prometheus exporter using Crystal language - Part 2
Slug: crystal-prometheus
Author: Aravinda VK
Date: 2020-11-03
Tags: amber, crystal, prometheus, crometheus
Summary: In this blog, we will see how to monitor an external application or a log file.

In the [last blog](https://aravindavk.in/blog/amber-prometheus/) post, we discussed instrumenting [Amber](https://amberframework.org) apps using the [Crometheus](https://github.com/Darwinnn/crometheus) library. In this blog, we will see how to monitor an external application or a log file.

One main difference here is defining various metric types like Counter, Guage, etc.. are not required. But export the sample values when requested.

I created a demo app using the HTTP server example available on the Crystal language home page. In this blog, we will instrument this web app by collecting a few metrics externally.

```crystal
# file: myapp.cr
require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello world, got #{context.request.path}!"
end

puts "Listening on http://127.0.0.1:8080"
server.listen(8080)
```

Build and run the application,

```
$ crystal build myapp.cr
$ ./myapp
```

Now let's create an app that collects the CPU, Memory, and uptime details about the app we created initially(or any other app). Create and install the project dependencies using,

```
$ mkdir myapp_exporter
$ cd myapp_exporter
$ shards init
$ mkdir src
$ touch src/myapp_exporter.cr
$ shards install
```

```yaml
# file: shard.yml
name: myapp_exporter
version: 0.1.0

dependencies:
  crometheus:
    github: darwinnn/crometheus
    branch: master

targets:
  myapp_exporter:
    main: src/myapp_exporter.cr
```

The below command provides the CPU, memory, and uptime information about the application.

```
$ ps --no-header -ww -o pcpu,pmem,rsz,vsz,etimes,comm -C myapp
```

```crystal
# file: src/myapp_exporter.cr
require "crometheus"

class MyappMetrics < Crometheus::Metric
  def self.type
    Type::Gauge
  end

  def samples : Nil
    cmdout = `ps --no-header -ww -o pcpu,pmem,rsz,vsz,etimes,comm -C myapp`
    return if cmdout == ""

    parts = cmdout.split
    pcpu = parts[0].strip.to_f
    pmem = parts[1].strip.to_f
    rsz = parts[2].strip.to_f * 1024
    vsz = parts[3].strip.to_f * 1024
    uptime = parts[4].strip.to_f
    labels = {:server => "server1.example.com"}
    yield Crometheus::Sample.new(pcpu, labels: labels, suffix: "cpu_percentage")
    yield Crometheus::Sample.new(pmem, labels: labels, suffix: "memory_percentage")
    yield Crometheus::Sample.new(rsz, labels: labels, suffix: "resident_memory_bytes")
    yield Crometheus::Sample.new(vsz, labels: labels, suffix: "virtual_memory_bytes")
    yield Crometheus::Sample.new(uptime, labels: labels, suffix: "uptime_seconds")
  end
end

MyappMetrics.new(:myapp, "CPU, Memory and Uptime metrics")

Crometheus.default_registry.path = "/metrics"
Crometheus.default_registry.run_server
```

Build and run,

```
$ shards build
$ ./bin/myapp_exporter
```

Now browse [http://localhost:5000/metrics](http://localhost:5000/metrics) to see the metrics related to `myapp`

```text
# HELP myapp CPU, Memory and Uptime metrics
# TYPE myapp gauge
myapp_cpu_percentage{server="server1.example.com"} 0.0
myapp_memory_percentage{server="server1.example.com"} 0.3
myapp_resident_memory_bytes{server="server1.example.com"} 6664192.0
myapp_virtual_memory_bytes{server="server1.example.com"} 48365568.0
myapp_uptime_seconds{server="server1.example.com"} 1656.0
```

Add multiple classes to collect more meaningful data. For example, connect to the database and query the table to see the number of users or any other entities.
