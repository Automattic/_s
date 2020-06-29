<?php
/**
 * The template for displaying all single posts
 * Template Name: Page Builder 模板
 * Template Post Type: page
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header();

while (have_posts()) : the_post();
    the_content();
endwhile;

get_footer();
