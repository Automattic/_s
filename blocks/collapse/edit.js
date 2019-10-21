/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
	RichText, 
	PlainText,
	InnerBlocks,
	InspectorControls,
} = wp.blockEditor;

const { 
	ToggleControl, 
	PanelBody,
} = wp.components;

/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/
const TEMPLATE = [ 
	[ 'core/paragraph', {
		content: 'Lorem ipsum sit amet...',
	} ]
];

class CollapseEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		const { 
			title,
			defaultOpen,
			buttonClose,
			buttonOpen,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
		} );		
	
		return (
			<Fragment>
				<div className={ classNames } >
					<RichText
				    	tagName={ 'h3' }
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						placeholder={ __( 'Insert title here..', '_svbk' ) }
						className={ 'wp-block-svbk-collapse__title' }
					/>				
					<InnerBlocks 
						templateLock={ false }
						template={ TEMPLATE }
					/>				
					<div className={ 'wp-block-svbk-collapse__button' } >
						<PlainText
							value={ buttonOpen }
							onChange={ ( value ) => setAttributes( { buttonOpen: value } ) }
							placeholder={ __( 'Open me..', '_svbk' ) }
							className={ 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open' }
						/>
						<PlainText
							value={ buttonClose }
							onChange={ ( value ) => setAttributes( { buttonClose: value } ) }
							placeholder={ __( 'Close me..', '_svbk' ) }
							className={ 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close' }
						/>	
					</div>
				</div>
				<InspectorControls>
					<PanelBody title={ __( 'Collapse Settings', '_svbk') }>
					    <ToggleControl
					        label={ __( 'Default Open', '_svbk' ) }
					        help={ defaultOpen ? __( 'Leave the collapse open on page load', '_svbk') : __( 'Leave the collapse close on page load', '_svbk')}
					        checked={ defaultOpen }
					        onChange={ ( checked ) => setAttributes( { defaultOpen: Boolean(checked) } ) }
					    />
					</PanelBody>
				</InspectorControls>
			</Fragment>			
		);
	}
    
}

export default CollapseEdit;
