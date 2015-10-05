# Using SVG's with wd_s

## Editing SVGs library for your project
All the SVGs in this folder are from [https://icomoon.io/app/](icoMoon App). If you would like to update (add/remove) from the overall library for your project. Just open icoMoonApp, and import the wd_s-icoMoon-FontAwesome.json file, and select to your whimsy.

## Using inline SVGs with wd_s
- Drop SVG(s) into images/svg
- Run 'grunt icons'
- Use <?php _s_do_svg( 'name-of-svg-file' ); ?>

SVG icons will now appear inline, and can be styled via CSS!

https://github.com/FWeinb/grunt-svgstore