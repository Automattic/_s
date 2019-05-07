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
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText, 
	URLInput,
	InspectorControls,
	BlockControls
} = wp.editor;

const {
	Dashicon,
	IconButton,
	PanelBody,
	ToggleControl,
	Toolbar,	
} = wp.components;

/**
 * Internal dependencies
 */

import ImageEdit from '../common/image';
import { HeadingToolbar } from '../common/heading';

class HeroEdit extends Component {

	constructor () {
		super(...arguments);

		this.state = {
			customStackedImage: Boolean(this.props.attributes.pictureStackedUrl),
		}
	}

    render() {

		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		const { 
			pictureUrl,
			pictureId, 
			pictureStackedUrl,
			pictureStackedId,
			pictureAlt,
			pretitle,
			title,
			titleLevel,			
			subtitle,
			text,
			align,
			primaryButtonUrl, 
			primaryButtonText,			
			secondaryButtonUrl, 
			secondaryButtonText,
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
			[`has-align-${align}`]: align,
		} );		
		
		const pictureUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url', 'alt' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'picture' + capitalize(key);
			});

			setAttributes( localUpdate );
		}
		
		const pictureStackedUpdate = ( update ) => {
			
			const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ) , function(value, key) {
				// Convert url to pictureUrl, id to pictureId, etc
				return 'pictureStacked' + capitalize(key);
			});

			setAttributes( localUpdate );
		}		
		
		const style = { };
	
		const toolbarControls = [ 
			{
				icon: 'align-pull-right',
				title: __( 'Show content on left' ),
				isActive: align === 'left',
				onClick: () => setAttributes( { align: 'left' } ),
			}, 
			{
				icon: 'align-pull-left',
				title: __( 'Show content on right' ),
				isActive: align === 'right',
				onClick: () => setAttributes( { align: 'right' } ),
			}
		]	
	
        const titleTag = titleLevel ? ( 'h' + titleLevel ) : 'h1';    	
	
		return (
			<Fragment>
				<div className={ classNames } style={ style } >
					<ImageEdit
						setAttributes={ pictureUpdate }
						url={ pictureUrl }
						id={ pictureId }
						alt={ pictureAlt }
						isMain={ true }
					/> 
					{ pictureUrl && (
					<div className={ 'wp-block-svbk-hero__content' } >
						<RichText
							tagName={ 'p' }
							value={ pretitle }
							onChange={ ( value ) => setAttributes( { pretitle: value } ) }
							placeholder={ __( 'Question: is this a new block?', '_svbk' ) }
							className={ 'wp-block-svbk-hero__subtitle' }
						/>
						<RichText
	    			    	tagName={ titleTag }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							placeholder={ __( 'This is my title..', '_svbk' ) }
							className={ 'wp-block-svbk-hero__title' }
						/>
						<RichText
							tagName={ 'p' }
							value={ subtitle }
							onChange={ ( value ) => setAttributes( { subtitle: value } ) }
							placeholder={ __( 'Subtitle..', '_svbk' ) }
							className={ 'wp-block-svbk-hero__subtitle' }
						/>	
						<RichText
							tagName={ 'p' }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							placeholder={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.' }
							className={ 'wp-block-svbk-hero__text' }
						/>
						<RichText
							placeholder={ __( 'Primary button text…' ) }
							value={ primaryButtonText }
							onChange={ ( value ) => setAttributes( { primaryButtonText: value } ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
							className={ 'wp-block-svbk-hero__link block-library-button'}
						/>
						{ isSelected && (
							<form
								className="block-library-button__inline-link"
								onSubmit={ ( event ) => event.preventDefault() }>
								<Dashicon icon="admin-links" />
								<URLInput
									value={ primaryButtonUrl }
									onChange={ ( value ) => setAttributes( { primaryButtonUrl: value } ) }
								/>
								<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
							</form>
						) }	
						<RichText
							placeholder={ __( 'Secondary button text…' ) }
							value={ secondaryButtonText }
							onChange={ ( value ) => setAttributes( { secondaryButtonText: value } ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
							className={ 'wp-block-svbk-hero__link block-library-button'}
						/>
						{ isSelected && (
							<form
								className="block-library-button__inline-link"
								onSubmit={ ( event ) => event.preventDefault() }>
								<Dashicon icon="admin-links" />
								<URLInput
									value={ secondaryButtonUrl }
									onChange={ ( value ) => setAttributes( { secondaryButtonUrl: value } ) }
								/>
								<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
							</form>
						) }	
					</div>
					) }					
				</div> 
                <BlockControls>
                    <HeadingToolbar minLevel={ 1 } maxLevel={ 3 } selectedLevel={ titleLevel } onChange={ ( newLevel ) => { setAttributes( { titleLevel: newLevel } ) } } />
					<Toolbar
						controls={ toolbarControls }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Background Settings' ) } >
						<ToggleControl
							label={ __( 'Use custom image when stacked', '_svbk' ) }
							checked={ this.state.customStackedImage }
							onChange={ ( useCustom ) => {
								this.setState( { customStackedImage: Boolean( useCustom )  } ) }
							}
							help = { __( 'Choose another image when the image is above the text', '_svbk') }
						/>
						{ this.state.customStackedImage && (
						<Fragment>
							<label className="components-base-control__label" >{ 'Immagine sopra-sotto' }</label>
							<ImageEdit
								setAttributes={ pictureStackedUpdate }
								url={ pictureStackedUrl }
								id={ pictureStackedId }
								inInspector={true}
							/> 						
						</Fragment>
					    ) }
					</PanelBody>				
				</InspectorControls>				
			</Fragment>
		);
	}
    
}

export default HeroEdit;
