# Mr.Dev_s

The easiest way to start creating with Mr.Dev.'s Framework!

Mr.Dev. grabbed Underscores, the famous starter theme for Wordpress, and made it fully compatible with his Framework.

**Some key differences vs Underscores:**

- No default widgets/sidebars, no forced logo or menu in the header - This is to better follow the new workflow on Wordpress _(using blocks and reusable blocks per page instead of widgets)_ and to prepare for the full site editor. You can still create new sidebars/sections using "layout control" on Mr.Dev.'s Framework or set your defaults on a child theme from _Mr.Dev_s_, by going to _functions.php_ and uncommenting _add_action( 'widgets_init', '\_s_widgets_init' )_.
- Auto dropdown menu - With _Mr.Dev_s_ any default menu widget located inside ".mr-header" will automatically become a structured dropdown menu.
- Removed customizer additions - Most of those additions were not needed, would force the website to show the sitename on a specific place or are better kept to plugins such as Mr.Dev.'s Framework.
- Removed forced image sizes on Woocommerce - Removed the default sizes of 150 and 300 for product images as does are better
