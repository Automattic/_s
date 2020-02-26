<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site__footer">
    <div class="site__info">
        Copyright &copy; <?= date('Y'); ?> <a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a>
    </div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
