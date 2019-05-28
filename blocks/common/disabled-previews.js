//Fix styles for blocks witn InnerBlocks, by disabling preview. @see: https://github.com/WordPress/gutenberg/issues/9897
const {
	registerBlockType,
} = wp.blocks;

const { includes } = lodash;

var el = wp.element.createElement;
const withDisabledPreviews = wp.compose.createHigherOrderComponent( ( BlockEdit ) => {
    return function( props ) {
      var content = el( BlockEdit, props );
      
      if ( typeof props.insertBlocksAfter === 'undefined' ) {
        content = el( 'div', {} );
      }
    
      return el(
        wp.element.Fragment, {}, content
      );
    };
}, 'withDisabledPreviews' );

export default withDisabledPreviews;
