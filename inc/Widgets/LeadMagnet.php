<?php

namespace Svbk\WP\Theme\_svbk\Widgets;

use Svbk\WP\Widgets\Base;

class LeadMagnet extends Base {

	public $id_base = 'svbk_lead_magnet';

	protected function title() {
		return __( 'Lead Magnet', '_svbk' );
	}

	protected function args() {
		return array(
			'description' => __( 'Shows a title, image and a call to action', '_svbk' ),
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
		$this->textField( 'subtitle', $this->fieldValue( $instance, 'subtitle', __( 'New subtitle', '_svbk' ) ), __( 'Subtitle:', '_svbk' ) );
		$this->fileField( 'image', $this->fieldValue( $instance, 'image' ), __( 'Image:', '_svbk' ) );
		$this->textAreaField( 'description', $this->fieldValue( $instance, 'description', __( 'New description', '_svbk' ) ), __( 'Description:', '_svbk' ) );
		$this->textField( 'link', $this->fieldValue( $instance, 'link' ), __( 'Button Link:', '_svbk' ) );
		$this->pageSelect( 'link_page', $this->fieldValue( $instance, 'link_page' ), __( 'Button Link to page:', '_svbk' ), array( 'show_option_none' => '- ' . __('Use custom link above', '_svbk') .' -', ) );
		$this->textField( 'button_label', $this->fieldValue( $instance, 'button_label', __( 'Click here', '_svbk' ) ), __( 'Button Label:', '_svbk' ) );
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

		$instance['title'] = $this->sanitizeField( $new_instance, 'title' );
		$instance['subtitle'] = $this->sanitizeField( $new_instance, 'subtitle' );
		$instance['image'] = $this->sanitizeField( $new_instance, 'image' );
		$instance['description'] = $this->sanitizeField( $new_instance, 'description', 'wp_kses_post' );
		$instance['link'] = $this->sanitizeField( $new_instance, 'link' );
		$instance['link_page'] = $this->sanitizeField( $new_instance, 'link_page' );
		$instance['button_label'] = $this->sanitizeField( $new_instance, 'button_label' );

		return $instance;
	}

	public function widget( $args, $instance ) {

		echo $args['before_widget'];

		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		} ?>
		
		<?php if ( ! empty( $instance['subtitle'] ) ) : ?>
		<div class="lead-magnet__subtitle subtitle"><?php echo $instance['subtitle']; ?></div>
		<?php endif; ?>
		
		<?php if ( ! empty( $instance['image'] ) ) : ?>
		<div class="lead-magnet__image"><?php echo wp_get_attachment_image($instance['image'], 'main-sidebar' ); ?></div>
		<?php endif; ?>		

		<?php if ( ! empty( $instance['description'] ) ) : ?>
		<div class="lead-magnet__description widget-description"><?php echo $instance['description'] ?></div>
		<?php endif; ?>

		<?php $link = $instance['link_page'] ? get_permalink( $instance['link_page'] ) : esc_url( $instance['link'] ) ;?>
		
		<?php if ( $link ) : ?>
		<a class="lead-magnet__cta button" href="<?php echo esc_attr( $link ); ?>"><?php echo $instance['button_label'] ?></a>
		<?php endif; ?>

		<?php
		echo $args['after_widget'];
	}

}
