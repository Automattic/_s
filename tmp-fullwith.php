<?php
/**
 * Template Name: 可视化编辑器模版
 * Template Post Type: page
 * The template for displaying all single posts
 *
 * @package _s
 */

get_header();

while (have_posts()) : the_post();
    the_content();
endwhile;

get_footer();
