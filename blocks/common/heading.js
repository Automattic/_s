/* global wp */
/* global lodash */

/**
 * External dependencies
 */
const { range } = lodash;

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, Component } = wp.element;
const { Toolbar } = wp.components;
const { RichText } = wp.editor;


class HeadingToolbar extends Component {
	createLevelControl( targetLevel, selectedLevel, onChange ) {
		return {
			icon: 'heading',
			// translators: %s: heading level e.g: "1", "2", "3"
			title: sprintf( __( 'Heading %d' ), targetLevel ),
			isActive: targetLevel === selectedLevel,
			onClick: () => onChange( targetLevel ),
			subscript: String( targetLevel ),
		};
	}

	render() {
		const { minLevel, maxLevel, selectedLevel, onChange } = this.props;
		return (
			<Toolbar controls={ range( minLevel, maxLevel ).map( ( index ) => this.createLevelControl( index, selectedLevel, onChange ) ) } />
		);
	}
}

export { HeadingToolbar }

class Heading extends Component {
 
 	constructor() {
		super( ...arguments );
		
		this.onLevelChange = this.onLevelChange.bind(this);
		
		this.state = {
		    isSelected: false,
		};
	}
 
    onLevelChange( newLevel ) {
        this.props.onLevelChange( newLevel );
    }
 
    render() {
        
        const { level, isSelected } = this.props;
        
        const titleTag = level ? ( 'h' + level ) : 'h2';       
        
        return (
            <Fragment>
    			{ isSelected && (
    				<HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ level } onChange={ this.onLevelChange } />
    			    ) 
    			}            
        		<RichText
    				tagName={ titleTag }
    				{ ...this.props }
    			/>
			</Fragment>
        );
    }   
    
}

export default Heading;