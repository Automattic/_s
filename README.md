_svbk
===

Hi. I'm a starter theme called `_svbk`, a superset of the popular `_s` theme. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A custom header implementation in `inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* An `editor.php` to add and customize TinyMCE's editor buttons
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

If you want to set things up , download `_svbk` from GitHub. The first thing you want to do is copy the `_svbk` directory and change the name to something else (like, say, `megatherium-is-awesome`), and then all you need to do it's run the `setup.sh` script that performs a search and replace on the name in all the templates and installs all the necessary dependancies via NPM and Composer.

Then, update the stylesheet header in `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! Just use `gulp serve` to compile SASS in real time. The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
