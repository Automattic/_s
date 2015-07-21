WebDevStudio's wd_s
===

[WebDevStudios](http://webdevstudios.com) fork of Automattic's [_s](https://github.com/Automattic/_s). Used as our internal starter theme. Pull requests are welcome!

# Features
- Grunt
- Sass
- SassDocs
- Bourbon
- Neat
- Bower
- SVG support
- Image sprite support
- Script linting and CSS minifcation


# Pre-Installation

Basic knowledge of the command line and the following dependencies are required to use wd_s:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Node](http://nodejs.org/)
- [Grunt CLI](https://www.npmjs.com/package/grunt-cli) - `npm install -g grunt-cli`
- [Bower](http://bower.io/) - `npm install -g bower`
- [Sass](http://sass-lang.com/install)) - `gem install sass`

# Setup & Installation

##### 1) [Download](https://github.com/WebDevStudios/wd_s/archive/master.zip) and extract the zip into your project's `/themes` directory

##### 2) Navigate to the `/themes` directory of your project

```bash
cd /your-project/wordpress/wp-content/themes
```

##### 3) Find & Replace

You'll need to change all instances of the names: `_s` to your project name.

- Search for: `'_s'` and replace with: `'project-name'` (inside single quotations) to capture the text domain
- Search for: `_s_` and replace with: `project-name_` to capture all the function names
- Search for: `Text Domain: _s` and replace with: `Text Domain: project-name` in style.css
- Search for (and include the leading space): <code>&nbsp;_s</code> and replace with: <code>&nbsp;Project Name</code> (with a space before it) to capture DocBlocks
- Search for: `_s-` and replace with: `project-name-` to capture prefixed handles
- Search for `_s.pot` and replace with: `project-name.pot` to capture translation files

##### 4) Install Dependencies

```bash
npm install && bower install
```

You are now ready to use wd_s.

# How to use Grunt

##### 1) Navigate to your new theme

```bash
cd /your-project/wordpress/wp-content/themes/your-new-theme
```

##### 2) Grunt tasks available:

`grunt watch` - Automatically handle changes to CSS, javascript, SVG's and image sprites

`grunt javascript` - Concatenate and minify javascript files

`grunt styles` - Comb, compile, prefix, combine media queries, and minify CSS files

`grunt imageminnewer` - Minify images

`grunt sprites` - Generate an image sprite and the associated Sass (sprite.png)

`grunt icons` - Generate the SVG sprite (svg-defs.svg)

`grunt i18n` - Generate a translation file

`grunt sassdoc` - Re-generate the SassDocs

`grunt` - Do it all once!
