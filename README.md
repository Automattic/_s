![S2 Logo](https://raw.githubusercontent.com/S2web/_s2/master/img/s2-logo.png "S2 Logo")

_s2
===

A forked version of the `underscores` starter theme by Automattic. Meant to be used for custom WordPress themes.

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

To set things up manually, download `_s2` from GitHub. The first thing you want to do is copy the `_s2` directory and change the name to something else (like, say, `megatherium`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_s2'` (inside single quotations) to capture the text domain.
2. Search for `_s2_` to capture all the function names.
3. Search for `Text Domain: _s2` in style.css.
4. Search for <code>&nbsp;_s2</code> (with a space before it) to capture DocBlocks.
5. Search for `_s2-` to capture prefixed handles.

OR

* Search for: `'_s2'` and replace with: `'megatherium'`
* Search for: `_s2_` and replace with: `megatherium_`
* Search for: `Text Domain: _s2` and replace with: `Text Domain: megatherium` in style.css.
* Search for: <code>&nbsp;_s2</code> and replace with: <code>&nbsp;Megatherium</code>
* Search for: `_s2-` and replace with: `megatherium-`

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
