/* global wp */
/* global lodash */
/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const {
	PanelBody,
	Placeholder,
	RadioControl,
	TextControl,
	Spinner,
	Popover
} = wp.components;

const apiFetch = wp.apiFetch;
const { addQueryArgs } = wp.url;
const { __ } = wp.i18n;
const {
	InspectorControls,
} = wp.blockEditor;

import Post from './Post';

class PostList extends Component {

	constructor() {
		super( ...arguments );
		this.state = {
			loading: false,
			posts: [],
			postPreview: false,
		};
	}
	
	componentDidMount() {
		this.isStillMounted = true;

		const { attributes } = this.props;

		if ( attributes && attributes.id ) {
			this.selectPost( attributes.id )
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	updatePosts(search){
		this.setState({ loading: true });

		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/search', {
				search,
				per_page: 20,
				type: 'post',
				subtype: this.props.postType
			} ),
		} ).then(
			( posts ) => {
				if ( this.isStillMounted ) {
					this.setState( { posts, loading: false } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { posts: [], loading: false } );
				}
			}
		);
	}

	selectPost(postId){

		const { setAttributes } = this.props;

		setAttributes({ id: postId });

		if ( !this.props.postType ) {
			return;
		}

		this.setState({ postLoading: true });

		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/${this.props.postType}/${postId}`, {
				_locale: 'user',
			} ),
		} ).then(
			( postContent ) => {
				if ( this.isStillMounted ) {
					this.setState( { postContent, postLoading: false } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { postContent: false, postLoading: false } );
				}
			}
		);
	}	

	render() {
		const { attributes, setAttributes, className } = this.props;
		const { posts, loading, postContent, postLoading } = this.state;

		const { 
			displayPostContentRadio, 
			id
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
				</PanelBody>
			</InspectorControls>
		);

		if ( ! id ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
					>
					    <TextControl
							label={__("Search", '_svbk')}
							onChange={ ( search ) => this.updatePosts( search ) }
						/>
						{ posts.length &&
							<Popover
								position="bottom"
								noArrow
								focusOnMount={ false }
							>
								<div
									className={ `${ className }__suggestions` }
									role="listbox"
								>
									{ posts.map( ( post, index ) => (
										<button
											key={ post.id }
											role="option"
											tabIndex="-1"
											id={ `post-${ index }` }
											onClick={ () => this.selectPost(post.id) }
											aria-selected={ post.id === id }
										>
											{ post.title }
										</button>
									) ) }
								</div>
							</Popover>
						}						
						{ ( loading ) && <Spinner /> }
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<Fragment>
				{ inspectorControls }
				{ ( postLoading ) && <Spinner /> }
				{ ( postContent ) && <Post {...attributes} post={postContent} /> }
			</Fragment>
		);
	}
}

export default PostList;