Title: Building Crystal Programs with Source File Hash baked in
Slug: building-crystal-programs-with-source-hash-baked-in
Author: Aravinda Vishwanathapura
Date: 2021-07-30
Tags: crystal,go,hash,source
Summary: "Similarly, if `shards` is used as the package manager for your Crystal Programs, then you can include the `VERSION` automatically while compiling the program."

This post is inspired by the [blog post](https://www.btbytes.com/posts/2020-05-05-01-golang-hash-builds.html) written by [Pradeep Gowda](https://twitter.com/btbytes) about embedding Source file Hash while building Go programs.

> The one issue with checking in the binary with source code is, you can’t be sure if the binary is built with the latest source that is adjacent to it.
>
> [https://www.btbytes.com/posts/2020-05-05-01-golang-hash-builds.html](https://www.btbytes.com/posts/2020-05-05-01-golang-hash-builds.html)

I adopted a similar technique while building [Crystal](https://crystal-lang.org) programs. This is much simpler with Crystal because of the macros.

hello.cr file:

```crystal

SOURCE_HASH = {{ `sha256sum #{__FILE__} | cut -d' ' -f1`.chomp.stringify }}

puts SOURCE_HASH
```

Build step:

```console
$ crystal build hello.cr
```

Verify:

```console
$ ./hello
cdb9db6f5ac4a0df1ed06de118c569fa225785685849d533c1ba550854b8b4ab
$ sha256sum hello.cr
cdb9db6f5ac4a0df1ed06de118c569fa225785685849d533c1ba550854b8b4ab  hello.cr
```

Similarly, if `shards` is used as the package manager for your Crystal Programs, then you can include the `VERSION` automatically while compiling the program.

```crystal
VERSION = {{ `shards version #{__DIR__}`.chomp.stringify }}

puts VERSION
```
