/* global wp */
/* global lodash */

const { Fragment, Component } = wp.element;
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
	RichText, 
	PlainText,
} = wp.blockEditor;

const { 
	ButtonGroup, 
	Button,
} = wp.components;

import IconEditor from '../icon/editor';

class IterEdit extends Component {

	constructor (props) {
		super(...arguments);
		
		this.updateStep	= this.updateStep.bind(this);		
		this.addStep	= this.addStep.bind(this);		
		this.removeStep	= this.removeStep.bind(this);		
		this.cloneStep	= this.cloneStep.bind(this);		
	}

	addStep() {
		
		const {
			attributes: { steps	},
			setAttributes,
		} = this.props;

		let updatedSteps = steps.slice(0);
		
		updatedSteps.push( {
			icon: '',
			name: '',
			content: '',
		} );

		setAttributes( { steps: updatedSteps } );
	}
	
	removeStep( index ) {
		
		const {
			attributes: { steps	},
			setAttributes,
		} = this.props;
		
		steps.splice(index, 1);

		setAttributes( { steps: steps.slice(0) } );
	}	
	
	cloneStep( index ) {
		
		const {
			attributes: { steps	},
			setAttributes,
		} = this.props;
		
		steps.splice(index, 0, steps[index]);

		setAttributes( { steps: steps.slice(0) } );
	}	

	updateStep( index, update ) {
		
		const {
			attributes: { steps	},
			setAttributes,
		} = this.props;

		const updatedSteps = steps.slice(0);
		const updatedStep  = Object.assign( {}, steps[index], update );
		
		updatedSteps[index] = updatedStep;

		setAttributes( { steps: updatedSteps } );
	}
	
    render() {
    	
		const {
			attributes,
			className,
			isSelected,
		} = this.props;

		const { 
			steps
		} = attributes;
		
		const classNames = classnames( className, {
			'is-selected': isSelected,
		} );		

		return (
			<Fragment>
				<div className={ classNames } >
					{ steps.map( ( step, index ) => ( 
						<div className={ 'wp-block-svbk-iter__step' } key={ index } >
					    	<IconEditor 
					    		{ ...this.props }
					    		attributes={ step } 
					    		setAttributes={ ( update ) => { this.updateStep( index, update ) } }  
					    	/>
						    <div className={ 'wp-block-svbk-iter__wrapper' } > 
								<PlainText
									value={ step.name }
									onChange={ ( value ) => this.updateStep( index, { name: value } ) }
									placeholder={ __( 'Step ' + (index+1) + '..', '_svbk' ) }
									className={ 'wp-block-svbk-iter__name' }
								/>
								<PlainText
									value={ step.title }
									onChange={ ( value ) => this.updateStep( index, { title: value } ) }
									placeholder={ __( 'Title..', '_svbk' ) }
									className={ 'wp-block-svbk-iter__title' }
								/>
								<RichText
									tagName={ 'div' }
									value={ step.content }
									onChange={ ( value ) => this.updateStep( index, { content: value } ) }
									placeholder={ __( 'Content..', '_svbk' ) }
									className={ 'wp-block-svbk-bullet__content' }
								/>
							</div>	
							<ButtonGroup>
								<Button isDestructive
									className={ 'wp-block-svbk-iter__remove' }
									onClick={ () => { this.removeStep( index ); } }
								>
									{ __( 'Remove Step' , '_svbk' ) }
								</Button>
								<Button isDefault
									className={ 'wp-block-svbk-iter__clone' }
									onClick={ () => { this.cloneStep( index ); } }
								>
									{ __( 'Clone Step' , '_svbk' ) }
								</Button>
							</ButtonGroup>
						</div>
					) ) }
				</div>
				<Button isPrimary 
					className={ 'wp-block-svbk-iter__add' }
					onClick={ this.addStep }
				>
					{ __( 'Add Step' , '_svbk' ) }
				</Button>
			</Fragment>			
		);
	}
    
}

export default IterEdit;
