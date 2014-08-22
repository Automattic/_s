<?php
/**
 * Responsive Featured images
 *
 * @package _s2
 */

/**
 * Add Image Sizes in steps. These sizes are arbitrary
 */
if ( function_exists( 'add_image_size' ) ) {

    add_image_size( 'hero1', 300,  154 );
    add_image_size( 'hero2', 570,  293 );
    add_image_size( 'hero3', 800,  411 );
    add_image_size( 'hero4', 1060, 545 );
    add_image_size( 'hero5', 1200, 617 );
    add_image_size( 'hero6', 1370, 704 );
}

/**
 * Responsive Featured Image Background
 *
 * @link http://s2webpress.com//responsive-featured-image-function-in-wordpress-themes/
 * @author Steven Slack
 *
 */
function s2_responsive_featured_image() {
 
    // call the global post variable
    global $post; 
  
    if ( isset ( $post->ID ) && has_post_thumbnail( $post->ID ) ) : // checks whether the post has the featured image set
          
    // get the post thumbnail ID for the page or post
    $post_thumbnail_id = get_post_thumbnail_id( $post->ID );
      
    // store the image sizes in an array. You can also add your own image sizes with the add_image_size function
    $img_sizes = array( 'hero1', 'hero2', 'hero3', 'hero4', 'hero5', 'hero6' );
  
    /** 
     * grab the URL for each image size and store in a variable
     * http://codex.wordpress.org/Function_Reference/wp_get_attachment_image_src
     */
    foreach ( $img_sizes as $img_size ) {
        ${ 'img_' . $img_size } = wp_get_attachment_image_src( $post_thumbnail_id, $img_size );
    }
    
    /** 
     * Fluid aspect ratio
     * 
     * http://voormedia.com/blog/2012/11/responsive-background-images-with-fixed-or-fluid-aspect-ratios
     * 
     * The slope of the line corresponds to the padding-top attribute. 
     * The start height corresponds to the min-height attribute.
     * 
     * height(largest) - height(smallest) / width(largest) - width(smallest)
     */
    if( ! empty( $img_sizes ) ) :

    $slope = ( $img_hero6[2] - $img_hero1[2] ) / ( $img_hero6[1] - $img_hero1[1] );
    $padding_top = $slope * 100;

    $output_css = '
        .hero-img {
            width: 100%;
            padding-top:' . $padding_top   .'%;
           
            height:auto;
            position:relative;
  
            
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center; 
        }

        @media screen and ( max-width: ' . ( $img_hero1[1] - 1 ) . 'px  ) {
            .hero-img {
                max-height: ' . $img_hero1[2] . 'px;
                background-image: url(' . esc_url( $img_hero1[0] ) . '); 
            }
        }
  
        @media screen and ( min-width: ' . $img_hero1[1] . 'px ) and ( max-width: '. ( $img_hero2[1] - 1 ) . 'px ) {
            .hero-img {
                background-image: url(' . esc_url( $img_hero2[0] ) . ');
                min-height:' . $img_hero1[2] . 'px;
            }               
        }

        @media screen and ( min-width: ' . $img_hero2[1] . 'px ) and ( max-width: '. ( $img_hero3[1] - 1 ) . 'px ) {
            .hero-img {
                background-image: url(' . esc_url( $img_hero3[0] ) . ');
                min-height:' . $img_hero2[2] . 'px;
            }               
        }

        @media screen and ( min-width: ' . $img_hero3[1] . 'px ) and ( max-width: '. ( $img_hero4[1] - 1 ) . 'px ) {
            .hero-img {
                background-image: url(' . esc_url( $img_hero4[0] ) . ');
                min-height:' . $img_hero3[2] . 'px;
            }               
        }

        @media screen and ( min-width: ' . $img_hero4[1] . 'px ) and ( max-width: '. ( $img_hero5[1] - 1 ) . 'px ) {
            .hero-img {
                background-image: url(' . esc_url( $img_hero5[0] ) . ');
                min-height:' . $img_hero4[2] . 'px;
            }               
        }
  
        @media screen and ( min-width: ' . $img_hero5[1] . 'px ) {
            .hero-img {
                background-image: url(' . esc_url( $img_hero6[0] ) . ');
                min-height:' . $img_hero5[2] . 'px;
            }               
        }

        .lt-ie9 .hero-img {
            background-image: url(' . esc_url( $img_hero5[0] ) . ');
            height:' . $img_hero5[2] . 'px;
        }';

        wp_add_inline_style( '_s2-style', $output_css );

       endif; // end if image sizes are set
  
   endif; // end if the featured image is set
  
} // end function s2_responsive_featured_image

add_action( 'wp_enqueue_scripts', 's2_responsive_featured_image' );


/**
 * Return the featured image
 * @return html string 
 */
function the_responsive_featured_image( $inner_content = null ) {
 
    global $post;
    
    if( isset ( $post->ID ) && has_post_thumbnail( $post->ID ) ) :

        // get the attachment ID
        $attachment_id = get_post_thumbnail_id( $post->ID );
  
        // The Posts featured image title attribute
        if ( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) === '' ) {
            // if no alt attribute is filled out then echo "Featured Image of article: Article Name"
            $title_attr = the_title_attribute( 
                array( 
                    'before' => __( 'Featured image of article: ', '_s2' ), 
                    'echo' => false
                ) 
            );
        } else {
            // the post thumbnail img alt tag
            $title_attr = trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) );
        }

        $featured_img = sprintf( '<div id="featured-image" class="hero-img" role="img" aria-label="%1$s">%2$s</div>',
            $title_attr,
            $inner_content
        );

        return $featured_img;

    endif;  
 
}

