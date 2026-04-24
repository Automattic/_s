[![Build Status](https://travis-ci.org/Automattic/_s.svg?branch=master)](https://travis-ci.org/Automattic/_s)

Inactive project
===
Update: September 5, 2025

As we’re all-in now on Block Themes (since 2020 or so), we won’t be actively updating this _s starter theme (Underscores). This repo will be archived for reference only.

To learn more about Block Themes, visit [Block Themes](https://themeshaper.com/block-themes/) and follow the resources listed there.

_s
===

Hi. I'm a starter theme called `_s`, or `underscores`, if you like. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A modern workflow with a pre-made command-line interface to turn your project into a more pleasant experience.
* A just right amount of lean, well-commented, modern, HTML5 templates.
* A custom header implementation in `inc/custom-header.php`. Just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample layouts in `sass/layouts/` made using CSS Grid for a sidebar on either side of your content. Just uncomment the layout of your choice in `sass/style.scss`.
Note: `.no-sidebar` styles are automatically loaded.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Full support for `WooCommerce plugin` integration with hooks in `inc/woocommerce.php`, styling override woocommerce.css with product gallery features (zoom, swipe, lightbox) enabled.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Installation
---------------

### Requirements

`_s` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository, change its name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain and replace with: `'megatherium-is-awesome'`.
2. Search for `_s_` to capture all the functions names and replace with: `megatherium_is_awesome_`.
3. Search for `Text Domain: _s` in `style.css` and replace with: `Text Domain: megatherium-is-awesome`.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;Megatherium_is_Awesome</code>.
5. Search for `_s-` to capture prefixed handles and replace with: `megatherium-is-awesome-`.
6. Search for `_S_` (in uppercase) to capture constants and replace with: `MEGATHERIUM_IS_AWESOME_`.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

### Setup

To start using all the tools that come with `_s`  you need to install the necessary Node.js and Composer dependencies :

```sh
$ composer install
$ npm install
```

### Available CLI commands

`_s` comes packed with CLI commands tailored for WordPress theme development :

- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- `composer lint:php` : checks all PHP files for syntax errors.
- `composer make-pot` : generates a .pot file in the `languages/` directory.
- `npm run compile:css` : compiles SASS files to css.
- `npm run compile:rtl` : generates an RTL stylesheet.
- `npm run watch` : watches all SASS files and recompiles them to css when they change.
- `npm run lint:scss` : checks all SASS files against [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/).
- `npm run lint:js` : checks all JavaScript files against [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `npm run bundle` : generates a .zip archive for distribution, excluding development and system files.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!

# Build Tool Boilerplate
A simple boilerplate for using NPM tasks to build and compile JavaScript, CSS, and image files.

_Version 2 adds `watch` and `server` tasks, and removes the need for Windows-specific tasks._

**Install**

- [Install Node.js.](http://nodejs.org/)
- [Download the NPM Build Tool Boilerplate.](https://github.com/cferdinandi/build-tool-boilerplate/archive/master.zip)

**Quick Start**

Each task has just one or two dependencies (*except for image optimization*), so I recommend deleting the ones you don't need before running `npm install`. Learn more in [the documentation](#documentation) below.

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install`.
3. Run `npm run build`.



## Documentation

This is a boilerplate that you can use as a starting point for your projects.

[Running Tasks](#running-tasks) · [JavaScript](#javascript) · [Sass => CSS](#sass--css) · [SVG Optimization](#svg-optimization) · [Image Optimization](#image-optimization) · [Copy Files](#copy-files) · [Clean](#clean) · [Complete Build](#complete-build) · [Watch for Changes](#watch-for-changes) · [Server](#server)


### Running Tasks

The boilerplate uses the `npm run` command to run tasks. These work on macOS, Linux, and Windows systems.

```bash
# Main Tasks
npm run js     # compile and minify
npm run css    # compile and minify Sass into CSS
npm run svg    # optimize SVGs with SVGO
npm run img    # optimize image files
npm run copy   # copy files from the src/copy directory as-is into /dist
npm run clean  # delete the /dist directory
npm run build  # run all tasks
npm run watch  # watch for changes and rebuild
npm run server # run a localhost server that reloads when files change

# Modular Tasks
npm run watch-js     # watch for changes to the /js directory
npm run watch-css    # watch for changes to the /css directory
npm run watch-svg    # watch for changes to the /svg directory
npm run watch-img    # watch for changes to the /img directory
npm run watch-copy   # watch for changes to the /copy directory
npm run build-dirty  # run a new build without deleting the /dist directory
npm run server-start # start a server without watching for changes
```


### JavaScript

The boilerplate uses [rollup.js](https://rollupjs.org) with the [terser](https://terser.org/) plugin to parse, compile, and minify JavaScript files.

```json
{
    "devDependencies": {
        "rollup": "^2.6.1",
        "rollup-plugin-terser": "^7.0.2"
    }
}
```

In the `rollup.config.js` file, there's a `configs` object that you can use to control what rollup.js does.

```js
// Configs
var configs = {
    name: 'MyProject',                // Global namespace to use for IIFEs [optional]
    files: ['main.js', 'detects.js'], // The files to process
    formats: ['iife', 'es'],          // The formats to output - will be added as a suffix to the filename (ex. main.es.js)
    default: 'iife',                  // Files with this format will not have a format suffix [optional]
    pathIn: 'src/js',                 // The source directory for your JS files
    pathOut: 'dist/js',               // The directory to compile JS files into
    minify: true,                     // If true, a minified version will also be created with the .min suffix
    sourceMap: false                  // If true, sourcemaps are created for each processed file †
};
```

A banner is automatically generated from your `package.json` data.

It includes the project name and version, a copyright notice with the current year and the package author name, the license type, and a link to the project repository.

_If a `configs.name` property is included, that will be used. If not, the banner defaults to the `name` property in your `package.json` file._

```js
// Banner
var banner = `/*! ${configs.name ? configs.name : pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;
```

To concatentate multiple files into one, use the ES modules `import` feature.

```js
// myplugin.js
// This will compile into /dist/js/myplugin.js, and will include helpers.js, app.js, and event-listeners.js

import * as Helpers from './helpers.js';
import app from './app.js';
import './event-listeners.js';
```

JavaScript files should be in the `src/js` directory. Use this task to run the build.

```bash
npm run js
```

_**Note for FireFox users:** ensure that ['Use Source Maps'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811432626), and ['Show original sources'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811855711) options are enabled in Developer Tools._

### Sass => CSS

The boilerplate uses the Node implementation of [dart-sass](https://sass-lang.com/dart-sass) to parse `.scss` files into CSS.

```json
{
    "devDependencies": {
        "sass": "^1.26.5"
    }
}
```

In the `sass.js` file, there's a `configs` object that you can use to control what `dart-sass` does.

```js
// Configs
var configs = {
    name: 'MyProject',    // The name to use in the file banner
    files: ['main.scss'], // The files to process
    pathIn: 'src/scss',   // The source directory for your Sass files
    pathOut: 'dist/css',  // The directory to compile CSS files into
    indentType: 'tab',    // The type of indenting to use ['tab'|'spaces']
    indentWidth: 1,       // How many tabs or spaces to indent
    minify: true,         // If true, a minified version will also be created with the .min suffix
    sourceMap: false,     // If true, sourcemaps are created for each processed file †
};
```

A banner is automatically generated from your `package.json` data.

It includes the project name and version, a copyright notice with the current year and the package author name, the license type, and a link to the project repository.

_If a `configs.name` property is included, that will be used. If not, the banner defaults to the `name` property in your `package.json` file._

```js
// Banner
var banner = `/*! ${configs.name ? configs.name : pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;
```

Sass files should be in the `src/scss` directory. Use this task to run the build.

```bash
npm run css
```

_**Note for FireFox users:** ensure that ['Use Source Maps'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811432626), and ['Show original sources'](https://github.com/cferdinandi/build-tool-boilerplate/issues/7#issuecomment-811855711) options are enabled in Developer Tools._

### SVG Optimization

The boilerplate uses [svgo](https://github.com/svg/svgo) to remove the cruft that gets added to SVG files by many editors.

```json
{
    "devDependencies": {
        "svgo": "^1.3.2"
    }
}
```

For accessibility reasons, the boilerplate disables the settings that remove the `title` element and `viewBox` attribute.

You can make additional command line configurations under the `svg` tasks in the `scripts` property of the `package.json` file.

```bash
svgo -f src/svg dist/svg -r --disable=removeViewBox,removeTitle
```

SVGs should be in the `src/svg` directory. Use this task to run the build.

```bash
npm run svg
```


### Image Optimization

The boilerplate uses [imagemin](https://www.npmjs.com/package/imagemin), with the [MozJPEG](https://github.com/imagemin/imagemin-mozjpeg), [pngcrush](https://github.com/imagemin/imagemin-pngcrush), [pngquant](https://github.com/imagemin/imagemin-pngquant), and [zopfli](https://github.com/imagemin/imagemin-zopfli) plugins.

(*Yea, that's kind of lot, isn't it?*)

```json
{
    "devDependencies": {
        "imagemin-cli": "^6.0.0",
        "imagemin-mozjpeg": "^8.0.0",
        "imagemin-pngcrush": "^6.0.0",
        "imagemin-pngquant": "^8.0.0",
        "imagemin-zopfli": "^6.0.0"
    }
}
```

Image files should be in the `src/img` directory. Use this task to run the build.

```bash
npm run img
```

### Copy Files

The boilerplate uses [recursive-fs](https://github.com/simov/recursive-fs) to provide a cross-OS copying solution. This package is also used for the `clean` task, so only remove it if you're deleting both tasks.

```json
{
    "devDependencies": {
        "recursive-fs": "^2.1.0"
    }
}
```

If you have files you want copied as-is, place them in the `src/copy` directory.

Use this task to run the build.

```bash
npm run copy
```

### Clean

The boilerplate uses [recursive-fs](https://www.npmjs.com/package/recursive-fs) to provide a cross-OS recursive directory deleting solution. This package is also used for the `copy` task, so only remove it if you're deleting both tasks.

```json
{
    "devDependencies": {
        "recursive-fs": "^2.1.0"
    }
}
```

You can delete the `/dist` directory before running a build to clean up any junk that might have ended up there. The `build` task runs this task before doing anything else.

```bash
npm run clean
```


### Complete Build

You can run all of your build tasks in a single command.

Use this task to run the build.

```bash
npm run build
```

If you want to run your build _without_ first deleting the `/dist` directory, run this task instead.

```bash
npm run build-dirty
```

Regardless of which task you use, be sure to delete any tasks you're not using from the `build-dirty` task under `scripts` in your `package.json` file first. The `npm-run-all -p` command is used to run all tasks in parallel ([see below for more details](#core-dependencies)).

```bash
# default build-dirty task
npm-run-all -p js css svg img copy
```


### Watch for Changes

The boilerplate uses [Chokidar CLI](https://www.npmjs.com/package/chokidar-cli) to watch for changes to the `/src` directory and run tasks in response.

```json
{
    "devDependencies": {
        "chokidar-cli": "^2.1.0"
    }
}
```

Use this task to watch for changes and run a build. It will also run a fresh build when it starts.

```bash
npm run watch
```

If you only want to watch for changes to a specific directory in `/src`, you can use a task-specific watcher task.

```bash
npm run watch-js   # watch for changes to the /js directory
npm run watch-css  # watch for changes to the /css directory
npm run watch-svg  # watch for changes to the /svg directory
npm run watch-img  # watch for changes to the /img directory
npm run watch-copy # watch for changes to the /copy directory
```


## Server

The boilerplate uses [Browsersync](https://www.browsersync.io/) to run a local server and automatically update it whenever your files change.

```json
{
    "devDependencies": {
        "browser-sync": "^2.26.14"
    }
}
```

Use this task to watch for changes. It will also run the `watch` task, and automatically rebuild whenever a file in `/src` changes.

```bash
npm run server
```

If you want to run the server _without_ the `watch` task, run this task instead.

```bash
npm run server-start
```



## Core Dependencies

The boilerplate uses [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run tasks consistently across different operating systems, and in parallel.

```json
{
    "devDependencies": {
        "npm-run-all": "^4.1.5"
    }
}
```

The `npm-run-all` package removes the need for Windows-specific tasks.

It also allows you to run tasks in parallel. By running all of the tasks in the `build` tasks at the same time, you dramatically reduce the build time. This is also what makes it possible to run a localhost server _and_ watch for file changes in one task.

**In other words, don't remove this dependency.**



## Why does this exist?

For years, I've been an avid [Gulp](https://gulpjs.com/) user. Gulp is great. But it's also *a lot*.

**I wanted a simpler, more resilient, leaner set of build tools.**

I'm tired of having to repair my build anytime I don't use it for a few months. I'm tired of installing 270mb of `node_modules` dependencies to build a simple website or web app.

With NPM, you can build a simplish build tool that does just what you want (*and nothing more*) with a fraction of the footprint.

❤️ *Major kudos to Keith Cirkel for [teaching me about this years ago](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/), before I was ready to hear it.*