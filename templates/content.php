<?php
/**
 * Template part for displaying posts
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elisi
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="rs-entry">
        <?php if (has_post_thumbnail()) { ?>
            <div class="rs-entry__image">
                <?= get_the_post_thumbnail(get_the_id(), 'index-thumbnail'); ?>
            </div>
        <?php } ?>

        <div class="rs-entry__body">
            <div class="rs-entry__tag">
                <?php the_category(); ?>
            </div>

            <h2 class="rs-entry__title">
                <a href="<?php the_permalink(); ?>">
                    <?php the_title() ?>
                </a>
            </h2>

            <div class="typo rs-entry__desc">
                <?php the_excerpt(); ?>
            </div>

            <footer class="rs-entry__footer">
                <div class="rs-entry__date">
                    <?php the_time('Y-m-d'); ?>
                </div>
                <div class="rs-entry__more">
                    <a href="<?php the_permalink(); ?>" class="rs-button rs-button--sm">View more></a>
                </div>
            </footer>
        </div>
    </div>

</article>
