_strap
======

**\_strap** is a starter theme for WordPress.
It has the goal of integrating Twitter's **bootstrap** (https://github.com/twitter/bootstrap) into Automattic's **\_s** (https://github.com/Automattic/_s) with the smallest possible changeset.

> \_strap works with Bootstrap :three:<br />
> the Bootstrap :two: version is [still available at its own branch](https://github.com/ptbello/_strap/tree/Bootstrap_2.3.2)

Like its big brother \_s, \_strap is not intended as Parent theme, rather as starting point to build a custom theme from scratch.
This means you will have to [replace](https://github.com/Automattic/_s#getting-started) all internal references to \_s with your new theme's name. No worries, you don't have to do it by hand: \_strap includes an automatic process \- just follow the instructions below.

Installation
------------
1. Download the .zip
2. Unpack it to your /wp-content/themes directory.
3. Log in to your WordPress backend and activate it
4. You will notice a new "Build theme" item in the Appearence section of the admin menu \- go there
5. Choose the name and slug of your new \_strap-based, custom theme; when you submit the form, _strap will be cloned to /wp-content/themes/, in a new folder named after your theme's slug.
6. That's it. Unless you plan on starting your theme from scratch over an over, like you had some kind of compulsive writer's block, you can now delete /wp-content/themes/_strap all together and start working on your brand new theme.

What you get
------------
No bloat, just the bare minimum to make \_s work with Bootstrap; most of it you'll find in [/inc/functions-strap-php](https://github.com/ptbello/_strap/blob/master/inc/functions-strap.php)

* a filter and a custom walker to turn a wp_nav_menu() into a Bootstrap navbar
* filters for captioned images and oembeds
* Bootstrap styled comment and search forms
* Bootstrap responsive grid semantically applied to the original _s markup

What you put
------------
* You can customize the original Bootstrap LESS files \- in particular [/bootstrap/less/variables.less](https://github.com/ptbello/_strap/blob/master/bootstrap/less/variables.less)
* You should add your custom styles at the end of [/style.less](https://github.com/ptbello/_strap/blob/master/style.less) and/or in extra .less files you should then `@import` in [/style.less](https://github.com/ptbello/_strap/blob/master/style.less)
* After changes you should [compile](http://lesscss.org/usage) [/style.less](https://github.com/ptbello/_strap/blob/master/style.less) to [/style.css](https://github.com/ptbello/_strap/blob/master/style.css)
* Of course you should edit any of the actual theme .php files as you see fit, exactly like you would do with ant other starter theme; if you alter the markup structure of the theme, i.e. create a different grid, you should use either use the orginal Bootsrap classes or the [mixins Bootstrap provides](http://getbootstrap.com/css/#grid-less) to attach the same behaviour to any element.

Translations
------------
* Italian, by [@FrancescoGavello](https://github.com/FrancescoGavello)

Have you translated \_strap into another language? Submit a pull request now!

Made with \_strap
------------
Here are some live websites using themes made with \_strap<br />
Made something with \_strap? Submit a pull request with your screenshot to the [\_strap_made branch](https://github.com/ptbello/_strap/tree/_strap_made)

---

[http://clubtoclub.it](http://clubtoclub.it)<br />
Design by [Boumaka](http://www.boumaka.it/). Code by [@ptbello](https://github.com/ptbello), [@alevals](https://github.com/alevals)<br />

[![clucbtoclub.it](https://raw.github.com/ptbello/_strap/_strap_made/clubtoclub.jpg)](http://clubtoclub.it)

---

[http://arenadiverona100x100.com](http://arenadiverona100x100.com)<br />
Design by [Boumaka](http://www.boumaka.it/). Code by [@ptbello](https://github.com/ptbello), [@alevals](https://github.com/alevals)<br />

[![arenadiverona100x100.com](https://raw.github.com/ptbello/_strap/_strap_made/arenadiverona100x100.jpg)](http://arenadiverona100x100.com)

---

[http://www.spaziocar.it/](http://www.spaziocar.it/)<br />
Design by [Boumaka](http://www.boumaka.it/). Code by [@ptbello](https://github.com/ptbello)<br />

[![spaziocar.it](https://raw.github.com/ptbello/_strap/_strap_made/spaziocar.jpg)](http://www.spaziocar.it/)
