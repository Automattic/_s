/* global wp */
/* global lodash */
/**
 * External dependencies
 */
const { isUndefined, pickBy } = lodash;
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, Fragment, RawHTML } = wp.element;
const {
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	RadioControl,
	Spinner,
	ToggleControl,
	Toolbar,
	SVG,
	Rect,
} = wp.components;

const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;
const { __ } = wp.i18n;
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
} = wp.blockEditor;
const { withSelect } = wp.data;

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
};
const MAX_POSTS_COLUMNS = 6;


export const SinglePost = function(props){

	const { 
		postType,
		displayPostContentRadio, 
		excerptLength,
		post
	} = props;

	const titleTrimmed = post.title.rendered.trim();
	let excerpt = post.excerpt.rendered;
	if ( post.excerpt.raw === '' ) {
		excerpt = post.content.raw;
	}
	const excerptElement = document.createElement( 'div' );
	excerptElement.innerHTML = excerpt;
	excerpt = excerptElement.textContent || excerptElement.innerText || '';		

	return (
		<div className={ classnames( 
			[ 
				`type-${ post.type }`,
				`format-${ post.format }`,
			]) } 
		>
			{ post.featured_media && (
			<SVG viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
				<Rect x="0" y="0" width="40" height="30" fill="grey" />
			</SVG>
			)}
			<h3>
				<a href={ post.link } target="_blank" rel="noreferrer noopener">
					{ titleTrimmed ? (	
						<RawHTML>
							{ titleTrimmed }
						</RawHTML>
					) :
						__( '(no title)' )
					}
				</a>
			</h3>								
			{ displayPostContentRadio === 'excerpt' &&
			<div className={`wp-block-${postType}__post-excerpt`}>
				<RawHTML
					key="html"
				>
					{ excerptLength < excerpt.trim().split( ' ' ).length ?
						excerpt.trim().split( ' ', excerptLength ).join( ' ' ) + ' ... <a href=' + post.link + 'target="_blank" rel="noopener noreferrer">' + __( 'Read more' ) + '</a>' :
						excerpt.trim().split( ' ', excerptLength ).join( ' ' ) }
				</RawHTML>
			</div>
			}
			{ displayPostContentRadio === 'full_post' &&
			<div className={`wp-block-${postType}__full-content`}>
				<RawHTML
					key="html"
				>
					{ post.content.raw.trim() }
				</RawHTML>
			</div>
			}
		</div>
	)

}


class PostListEdit extends Component {

	constructor() {
		super( ...arguments );
		this.state = {
			categoriesList: [],
		};
		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this );
	}

	componentDidMount() {
		this.isStillMounted = true;

		if ( this.props.taxonomy ) {
			this.fetchRequest = apiFetch( {
				path: addQueryArgs( `/wp/v2/${this.props.taxonomy}`, CATEGORIES_LIST_QUERY ),
			} ).then(
				( categoriesList ) => {
					if ( this.isStillMounted ) {
						this.setState( { categoriesList } );
					}
				}
			).catch(
				() => {
					if ( this.isStillMounted ) {
						this.setState( { categoriesList: [] } );
					}
				}
			);
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostDate: ! displayPostDate } );
	}

	render() {
		const { attributes, setAttributes, posts, taxonomy, children } = this.props;
		const { categoriesList } = this.state;

		const { 
			displayPostContentRadio, 
			align, 
			postLayout, 
			columns, 
			order, 
			orderBy, 
			categories, 
			postsToShow, 
			offset, 
			loadMore,
			excerptLength,
		} = attributes;

		const inspectorControls = (
			<InspectorControls>
				
				<PanelBody title={ __( 'Post Content Settings' ) }>
					<RadioControl
						label="Show:"
						selected={ displayPostContentRadio }
						options={ [
							{ label: 'Excerpt', value: 'excerpt' },
							{ label: 'Full Post', value: 'full_post' },
						] }
						onChange={ ( value ) => setAttributes( { displayPostContentRadio: value } ) }
					/>
					{ displayPostContentRadio === 'excerpt' &&
						<RangeControl
							label={ __( 'Max number of words in excerpt' ) }
							value={ excerptLength }
							onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
							min={ 10 }
							max={ 100 }
						/>
					}						
				</PanelBody>

				<PanelBody title={ __( 'Filter & Sorting', '_svbk' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						categoriesList={ categoriesList }
						selectedCategoryId={ taxonomy ? categories : undefined }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
					<RangeControl
						label={ __( 'Offset', '_svbk' ) }
						value={ offset }
						onChange={ ( value ) => setAttributes( { offset: value } ) }
						min={ 0 }
						max={ 10 }
					/>					
					<ToggleControl
						label={ __( 'Show Load More', '_svbk' ) }
						checked={ loadMore }
						onChange={ ( value ) => setAttributes( { loadMore: Boolean( value ) } ) }
					/>					
				</PanelBody>

				{ postLayout === 'grid' &&
					<PanelBody title={ __( 'Layout' ) }>					
						<RangeControl
							label={ __( 'Columns', '_svbk' ) }
							value={ columns }
							onChange={ ( value ) => setAttributes( { columns: value } ) }
							min={ 2 }
							max={ ! hasPosts ? MAX_POSTS_COLUMNS : Math.min( MAX_POSTS_COLUMNS, posts.length ) }
						/>
					</PanelBody>
				}				

			</InspectorControls>
		);

		const hasPosts = Array.isArray( posts ) && posts.length;
		if ( ! hasPosts ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
					>
						{ ! Array.isArray( posts ) ?
							<Spinner /> :
							__( 'No posts found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts = posts.length > postsToShow ?
			posts.slice( 0, postsToShow ) :
			posts;

		const layoutControls = [
			{
				icon: 'list-view',
				title: __( 'List View' ),
				onClick: () => setAttributes( { postLayout: 'list' } ),
				isActive: postLayout === 'list',
			},
			{
				icon: 'grid-view',
				title: __( 'Grid View' ),
				onClick: () => setAttributes( { postLayout: 'grid' } ),
				isActive: postLayout === 'grid',
			},
		];

		let SinglePostComponent = SinglePost;

		if ( typeof children !== 'undefined'){
			SinglePostComponent = children;
		}

		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
						controls={ [ 'center', 'wide', 'full' ] }
					/>
					<Toolbar controls={ layoutControls } />
				</BlockControls>
				<div
					className={ classnames( this.props.className, {
						'is-grid': postLayout === 'grid',
						[ `columns-${ columns }` ]: postLayout === 'grid',
					} ) }
				>
					{ displayPosts.map( ( post, i ) => (<SinglePostComponent {...attributes} post={post} postType={this.props.postType} key={i} />) ) }
				{ loadMore && ( 
					<div className={ `wp-block-${this.props.postType}s__loadmore` }>{ __( 'Load more', '_svbk' ) }</div>
				)  }
				</div>
			</Fragment>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { postsToShow, order, orderBy, categories } = props.attributes;
	const { getEntityRecords } = select( 'core' );
	const postsQuery = pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow,
	}, ( value ) => ! isUndefined( value ) );
	return {
		posts: getEntityRecords( 'postType', props.postType, postsQuery ),
	};
} )( PostListEdit );