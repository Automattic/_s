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

<footer id="colophon" class="site__footer">

    <?= do_shortcode('[_s_elemetor_block id=458]') ?>

    <?php if (is_active_sidebar('sidebar-footer')): ?>
        <div class="content__footer">
            <section class="container">
                <div class="content__footer--inner">
                    <?php dynamic_sidebar('sidebar-footer'); ?>
                </div>
            </section>
        </div>
    <?php endif; ?>

    <div class="py-4 site__info">
        <div class="container">
            Copyright &copy; <?= date('Y'); ?> <a href="<?= home_url(); ?>"><?php bloginfo('name'); ?></a>
        </div>
    </div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
