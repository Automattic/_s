Mr.Dev_s
===
The easiest way to start creating themes with Mr.Dev.'s Framework!

Mr.Dev. grabbed Underscores, the famous starter theme for Wordpress, and made it fully compatible with his Framework.

**Some key differences:**
- No default widgets/sidebars/sections - This is to prepare for Wordpress full site editor that uses only blocks in place of widgets. You can still set new defaults by uncommenting *add_action( 'widgets_init', '_s_widgets_init' )* on *functions.php* or by creating new sidebars/sections using "layout control" on Mr.Dev.'s Framework.
- No forced logo or menu in the header - If you need that feature use widgets instead. To create sections/sidebars for a logo or a menu widget you can use "layout control" on Mr.Dev.'s Framework.
- Auto dropdown menu - With Mr.Dev_s any default menu widget located inside the header (mr-header) will automatically become a dropdown menu using css.
