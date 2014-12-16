isatty in Rust
##############

:slug: isatty-in-rust
:author: Aravinda VK
:date: 2014-12-16
:tags: rust, cli
:summary: How to find a command line program is piped from another program or that program was running directly with arguments?

How to find a command line program is `piped <http://en.wikipedia.org/wiki/Pipeline_%28Unix%29>`__ from another program or that program was running directly with arguments? For example, :code:`wc` command can be run as both ways.

.. code-block:: bash
                
    # Create a file /tmp/hello.txt                
    echo "Hello World" > /tmp/hello.txt
    # wc can be used as both ways,
    cat /tmp/hello.txt | wc
    # or
    wc /tmp/hello.txt


In Python, it is very easy to identify how a command is run

.. code-block:: python

   import sys
   
   if sys.stdin.isatty():
       filename = sys.argv[1]
       # do something with file, open the file and process it
   else:
       # use for `line in sys.stdin` to read line by line
       data = sys.stdin.read()
       # do something with data

How to do this in `Rust <http://rust-lang.org>`__?
==================================================
It is very easy in Rust too, see...

.. code-block:: rust

   use std::io;

   fn main(){
       if io::stdio::stdin_raw().isatty(){
           println!("Not pipe");
       }
       else{
           let mut reader = io::stdin();
           loop{
               match reader.read_line() {
                   Ok(txt) => println!("Read: {}", txt),
                   Err(_e) => break
               }
           }
       }
   }

To handle all the errors except EOF,

.. code-block:: rust

   let mut reader = io::stdin();
   loop{
       match reader.read_line() {
           Ok(txt) => println!("Read: {}", txt),
           Err(e) => match e.kind{
               io::EndOfFile => break,
               _ => {
                       panic!("ERROR: {}", e);
               }
           }
       }
   }

We can now create `pipe <http://en.wikipedia.org/wiki/Pipeline_%28Unix%29>`__ aware applications easily in Rust, let me know if you find this useful.

btw, Rust 1.0 is coming, see `here <http://blog.rust-lang.org/2014/12/12/1.0-Timeline.html>`__

*(Code examples here were built with "rustc 0.13.0-nightly (126db549b 2014-12-15 00:07:35 +0000)")*
