/* global wp */
/* global lodash */

const {
	compact,
	get,
	isEmpty,
	map,
	pick,
} = lodash;

const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;

const { 
	IconButton,
	PanelBody,
	SelectControl,
	TextareaControl,
	Toolbar,
	SVG,
	Rect,
	Path,
	Spinner
} = wp.components;

const { 
	InspectorControls,
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,	
} = wp.blockEditor;

const {
	withSelect
} = wp.data;

const { compose } = wp.compose;

const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const editImageIcon = ( <SVG width={ 20 } height={ 20 } viewBox="0 0 20 20"><Rect x={ 11 } y={ 3 } width={ 7 } height={ 5 } rx={ 1 } /><Rect x={ 2 } y={ 12 } width={ 7 } height={ 5 } rx={ 1 } /><Path d="M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z" /><Path d="M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z" /></SVG> );

export const pickRelevantMediaFiles = ( image ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url = get( image, [ 'sizes', 'medium', 'url' ] ) || get( image, [ 'media_details', 'sizes', 'medium', 'source_url' ] ) || image.url;
	return imageProps;
};

class ImageEdit extends Component {

	constructor() {
		super( ...arguments );

		this.updateAlt = this.updateAlt.bind( this );
		this.onSelectImage = this.onSelectImage.bind( this );
		this.onSelectURL = this.onSelectURL.bind( this );
		this.updateImageSize = this.updateImageSize.bind( this );
		this.onSetLinkDestination = this.onSetLinkDestination.bind( this );
		
		this.state = {
			isEditing: false
		};
	}
	
	updateAlt( newAlt ) {
		this.props.setAttributes( { alt: newAlt } );
	}	

	onUploadError( message ) {
		const { noticeOperations } = this.props;
		noticeOperations.createErrorNotice( message );
		this.setState( {
			isEditing: true,
		} );
	}

	onSelectImage( media ) {
		if ( ! media || ! media.id ) {
			this.props.setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				caption: undefined,
			} );
			return;
		}

		this.setState( {
			isEditing: false,
		} );

		this.props.setAttributes( {
			...pickRelevantMediaFiles( media ),
			width: undefined,
			height: undefined,
		} );
	}

	onSetLinkDestination( value ) {
		let href;

		if ( value === LINK_DESTINATION_NONE ) {
			href = undefined;
		} else if ( value === LINK_DESTINATION_MEDIA ) {
			href = ( this.props.image && this.props.image.source_url ) || this.props.url;
		} else if ( value === LINK_DESTINATION_ATTACHMENT ) {
			href = this.props.image && this.props.image.link;
		} else {
			href = this.props.href;
		}

		this.props.setAttributes( {
			linkDestination: value,
			href,
		} );
	}

	onSelectURL( newURL ) {
		const { url } = this.props.attributes;

		if ( newURL !== url ) {
			this.props.setAttributes( {
				url: newURL,
				id: undefined,
			} );
		}

		this.setState( {
			isEditing: false,
		} );
	}
	
	updateImageSize( size ) {

		const { image } = this.props;
		const sizedImage = get( image, [ 'media_details', 'sizes', size ] );

		this.props.setAttributes( { 
			url: sizedImage.source_url, 
			width: sizedImage.width, 
			height: sizedImage.height,
			size: size,
		} );
	}	
	
	getImageSizes() {
		const { imageSizes, image } = this.props;
		
		if ( !image ) {
			return [];
		}
		
		const currentImageSizes = get( image, [ 'media_details', 'sizes' ] );

		if ( !currentImageSizes ) {
			return [];
		}
		
		return Object.keys(currentImageSizes).map( function( sizeSlug ) {
			let sizeSpec = imageSizes.find( ( size ) => size.slug == sizeSlug );

			return {
				value: sizeSlug,
				label: sizeSpec ? sizeSpec.name : sizeSlug,
			};
		});
	}	

	render() {
		
		const { 
			url, 
			alt, 
			id, 
			size = 'medium',
			inInspector = false,
			isMain = false,
			changeSize = true,
			image,
		} = this.props;
		
		let imageUrl = url;

		if ( !url && image ) {
			imageUrl = get( image, [ 'media_details', 'sizes', size, 'source_url' ] )
			
			// Fallback sizes
			!imageUrl && ( imageUrl = get( image, [ 'media_details', 'sizes', 'thumbnail', 'source_url' ] ) );
			!imageUrl && ( imageUrl = get( image, [ 'media_details', 'sizes', 'full', 'source_url' ] ) );			
		}

		const imageSizeOptions = this.getImageSizes();		

		const settings = (
			<Fragment>
				{ ! isEmpty( imageSizeOptions ) && changeSize && (
					<SelectControl
						label={ __( 'Image Size' ) }
						value={ size }
						options={ imageSizeOptions }
						onChange={ this.updateImageSize }
					/>
				) }				
				{ (typeof alt !== 'undefined') && (
				<TextareaControl
					label={ __( 'Alt Text (Alternative Text)' ) }
					value={ alt }
					onChange={ this.updateAlt }
					help={ __( 'Alternative text describes your image to people who can’t see it. Add a short description with its key details.' ) }
				/> 
				) }
			</Fragment>				
		);
		
		const toolbar = (
			<Toolbar className= { 'block-editor-svbk-picture__controls' }>
				<MediaUpload
					onSelect={ this.onSelectImage }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ id }
					render={ ( { open } ) => (
							<IconButton
								className="components-toolbar__control"
								label={ __( 'Edit image' ) }
								icon={ editImageIcon }
								onClick={ open }
							/>
					) }				
				/>
				<IconButton
					className="components-toolbar__control"
					label={ __( 'Remove image' ) }
					icon='trash'
					onClick={ () => { this.onSelectImage() } }
				/>					
			</Toolbar>

		);

		return (
			<Fragment>
				{ imageUrl && 
					( 
						<Fragment>
							<MediaUploadCheck>
							{ isMain ? (
								<BlockControls>							
									{ toolbar }
								</BlockControls>								
							) : toolbar }
							</MediaUploadCheck>				
							<figure className={ 'block-editor-svbk-picture'} >
								<img src={ imageUrl } alt={ alt } />
							</figure> 
						</Fragment>				
				)}
				{ id && !image && (<Spinner />)}
				{ !imageUrl && !id && ( 
					
						<MediaPlaceholder
							//className={ className }
							onSelect={ this.onSelectImage }
							onSelectURL={ this.onSelectURL }
							accept="image/*"
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ { id, imageUrl } }
							labels={ this.props.labels }
						/> 
					)
				}
				{ inInspector ? settings : ( 
					<InspectorControls>
						<PanelBody title={ __( 'Image Settings' ) }>
							{ settings }
						</PanelBody>
					</InspectorControls> 
				) }
			</Fragment>
		);
	}
	
}

export default compose( [
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const { getSettings } = select( 'core/block-editor' );
		const { id } = props;
		const { maxWidth, isRTL, imageSizes } = getSettings();
	
		return {
			image: id ? getMedia( id ) : null,
			maxWidth,
			isRTL,
			imageSizes,
		};
	})  
] )( ImageEdit );