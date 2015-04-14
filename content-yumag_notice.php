<?php
/**
 * The template used for displaying Submissions
 *
 * @package YuMag
 */

$notice_title = types_render_field( 'submission_title', array() );
$notice_url = types_render_field( 'submission_url', array( 'output' => 'raw' ) );

if ( taxonomy_exists( 'yumag_notice_type' ) ) {
	$args = array(
		'fields' => 'names'
	);
	$notice_types = wp_get_post_terms( get_the_ID(), 'yumag_notice_type', $args );
}
if ( empty( $notice_types ) ) {
	$notice_types = array();
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header notice-header">
		<h1 class="entry-title notice-title"><?php echo types_render_field( 'submission_name', array() ); ?></h1>
		<?php
		$student_details = yumag_notice_student_details();
		if ( ! empty( $student_details ) ) : ?>
			<div class="entry-author-student-details">(<?php echo $student_details; ?>)</div>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content notice-content">
		<?php if ( in_array( 'Award', $notice_types ) ) : ?>
			<p class="notice-label">Award:</p>
			<?php if ( $notice_title ) : ?>
				<p class="notice-name"><?php echo $notice_title; ?></p>
				<p class="notice-label">What was it for:</p>
			<?php endif; ?>
		<?php elseif ( in_array( 'New Role', $notice_types ) ) : ?>
			<p class="notice-label">New role:</p>
			<?php if ( $notice_title ) : ?>
				<p class="notice-name"><?php echo $notice_title; ?></p>
			<?php endif; ?>
		<?php elseif ( in_array( 'Publication', $notice_types ) ) : ?>
			<p class="notice-label">Publication:</p>
			<?php if ( $notice_title ) : ?>
				<p class="notice-name"><em><?php echo $notice_title; ?></em></p>
			<?php endif; ?>
		<?php elseif ( in_array( 'Obituary', $notice_types ) ) : ?>
			<p class="obit-label">Sadly passed away.</p>
			<?php if ( $notice_title ) : ?>
				<p class="notice-name"><?php echo $notice_title; ?></p>
			<?php endif; ?>
		<?php else : ?>
			<p class="notice-label">Update:</p>
			<?php if ( $notice_title ) : ?>
				<p class="notice-name"><?php echo $notice_title; ?></p>
			<?php endif; ?>
		<?php endif; ?>
		<?php echo types_render_field( 'submission_content', array() ); ?>
		<?php if ( ! empty( $notice_url ) ) : ?>
			<p class="notice-url"><a href="<?php echo $notice_url; ?>" title="Link for notice <?php the_ID() ?>">Link</a></p>
		<?php endif; ?>
		<?php
		if ( has_post_thumbnail() ) {
		 	yumag_entry_image( array( 666, 444 ) );
		}
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer notice-footer">
		<?php yumag_notice_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
