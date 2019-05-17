
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
    RichText,
} = wp.editor;

const { Fragment } = wp.element;

/**
 * External dependencies
 */
import classnames from 'classnames'; 

const deprecated = [
    {
		attributes: {
			callus_title: {
				type: 'string',
				source: 'text',
				selector: '.callus__title',
				default: __( 'Preferisci parlarne a voce?', '_svbk' )
			},		
			callus_text: {
				type: 'string',
				source: 'text',
				selector: '.callus__text',
				default: __( 'Chiamaci al numero', '_svbk' )
			},
			callus_number: {
				type: 'string',
				source: 'text',
				selector: '.callus__number',
				default: __( '(+39) 000 00000000', '_svbk' )
			}
		},      	

        supports: {
        	html: false,
        },
        
		migrate( attributes ) {
			const { 
				callus_title,
				callus_text,
				callus_number,
			} = attributes;

            const repls = /\(|\)|\+39|\s/gi;

			return {
				title: callus_title,
				text: callus_text,
				number: callus_number.replace(repls, ''),
				action: __( 'Chiamaci', '_svbk' )
			};
		},
		
		save({ attributes }){
			
			const { callus_title, callus_text, callus_number, className } = attributes;
			
			var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
			
			return (
				<div className={ className }>
					<h3 className="callus__title">{callus_title}</h3>
					<p className="callus__text">{callus_text}</p>
					<a href={"tel:" + callus_href} className="callus__number">{callus_number}</a>
				</div>
			);
		},
    },
    {
		attributes: {
			callus_title: {
				type: 'string',
				source: 'text',
				selector: '.callus__title',
				default: __( 'Preferisci parlarne a voce?', '_svbk' )
			},		
			callus_text: {
				type: 'string',
				source: 'text',
				selector: '.callus__text',
				default: __( 'Chiamaci al numero', '_svbk' )
			},
			callus_number: {
				type: 'string',
				source: 'text',
				selector: '.callus__number',
				default: __( '(+39) 000 00000000', '_svbk' )
			}
		},      	

        supports: {
        	html: false,
        },
        
		migrate( attributes ) {
			const { 
				callus_title,
				callus_text,
				callus_number,
			} = attributes;

            const repls = /\(|\)|\+39|\s/gi;

			return {
				title: callus_title,
				text: callus_text,
				number: callus_number.replace(repls, ''),
				action: __( 'Chiamaci', '_svbk' )
			};
		},
		
		save({ attributes }){
			
			const { callus_title, callus_text, callus_number, className } = attributes;
			
			var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
			
			return (
				<div className={ className }>
					<h3 className="callus__title">{callus_title}</h3>
					<p className="callus__text">{callus_text}</p>
					<a href={"tel:0039" + callus_href} className="callus__number">{callus_number}</a>
				</div>
			);
		},
    },
	{
		supports: {
			html: false,
		},
	
		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__title',
			},		
			text: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__text',
				default: __( 'Chiamaci al numero', '_svbk' )
			},
			number: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__number',
			},
			action: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__action',
			}
		},
	
		save({ attributes }){
			
			const { 
				title, 
				text, 
				number,
				action, 
				className
			} = attributes;
			
			return (
				<div className={ className }>
					<RichText.Content tagName={ 'h3' } className={ 'wp-block-svbk-call-us__title callus__title' } value={ title } />
					<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-call-us__text callus__text' } value={ text } />
					<a href={"tel:" + number } className="wp-block-svbk-call-us__button callus__number">
						<RichText.Content tagName={ 'span' } className={ 'wp-block-svbk-call-us__action wp-block-button__action' } value={ action } />
						<span class="wp-block-svbk-call-us__number wp-block-button__value">{ number }</span>
					</a>
				</div>
			);
		}    
	},
	{
		supports: {
			html: false,
		},
	
		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__title',
			},		
			text: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__text',
				default: __( 'Chiamaci al numero', '_svbk' )
			},
			number: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__number',
			},
			action: {
				type: 'string',
				source: 'html',
				selector: '.wp-block-svbk-call-us__action',
			}
		},		
			
		save({ attributes }){
			
			const { 
				title, 
				text, 
				number,
				action, 
				className
			} = attributes;
			
			const classNames = classnames( className, {
				[`has-action`]: action,
			} );			
			
			return (
				<div className={ classNames }>
					<RichText.Content tagName={ 'h3' } className={ 'wp-block-svbk-call-us__title callus__title' } value={ title } />
					<RichText.Content tagName={ 'p' } className={ 'wp-block-svbk-call-us__text callus__text' } value={ text } />
					<a href={"tel:" + number } className="wp-block-svbk-call-us__button callus__number">
						{ action && ( 
						<Fragment>
							<RichText.Content tagName={ 'span' } className={ 'wp-block-svbk-call-us__action wp-block-button__action' } value={ action } />
							&nbsp;
						</Fragment>
						) }
						<span class="wp-block-svbk-call-us__number wp-block-button__value">{ number }</span>
					</a>
				</div>
			);
		},		
		
	},
];

export default deprecated;