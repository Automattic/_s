Mr.Dev_s
===
The easiest way to start creating with Mr.Dev.'s Framework!

Mr.Dev. grabbed Underscores, the famous starter theme for Wordpress, and made it fully compatible with his Framework.

**Some key differences:**
- No default widgets/sidebars/sections - This is to better follow the new workflow on Wordpress *(using blocks and reusable blocks per page instead of widgets)* and to prepare for the full site editor. You can still create new sidebars/sections using "layout control" on Mr.Dev.'s Framework or set your defaults on a child theme by uncommenting *add_action( 'widgets_init', '_s_widgets_init' )* on *functions.php*.
- No forced logo or menu in the header - You can use widgets instead. Create new sidebars/sections for those widgets using "layout control" on Mr.Dev.'s Framework.
- Auto dropdown menu - With Mr.Dev_s any default menu widget located inside ".mr-header" will automatically become a structured dropdown menu.
