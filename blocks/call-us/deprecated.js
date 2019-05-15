
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { 
    Button,

} = wp.components;

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
        
        multiple: false,

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
        
        multiple: false,

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
    }    
];

export default deprecated;