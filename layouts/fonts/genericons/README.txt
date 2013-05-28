  ___  ____  __ _  ____  ____  __  ___  __   __ _  ____ 
 / __)(  __)(  ( \(  __)(  _ \(  )/ __)/  \ (  ( \/ ___)
( (_ \ ) _) /    / ) _)  )   / )(( (__(  O )/    /\___ \
 \___/(____)\_)__)(____)(__\_)(__)\___)\__/ \_)__)(____/


Genericons are vector icons embedded in a webfont designed to be clean and simple keeping with a generic aesthetic.

Use genericons for instant HiDPI, to change icon colors on the fly, or even with CSS effects such as drop-shadows or gradients!


_  _ ____ ____ ____ ____ 
|  | [__  |__| | __ |___ 
|__| ___] |  | |__] |___ 


To use it, place the font folder in your stylesheet directory and paste this in your CSS file:

/* =Genericons, thanks to FontSquirrel.com for conversion!
-------------------------------------------------------------- */
@font-face {
    font-family: 'Genericons';
    src: url('font/genericons-regular-webfont.eot');
    src: url('font/genericons-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('font/genericons-regular-webfont.woff') format('woff'),
         url('font/genericons-regular-webfont.ttf') format('truetype'),
         url('font/genericons-regular-webfont.svg#genericonsregular') format('svg');
    font-weight: normal;
    font-style: normal;

}

From then on, you can create an icon like this:

.my-icon:before {
	content: '\f101';
	display: inline-block;
	-webkit-font-smoothing: antialiased;
	font: normal 16px/1 'Genericons';
	vertical-align: top;
}

This will output a comment icon before every element with the class "my-icon". The "content: '\f101';" part of this CSS is easily copied from the helper tool at http://genericons.com/

You can also use the bundled example.css if you'd rather insert the icons using HTML tags.


_  _ ____ ___ ____ ____ 
|\ | |  |  |  |___ [__  
| \| |__|  |  |___ ___]


Genericons-Regular.otf found in the root directory of this zip has not been web-font-ified. So you can drop it in your system fonts folder and use the font in Photoshop if you like.

Note that Genericons has been designed for a 16x16 pixel grid. That means it'll look sharp at font-size: 16px exactly. It'll also be crisp at multiples thereof, such as 32px or 64px. It'll also look reasonably crisp at in-between font sizes such as 24px or 48px, but not quite as crisp as 16 or 32. Please don't set the font-size to 17px, though, that'll just look terrible.

Also note the CSS property "-webkit-font-smoothing: antialiased". That makes the icons look great in WebKit browsers. Please see http://noscope.com/2012/font-smoothing for more info.
