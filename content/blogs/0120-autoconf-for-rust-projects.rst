Autoconf for Rust Projects
##########################

:slug: autoconf-for-rust-projects
:author: Aravinda VK
:date: 2016-05-10
:tags: rust, autoconf
:summary: In this blog we will discuss about using Autoconf for Rust
	  projects along with Cargo.

Cargo is an awesome tool for managing `Rust <http://rust-lang.org>`__
projects, it takes care of all the Rust dependencies. But to package
and distribute the generated files specific to target distribution is
very difficult. For example, if the generated binary to be used by
sudo user then we need to copy that to ``/usr/sbin`` directory instead
of ``/usr/bin`` (sbin path may change for example ``/usr/local/sbin`` ). 

In this blog we will discuss about using Autoconf for Rust projects
along with Cargo.


Example: Simple Web server and a systemd service file
-----------------------------------------------------

Create a new project called ``myservice`` using,

.. code-block:: bash

    cargo new myservice --bin

Update ``Cargo.toml`` with required Rust dependencies and other details.

.. code-block:: ini

    [package]
    name = "myservice"
    version = "0.1.0"
    authors = ["NAME <EMAIL>"]
     
    [dependencies]
    iron = "*"

and add the following example code in ``src/main.rs`` (Copied from http://ironframework.io)

.. code-block:: rust

    extern crate iron;
     
    use iron::prelude::*;
    use iron::status;
     
    fn main() {
        fn hello_world(_: &mut Request) -> IronResult<Response> {
            Ok(Response::with((status::Ok, "Hello World!")))
        }
     
        Iron::new(hello_world).http("localhost:3000").unwrap();
        println!("On 3000");
    }

Create a systemd unit file with the following content, we need Path of
bin to add it to service file. We will take help of Autoconf to
dynamically generate systemd unit file. Create a systemd unit file as
``myserviced.service.in`` (Note the @SBINDIR@ autoconf variable)

.. code-block:: ini

    [Unit]
    Description=MyService
    After=syslog.target network.target
     
    [Service]
    Type=simple
    ExecStart=@SBINDIR@/myserviced
    ExecReload=/bin/kill -SIGUSR2 $MAINPID
     
    [Install]
    WantedBy=multi-user.target

If we use ``@sbindir@`` then it will not expand completely, introduce
a new variable ``SBINDIR`` in ``configure.ac`` which will expand
completely with default path.

Now we will create ``configure.ac`` file

.. code-block:: bash

    AC_INIT([myservice], m4_esyscmd([grep version Cargo.toml | awk '{print $3}' | tr -d '"' | tr -d "\n"]), [YOUR_EMAIL])
     
    VERSION=$(grep version Cargo.toml | awk '{print $3}' | tr -d '"' | tr -d "\n")
     
    # Default value for sbindir
    prefix_temp=$prefix
    exec_prefix_temp=$exec_prefix
     
    test "${prefix}" = "NONE" && prefix="${ac_default_prefix}"
    test "${exec_prefix}" = "NONE" && exec_prefix='${prefix}'

    # Initial Value is $exec_prefix/sbin
    sbintemp="${sbindir}"

    # Expands to $prefix/sbin
    eval sbintemp=\"${sbintemp}\"
    # Expands to /usr/local/sbin or /usr/sbin if --prefix is passed
    eval sbintemp=\"${sbintemp}\"
    SBINDIR=${sbintemp}
     
    AC_SUBST(SBINDIR)
    AC_SUBST(VERSION)
     
    AC_CONFIG_FILES([Makefile
                     myserviced.service
                     myservice.spec])
     
    AC_OUTPUT

and ``Makefile.in`` file

.. code-block:: bash

    CWD := $(shell pwd)
    TARDIR := myservice-@VERSION@
    RPMBUILD := $(HOME)/rpmbuild

    devbuild:
        cargo build

    build:
        cargo build --release
  
    dist:
        @rm -fr ./dist
        mkdir -p ./dist/$(TARDIR)
        rsync -r --exclude .git/ --exclude dist/ --exclude target/ $(CWD)/ ./dist/$(TARDIR)
        cd ./dist/; tar -zcf $(TARDIR).tar.gz $(TARDIR);
     
    install: build
        install -d $(DESTDIR)@SBINDIR@
        install -d ${DESTDIR}/usr/lib/systemd/system/
        install -m 755 ./target/release/myservice ${DESTDIR}@SBINDIR@/myserviced
        install -m 0644 ./myserviced.service ${DESTDIR}/usr/lib/systemd/system/myserviced.service
     
    rpm: dist
        rm -rf $(RPMBUILD)/SOURCES/myservice*
        rm -rf $(RPMBUILD)/BUILD/myservice*
        mkdir -p $(RPMBUILD)/SOURCES
        cp ./dist/myservice-@VERSION@.tar.gz $(RPMBUILD)/SOURCES; \
        rpmbuild -ba myservice.spec                


Now project will looks like,

.. code-block:: text

    $myservice/
	    - Cargo.toml
		- src/
		    - main.rs
		- Makefile.in
		- configure.ac
        - myservice.service.in

Run ``autoconf`` to generate ``configure`` file from ``configure.ac``
file. Then run ``./configure``, it will generate following files

.. code-block:: text

    Makefile.in => Makefile
    myserviced.service.in => myserviced.service
    myservice.spec.in => myservice.spec

Steps to install ``myservice`` (Source installation),

.. code-block:: bash

      autoconf
      ./configure
      sudo make install

make install will run cargo build --release, and copies generated
binary to /usr/local/sbin and systemd service file to
/usr/lib/systemd/system

Binary can be installed to /usr/sbin by passing ``--prefix=/usr`` or
``--sbindir=/usr/sbin`` to configure(For example,
``./configure --prefix=/usr`` )

``myservice`` can now be enabled using,

.. code-block:: bash

    sudo systemctl enable myserviced
    sudo systemctl start myserviced

Bonus: Generate RPM for your package
-------------------------------------
Sample RPM spec file is available in the `repo <https://github.com/aravinda/rust_autoconf/myservice.spec.in>`__

.. code-block:: bash

    autoconf
    ./configure
    make rpm

Generated RPM will be available in ``$HOME/rpmbuild/RPMS/x86_64/``

.. code-block:: bash

    rpm -qlp $HOME/rpmbuild/RPMS/x86_64/myservice-0.1.0-1.fc23.x86_64.rpm

.. code-block:: text

    /usr/lib/systemd/system/myserviced.service
    /usr/sbin/myserviced


Rust, Cargo and Autoconf Version
---------------------------------

.. code-block:: text

    rustc 1.8.0 (db2939409 2016-04-11)
    cargo 0.9.0-nightly (8fc3fd8 2016-02-29)
    autoconf (GNU Autoconf) 2.69

Reference project is available in github https://github.com/aravindavk/rust_autoconf
