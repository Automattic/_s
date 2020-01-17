import classnames from 'classnames';
const { Component } = wp.element;

/**
 * WordPress dependencies
 */
const { RawHTML } = wp.element;
const { __ } = wp.i18n;
const {
    Spinner
} = wp.components;

const {
	withSelect
} = wp.data;

const { compose } = wp.compose;

class Post extends Component {
    
    getThumbnailImage(thumbnailMedia){
        
        if ( !thumbnailMedia || !thumbnailMedia.description ){
            return false;
        }

        // Never return a text node of whitespace as the result
        const template = document.createElement('template');
        template.innerHTML = thumbnailMedia.description.rendered.trim();

        return template.content.querySelector('img').outerHTML;
    }

    render() {

        const { 
            postType,
            display, 
            excerptLength,
            post,
            thumbnailMedia
        } = this.props;


        const titleTrimmed = post.title.rendered.trim();
        let excerpt = post.excerpt ? post.excerpt.rendered : '';
       
        if ( post.excerpt && post.excerpt.raw === '' ) {
            excerpt = post.content.raw;
        }
        
        const excerptElement = document.createElement( 'div' );
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || '';		

        const thumbnailImg = this.getThumbnailImage(thumbnailMedia);

        const postContent = post.content.raw ? post.content.raw : post.content.rendered;

        return (
            <div className={ classnames( 
                { 
                    post: true,
                    [`post--${ post.type }`]: post.type,
                    [`post--format-${ post.format }`]: post.format,
                    ['has-thumbnail']: post.featured_media 
                }) } 
            >
                { ( post.featured_media && !thumbnailMedia ) && <Spinner /> }
                { thumbnailMedia && (
                    <RawHTML>
                        { thumbnailImg }
                    </RawHTML>                    
                )}
                <h3>
                    { titleTrimmed ? (	
                        <RawHTML>
                            { titleTrimmed }
                        </RawHTML>
                    ) :
                        __( '(no title)' )
                    }
                </h3>								
                { display === 'excerpt' &&
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
                { display === 'full_post' &&
                <div className={`wp-block-${postType}__full-content`}>
                    <RawHTML
                        key="html"
                    >
                        { postContent.trim() }
                    </RawHTML>
                </div>
                }
            </div>
        )
    }

}

export default compose( [
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
        const { post } = props;
        const { featured_media } = post;
		return {
			thumbnailMedia: featured_media ? getMedia( featured_media ) : null,
		};
	})  
] )( Post );