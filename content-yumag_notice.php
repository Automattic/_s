<?php
/**
 * The template used for displaying Submissions
 *
 * @package YuMag
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php echo types_render_field( 'submission_name', array() ); ?></h1>
		<?php
		$student_details = yumag_notice_student_details();
		if ( ! empty( $student_details ) ) : ?>
			<div class="entry-author-student-details">(<?php echo $student_details; ?>)</div>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<div class="entry-notice-types"><?php echo get_the_term_list( get_the_ID(), 'yumag_notice_type', '', ' / ' ); ?></div>
		<h2 class="entry-subtitle"><?php echo types_render_field( 'submission_title', array() ); ?></h2>
		<?php
		if ( has_post_thumbnail() ) {
			yumag_entry_image( 'thumbnail', false );
		}
		echo types_render_field( 'submission_content', array() );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<span class="posted-on"><?php echo get_the_date(); ?></span>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
