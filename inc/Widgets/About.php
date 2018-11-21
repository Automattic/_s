<?php

namespace Svbk\WP\Theme\_svbk\Widgets;

use Svbk\WP\Widgets\Base;

class About extends Base {

	public $id_base = 'svbk_site_about';

	protected function title() {
		return __( 'About', '_svbk' );
	}

	protected function args() {
		return array(
			'description' => __( 'About', '_svbk' ),
		);
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {

		parent::form( $instance );

		$this->textField( 'title', $this->fieldValue( $instance, 'title', __( 'New title', '_svbk' ) ), __( 'Title:', '_svbk' ) );
		$this->fileField( 'image', $this->fieldValue( $instance, 'image' ), __( 'Image:', '_svbk' ) );
		$this->textAreaField( 'description', $this->fieldValue( $instance, 'description', __( 'New description', '_svbk' ) ), __( 'Description:', '_svbk' ) );

		$this->menuSelect( 'nav_menu', $this->fieldValue( $instance, 'nav_menu' ), __( 'Menu:', '_svbk' ) );

	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {

		$instance = parent::update( $new_instance, $old_instance );

		$instance['title']       = $this->sanitizeField( $new_instance, 'title' );
		$instance['subtitle']    = $this->sanitizeField( $new_instance, 'subtitle' );
		$instance['image']       = $this->sanitizeField( $new_instance, 'image' );
		$instance['description'] = $this->sanitizeField( $new_instance, 'description', 'wp_kses_post' );
		$instance['nav_menu']    = $this->sanitizeField( $new_instance, 'nav_menu' );

		return $instance;
	}


	/**
	 * Outputs the content for the current Navigation Menu widget instance.
	 *
	 * @since 3.0.0
	 *
	 * @param array $args     Display arguments including 'before_title', 'after_title',
	 *                        'before_widget', and 'after_widget'.
	 * @param array $instance Settings for the current Navigation Menu widget instance.
	 */
	public function widget( $args, $instance ) {

		echo $args['before_widget'];

		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		} ?>
		
		<?php if ( ! empty( $instance['image'] ) ) : ?>
		<div class="about-widget__image"><?php echo wp_get_attachment_image( $instance['image'], 'main-sidebar' ); ?></div>
		<?php endif; ?>		

		<?php if ( ! empty( $instance['description'] ) ) : ?>
		<div class="about-widget__description widget-description"><?php echo $instance['description']; ?></div>
		<?php endif; ?>

		<?php
		$nav_menu = ! empty( $instance['nav_menu'] ) ? wp_get_nav_menu_object( $instance['nav_menu'] ) : false;

		if ( $nav_menu ) {

			$nav_menu_args = array(
				'fallback_cb' => '',
				'menu'        => $nav_menu,
			);

			wp_nav_menu( $nav_menu_args );

		}

		echo $args['after_widget'];
	}

}
