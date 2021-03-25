Mr.Dev_s
===
The easiest way to start creating with Mr.Dev.'s Framework!

Mr.Dev. grabbed Underscores, the famous starter theme for Wordpress, and made it fully compatible with his Framework.

**Some key differences:**
- No default widgets/sidebars/sections - This is to prepare for Wordpress full site editor that uses only blocks in place of widgets. You can still create new sidebars/sections using "layout control" on Mr.Dev.'s Framework or set child-theme defaults by uncommenting *add_action( 'widgets_init', '_s_widgets_init' )* on *functions.php*.
- No forced logo or menu in the header - If you need that feature you can use widgets instead.
- Auto dropdown menu - With Mr.Dev_s any default menu widget located inside the header (mr-header) will automatically become a structured dropdown menu.
