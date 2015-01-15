![S2 Logo](http://s2webpress.com/s2-images/S2-WordPress-Starter-theme.png "S2 WordPress Starter Theme")

Version: 1.1

## Author:

Steven Slack ( [@slacktronic](http://twitter.com/slacktronic) / [s2webpress.com](http://www.s2webpress.com.com) / [stevenslack.com](http://www.stevenslack.com) )

## Summary

A WordPress starter theme for building custom themes. Forked from the `underscores` starter theme by Automattic. Uses SCSS, the Bourbon and Neat SASS mixin libraries, AutoPrefixr, Drop.js, Modernizr, Grunt for all processing tasks, and Bower for package management. Tested with WordPress 3.9.2.

Couple things:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A sample custom header implementation in `inc/custom-header.php` that can be activated by uncommenting one line in `functions.php` and adding the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

To set things up manually, download `_s2` from GitHub. The first thing you want to do is copy the `_s2` directory and change the name to something else, and then you'll need to do a five-step find and replace on the name in all the templates:

1. Search for `'_s2'` (inside single quotations) to capture the text domain.
2. Search for `_s2_` to capture all the function names.
3. Search for `Text Domain: _s2` in style.css.
4. Search for `_s2` in Gruntfile.js.
5. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
6. Search for `_s2-` to capture prefixed handles.

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. If you are using Grunt the stylesheet header is set as a sass banner.

Next, update or delete this readme. 

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)
