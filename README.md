WebDevStudio's _s
===

[WebDevStudios](http://webdevstudios.com) fork of Automattic's [_s](https://github.com/Automattic/_s). Used primarily as our internal starter theme. Your pull requests are welcome!

# Pre-Installation

Basic knowledge of the command line and the following dependencies are required to use _s:

- Node ([http://nodejs.org/](http://nodejs.org/))
- Ruby ([http://rubyinstaller.org/](http://rubyinstaller.org/))
- Grunt CLI ([http://gruntjs.com/](http://gruntjs.com/)) - `npm install -g grunt-cli`
- Bower ([http://bower.io/](http://bower.io/)) - `npm install -g bower`
- Sass ([http://sass-lang.com/](http://sass-lang.com/install)) - `gem install sass`

# Installation

## Automatic Installation

The easiest way to get started, is by using the [Yeoman](http://yeoman.io/) generator via the command line. It will ask you a series of questions and build the starter theme for you.

##### 1) Create a new theme folder in `/wp-content/themes`

##### 2) Navigate to your new theme folder
`cd /your-project/wordpress/wp-content/themes/your-new-theme`

##### 3) Install the _s generator and build a theme
`npm install -g generator-s && yo s`

That's it! You're ready to start using [Grunt](https://github.com/WebDevStudios/_s/blob/master/README.md#using-grunt)!


## Manual Installation

##### 1) Navigate to the /themes folder of your project
`cd /your-project/wordpress/wp-content/themes`

##### 2) Clone

`git clone git@github.com:WebDevStudios/_s.git`

##### 3) Find & Replace

You'll need to change all instances of the names: `_s` to your project name.

- Search for: `'_s'` and replace with: `'project-name'` (inside single quotations) to capture the text domain
- Search for: `_s_` and replace with: `project-name_` to capture all the function names
- Search for: `Text Domain: _s` and replace with: `Text Domain: project-name` in style.css
- Search for (and include the leading space): <code>&nbsp;_s</code> and replace with: <code>&nbsp;Project Name</code>(with a space before it) to capture DocBlocks
- Search for: `_s-` and replace with: `project-name-` to capture prefixed handles

##### 4) Install Grunt and Dependencies
- Run `npm install && bower install` from the command line to install Grunt and pull down any dependencies via Bower.

That's it! Now you can begin using Grunt.

# Usage
After you've installed _s, and run `npm install && bower install` from the command line you can start using grunt.

## Grunt

##### 1) Navigate to your new theme
`cd /your-project/wordpress/wp-content/themes/your-new-theme`

##### 2) Grunt tasks available:

`grunt watch` - Automatically handle changes to CSS, javascript, and image sprites

`grunt javascript` - Concatenate and minify javascript files

`grunt styles` - Comb, compile, prefix, combine media queries, and minify CSS files

`grunt imageminnewer` - Minify images

`grunt sprites` - Generate image sprites and the associated CSS

`grunt i18n` - Generate a translation file

`grunt` - Do it all once!
