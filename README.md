_svbk
===

Hi. I'm a starter theme called `_svbk`, a superset of the popular [`_s`](https://github.com/Automattic/_s) theme. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

On top of the standard `_s` I feature:
* `Gulp` for real-time SASS compiling
* `Composer` for dependancy management
* An installer script
* Few extras and customizations that makes me less raw

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A custom header implementation in `inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* An `editor.php` to add and customize TinyMCE's editor buttons
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
Note: `.no-sidebar` styles are not automatically loaded.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Install
---------------

## Install Dependencies

```bash
nvm use 8
npm install -g gulp`
npm install
```

## Configure the Theme Name and Theme Handle

Edit the `config.json` file and customize the `theme_name` and `theme_handle` parameters.

## Install the theme 

Run `gulp install`, this builds all the files and customizes all the functions names with your theme prefix.

## Commit

Commit all the customized files and disable push to the original repository

```bash
git add .
git commit -m"$THEME_HANDLE theme config"
git remote set-url --push origin no-pushing
```
## Add Create Guten Block Compatibility
If you want to develop custom blocks you should add Create Guten Block Compatibility Symlinks

```bash
ln -s $PWD/dist/blocks.build.js $PWD/dist/js/blocks.build.js 
ln -s $PWD/blocks src 
```

Now you're ready to go! Just use `gulp serve` to compile SASS in real time. The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
