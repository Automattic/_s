
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	getColorClassName, 
	InnerBlocks,
} = wp.blockEditor;

/**
 * External dependencies
 */
import classnames from 'classnames'; 

const deprecated = [
    {
        attributes: {
        	columns: {
        		type: 'number',
        		default: 3
        	},
        	equalHeight: {
        		type: 'boolean',
        		default: true,
        	},
        	backgroundColor: {
        		type: 'string',
        	},
        	customBackgroundColor: {
        		type: 'string',
        	},
        	align: {
        		type: 'string',
        	},		
        },
    	
        supports: {
        	html: false,
        },
    	
    	save( { attributes } ) {
    		
    		const { 
    			columns,
    			equalHeight,
    			backgroundColor,
    			customBackgroundColor,
    			align,
    		} = attributes;		
    		
    		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
    		
    		const classNames = classnames( `has-${ columns }-columns`, {
    			'has-background': backgroundColor || customBackgroundColor,
    			[ backgroundClass ]: backgroundClass,
    			[ 'has-equal-cell-height' ]: equalHeight,
    			[ `has-align-${align}` ]: align,
    		} );
    		
    		const style = {
    			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
    		};	
    		
    		return (
    			<div className={ classNames } style={ style } >
    				<InnerBlocks.Content />
    			</div>
    		);
    	},
	},
];

export default deprecated;