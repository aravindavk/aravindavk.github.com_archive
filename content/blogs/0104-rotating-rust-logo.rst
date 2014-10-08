Rotating Rust programming logo
##############################

:slug: rotating-rust-logo
:author: Aravinda VK
:date: 2014-10-08
:tags: rust
:summary: SVG animation, rotating rust logo

Today I learned to animate any shape in `SVG <http://en.wikipedia.org/wiki/Scalable_Vector_Graphics>`__ using `animateTransform <http://www.w3.org/TR/SVG/animate.html#AnimateTransformElement>`__ element, and tried it with `Rust programming <http://www.rust-lang.org/>`__ logo, here yo go :)

.. raw:: html

   <embed src="/images/rust_rotating.svg" type="image/svg+xml" />

I downloaded SVG from `here <http://en.wikipedia.org/wiki/File:Rust_programming_language_black_logo.svg>`__, and added :code:`animateTransform` as child of :code:`path`


.. code-block:: xml

    <?xml version="1.0" encoding="windows-1252"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px" width="144px" height="144px"
         viewBox="19 19 106 106" style="enable-background:new 0 0 144 144;"
         xml:space="preserve">
    <path d="M122.631,69.716l-4.394-2.72....z">
        <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 71 71"
                          to="360 71 71"
                          dur="10s"
                          repeatCount="indefinite"/>
    </path>
    </svg>

Above code is partial, illustrative purpose only. You can download modified SVG from `here </images/rust_rotating.svg>`__

BTW, If you never heard of programming language Rust, Go and checkout `rust-lang.org <http://www.rust-lang.org/>`__ and `Guide <http://doc.rust-lang.org/guide.html>`__. It is awesome.

    **Rust** is a systems programming language that runs blazingly fast, prevents almost all crashes*, and eliminates data races. 
