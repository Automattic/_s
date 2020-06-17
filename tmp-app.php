<?php
/**
 * The template for displaying all single posts
 * Template Name: App 页面
 * Template Post Type: page
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header();
?>

<?php while (have_posts()) : the_post(); ?>
    <?php the_content(); ?>
<?php endwhile; ?>

<?php
get_footer();
