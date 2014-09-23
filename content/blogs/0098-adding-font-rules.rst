Improving Kannada Fonts - Adding Opentype substitution rules
############################################################

:slug: adding-font-rules
:author: Aravinda VK
:date: 2013-12-03
:tags: ಕನ್ನಡ,kannada,fonts
:summary: Below image shows all the consonant forms of Kannada letter "ka", we will split that into different group according to different rules required.

In my `previous blog </blog/improving-kannada-fonts/>`__ we discussed about the approach to improve Kannada fonts, in this blog we will discuss about adding rules to a font using fontforge python.

Below image shows all the consonant forms of Kannada letter "ka", we will split that into different groups based on type of font rule required. (Read `OpenType specification <http://www.microsoft.com/typography/OpenTypeDev/kannada/intro.htm>`__ to understand more about rules)


.. image:: /images/kagunita.png
   :alt: ಕ್ ಕ ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೃ ಕೄ ಕೆ ಕೇ ಕೈ ಕೊ ಕೋ ಕೌ ಕಂ ಕಃ


Group one: No rules required
============================
If Unicode code points and Glyph ordering is same then no need to add any rules in font. (Some times positional rules may be required, we will discuss about positional rules later)

.. image:: /images/fontrules/group1.png
   :alt: Group 1

Consonant forms identified in this group are

.. image:: /images/fontrules/group1-detail.png
   :alt: Group 1 detail


Group two: above base substitution - separate ligature
======================================================
If the required shape can't be achieved by joining two or more base glyphs as group 1, then we need separate ligature. 


.. image:: /images/fontrules/group2.png
   :alt: Group 2


Rule:

.. code-block:: text

    sub \uni0C95 \uni0CBF by \uni0C95_uni0CBF.abvs;

Where uni0C95 uni0CBF and uni0C95_uni0CBF.abvs are glyph names(Unicode code of "ka" is U+0C95) (`Refer <http://www.unicode.org/charts/PDF/U0C80.pdf>`__). 

In `#languageSummitPune <http://www.mediawiki.org/wiki/Language_portal/Pune_LanguageSummit_November_2013>`__ we(me, `Pravin <http://pravin-s.blogspot.in/>`__, `Sneha <http://snehakore.blogspot.in/>`__, `Santhosh <http://thottingal.in/>`__ and many others) discussed lot about glyph naming standard, will write about importance of glyph names in my next blog.


Group three: above base substitution - Using modified glyph of base glyph
=========================================================================
Sometimes we can achieve the required shape by using half shape of base glyph instead of creating separate ligature as in group 2.

.. image:: /images/fontrules/group3.png
   :alt: Group 3

Following consonants can be derived using half form of "ka"

.. image:: /images/fontrules/group3-detail.png
   :alt: Group 3 detail

Rule:

.. code-block:: text

    sub \uni0C95' [\uni0CCD \uni0CBE \uni0CC6 \uni0CCA \uni0CCC] by \uni0C95.half;


Group four: No rule required because of Normalization
=====================================================
Some letters in Kannada Unicode normalizes into two or more Unicode characters for which rules will be applied(`Refer <http://www.unicode.org/charts/normalization/chart_Kannada.html>`__).


.. image:: /images/fontrules/group4.png
   :alt: Group 4

For following consonants no rules required.

.. image:: /images/fontrules/group4-detail.png
   :alt: Group 4 detail


Featurefile
===========
We can create featurefile and import all rules into the font using fontforge tool. Read `this <http://www.adobe.com/devnet/opentype/afdko/topic_feature_file_syntax.html>`__ article to know more about featurefile syntax and specification.

For consonant forms of "ka" final featurefile looks like this.. 

.. code-block:: text

    lookup kn_abvs_lookup1 {
        lookupflag 0;
        sub \uni0C95 \uni0CBF by \uni0C95_uni0CBF.abvs;
    } kn_abvs_lookup1;

    lookup kn_abvs_lookup2 {
        lookupflag 0;
        sub \uni0C95' [\uni0CCD \uni0CBE \uni0CC6 \uni0CCA \uni0CCC] by \uni0C95.half;
    } kn_abvs_lookup2;

    feature abvs {
        script knd2;
        language dflt;
        lookup kn_abvs_lookup1;
        lookup kn_abvs_lookup2;
     
        script knda;
        language dflt;
        lookup kn_abvs_lookup1;
        lookup kn_abvs_lookup2;
    } abvs;

Once we save the above content in knda_gsub.fea, download the python script from `here <https://raw.github.com/aravindavk/fontforge-python-cookbook/master/apply_gsub_featurefile.py>`__ and run

.. code-block:: bash

    python apply_gsub_featurefile.py <sfd file path> <fea file path>


For example:

.. code-block:: bash

    python apply_gsub_featurefile.py Lohit-Kannada.sfd knda_gsub.fea
