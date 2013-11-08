---
title: Improving Kannada Fonts
tags: [ಕನ್ನಡ, kannada, fonts]
layout: post
desc: "Today I completed first stage, created two python scripts to change the glyph names and to adjust left and right space."
---
[Pravin](http://pravin-s.blogspot.in/), maintainer of Lohit fonts started [lohit2](https://github.com/pravins/lohit2) project to update all lohit fonts according to Open Type specifications. Read more [here](http://pravin-s.blogspot.in/2013/08/project-creating-standard-and-reusable.html) and [here](http://pravin-s.blogspot.in/2013/10/lohit2-surely-helping-identifying.html)

I am planning to improve Lohit Kannada(also Gubbi and Navilu) and identified following stages.

## Stage one
1. Clone lohit2, Gubbi and Navilu
2. Rename all base glyphs according to the standard(uniXXXX format)
3. Adjust left/right spacing for all base glyphs
4. Testing

## Stage two
1. Create half forms of base glyphs which are required for creating ligatures.
2. Delete the unused ligatures(Can be achieved using rules)
3. Add [GSUB](http://partners.adobe.com/public/developer/opentype/index_table_formats1.html) rules for consonants.
4. Mark to Base GPOS rules.
5. Identify special consonant for which separate ligature is required.(ki, gi etc)
6. Testing

## Stage three
1. Create ligatures which are identified in previous stage.(Most of the ligatures already exists in fonts)
2. Add [GSUB](http://partners.adobe.com/public/developer/opentype/index_table_formats1.html) rules for those ligatures
3. Testing

## Stage four
1. Rename all vattakshara glyphs.
2. Add [GSUB](http://partners.adobe.com/public/developer/opentype/index_table_formats1.html) rules.
3. Mark to Base [GPOS](http://partners.adobe.com/public/developer/opentype/index_table_formats2.html) rules for vattakshara
4. Testing

## Stage five
1. Mark to Mark [GPOS](http://partners.adobe.com/public/developer/opentype/index_table_formats2.html) rules for double vattakshara.
2. Create additional ligatures if required for any double vattakshara combination.
3. Testing

## Stage six
1. Verify and add additional glyphs/symbols required.
2. Adjust left and right spacing for additional glyphs.
3. Testing

## Stage seven
1. Typography related improvements: Reduce the font thickness, space and kerning improvements.
2. Update License, Authors, version and other information.
3. Testing

<div class="sep"></div>

Today I completed first stage, created two [python scripts](https://github.com/aravindavk/fontscripts) to change the glyph names and to adjust left and right space.

{% highlight bash %}
cd $WORK
git clone https://github.com/aravindavk/fontscripts.git
git clone https://github.com/aravindavk/lohit2.git
git clone https://github.com/aravindavk/Gubbi.git
git clone https://github.com/aravindavk/Navilu.git
cd fontscripts

# Lohit Kannada
python rename_base_glyphs.py ../lohit2/kannada/Lohit-Kannada.sfd
python adjust_spacing.py ../lohit2/kannada/Lohit-Kannada.sfd

# Gubbi
python rename_base_glyphs.py ../Gubbi/Gubbi.sfd
python adjust_spacing.py ../Gubbi/Gubbi.sfd

# Navilu
python rename_base_glyphs.py ../Navilu/Navilu.sfd
python adjust_spacing.py ../Navilu/Navilu.sfd
{% endhighlight %}

Now generate the fonts to test the changes. Harfbuzz can be used for testing.

{% highlight bash %}
hb-view ../lohit2/kannada/Lohit-Kannada.ttf "$(cat stage1_tests.txt )" --output-file preview_lohit.png
{% endhighlight %}

Let me know if anybody interested to join and contribute to improve Kannada fonts.
