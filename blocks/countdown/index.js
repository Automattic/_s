//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import formatters from './formatters';
import ReactDOMServer from 'react-dom/server';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	Panel,
	PanelBody,
	ToggleControl,
	DateTimePicker,
	Dashicon
} = wp.components;
const {
	InspectorControls,
	RichText,
} = wp.editor;

const attributes = {
	expires: {
		type: 'string',
        source: 'attribute',
        selector: 'div.countdown',
        attribute: 'data-expires',	
	},
	persists: {
		type: 'string',
        selector: 'div',
        attribute: 'data-persist',				
	},
	format: {
		type: 'string',
		source: 'html',
    	selector: 'div',			
        default: __('%D days %H hours %M min %S sec', '_svbk'),
	}		
}; 

const formatterTemplate = option => (
    <span className={ 'countdown__segment countdown__segment--' + option.className  } >
    	<em className={ 'countdown__digit' }>%{ option.formatter }</em>
    </span>
);

const autocompleters = [
    {
        name: 'jquery_countdown',
        // The prefix that triggers this completer
        triggerPrefix: '%',
        // The option data
        options: formatters,
        // Returns a label for an option like " Orange"
        getOptionLabel: option => (
            <span>
                <code>%{ option.formatter }</code> { option.name }
            </span>
        ),
        // Declares that options should be matched by their name
        getOptionKeywords: option => [ option.formatter ],
        // Declares that the Grapes option is disabled
        isOptionDisabled: option => option.name === 'Grapes',
        // Declares completions should be inserted as abbreviations
        getOptionCompletion: formatterTemplate
    }
];	


const formatters_placeholders = lodash.keyBy( formatters, 'formatter' );
const formatters_placeholder_regex = /%(-?\w+)/gi;
const stringToFormat = ( formatString ) => formatString.replace(formatters_placeholder_regex, ( match, placeholder ) => {
	
	let formatter = formatters_placeholders[placeholder];
	
	if ( typeof formatter !== 'undefined' ) {
		try {
			return ReactDOMServer.renderToStaticMarkup( formatterTemplate(formatter) );
		} catch( err ) {
			console.error(err);
		}
	}
	
	return match;
} );


attributes.format.default = stringToFormat(attributes.format.default);

/**
 * Internal dependencies
 */
export const name = 'svbk/countdown';

export const settings = {
	title: __( 'Countdown', '_svbk' ),

	description: __( 'Countdown', '_svbk' ),

	icon: 'backup',

	category: 'widgets',
	
	keywords: [ __( 'countdown', '_svbk' ), __( 'timer', '_svbk' ) ],

	supports: {
		html: true,
	},

	attributes,

	transforms: {
	    from: [
	        {
	            type: 'shortcode',
	            // Shortcode tag can also be an array of shortcode aliases
	            tag: 'countdown',
	            attributes: {
	                // An attribute can be source from the shortcode attributes
	                expires: {
	                    type: 'string',
	                    shortcode: ( { named: { date = '' } } ) => {
	                    	return new Date(date).toISOString();
	                    },
	                },
	                // An attribute can be source from the shortcode attributes
	                format: {
	                    type: 'string',
	                    shortcode: ( { named: { format = attributes.format.default } } ) => {
	                    	
	                    	if ( encodeURIComponent(format).includes('<') ) {
	                    		return format;
	                    	}
	                    	
	                        return stringToFormat(format);
	                    },
	                },	                
	            },
	        },
	    ]
	},

	edit( {
			attributes,
			setAttributes,
			className,
		} ) {
		
		const { expires, persists, format } = attributes;
		const expireDate = new Date( expires );
			
		return ( expires ? 
				( 
				<Fragment>
					<InspectorControls>
						<PanelBody title={ __( 'Settings', '_svbk' ) }>
							<ToggleControl
								label={ __( 'Persist', '_svbk' ) }
								checked={ persists }
								onChange={ ( value ) => {
									setAttributes( { persists: Boolean( value ) } ) }
								}
								help = { __( 'Keep the countdown remaining time on page refresh', '_svbk') }
							/>
					        <DateTimePicker
					            currentDate={ expires }
								onChange={ ( value ) => {
									setAttributes( { expires: value } ) }
								}
					        />
						</PanelBody>
					</InspectorControls>
					<div className={ className } >
					<Dashicon icon="backup" />
					<RichText 
 						value={ format ? format : attributes.format.default } 
						onChange={ ( value ) => { setAttributes( { format: value } ) } } 
						autocompleters={autocompleters} 
					/>					
					<div className={ 'countdown__expires' }
					>{ 'Countdown expires at: ' +  expireDate.toLocaleDateString() + ' - ' + expireDate.toLocaleTimeString() }</div>
					</div>
				</Fragment>	
				) : (
				<Fragment>
					<div>{ __('Please choose an expire date', '_svbk' ) }</div>
			        <DateTimePicker
			            currentDate={ expires }
						onChange={ ( value ) => {
							setAttributes( { expires: value } ) }
						}
			        />
		        </Fragment>
		        ) 
		);
		
	},

	save( { attributes } ) {
		const { expires, format, persist } = attributes;
	
		return (
			<RichText.Content
				className={ 'countdown' } 
				data-expires={ expires } 
				data-persist={ persist } 
				tagName={ 'div' }
				value={ format }
			/>
		);
	},
	
};