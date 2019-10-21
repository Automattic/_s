/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
const { 
    pick,
    mapKeys,
    capitalize
} = lodash;
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { 
	RichText,
	PlainText,
	InspectorControls,	
} = wp.blockEditor;


const {
	PanelBody,
	TextControl
} = wp.components;


/**
 * Internal dependencies
 */
import ImageEdit from '../common/image';

class PublicationEdit extends Component {

    render() {
    	
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		const { 
			pictureUrl,
			pictureAlt,
			pictureId,		    
			title,
			author,
			meta, 
			url,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
		} );		
		
		const pictureUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'alt' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'picture' + capitalize(key);
			});

			setAttributes( localUpdate );
		}
				
		return (
			<Fragment>
				<div className={ classNames } >
					<ImageEdit
						setAttributes={ pictureUpdate }
						url={ pictureUrl }
						id={ pictureId }
						alt={ pictureAlt }
						isMain={ true }
					/> 
				    <div className={ 'wp-block-svbk-publication__content' } > 
						<PlainText
							value={ author }
							onChange={ ( value ) => setAttributes( { author: value } ) }
							placeholder={ __( 'Author Name..', '_svbk' ) }
							className={ 'wp-block-svbk-publication__author' }
						/>
						<RichText
	    			    	tagName={ 'div' }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'This is my title..', '_svbk' ) }
							className={ 'wp-block-svbk-publication__title' }
						/>
						<RichText
							tagName={ 'div' }
							value={ meta }
							onChange={ ( value ) => setAttributes( { meta: value } ) }
							placeholder={ __( 'Publisher, Year, ..', '_svbk' ) }
							className={ 'wp-block-svbk-publication__meta' }
						/>
					</div>					
				</div>
				<InspectorControls>
						<PanelBody title={ __( 'Publication Settings', '_svbk' ) } >
						    <TextControl
						        label={ 'URL' }
						        value={ url }
						        onChange={ ( value ) => setAttributes( { url: value } ) }
						    />
						</PanelBody>
				</InspectorControls>				
			</Fragment>
		);
	}
    
}

export default PublicationEdit;
