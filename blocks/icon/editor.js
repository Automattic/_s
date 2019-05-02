/* global wp */
/* global lodash */

const { __ } = wp.i18n;
const { Component } = wp.element;

const { 
	PlainText,
} = wp.editor;

const {
	Disabled, 
	SandBox,
} = wp.components;

/**
 * External dependencies
 */
import classnames from 'classnames';

class IconEditor extends Component {

	constructor() {
		super( ...arguments );
		this.state = {
			isPreview: true,
		};
		this.switchToPreview = this.switchToPreview.bind( this );
		this.switchToEditor = this.switchToEditor.bind( this );
	}

	switchToPreview() {
		this.setState( { isPreview: true } );
	}

	switchToEditor() {
		this.setState( { isPreview: false } );
	}

	render() {
		
		const { 
			attributes,
			isSelected,
			setAttributes,
		} = this.props;
		
		const { 
			icon,
			className,
		} = attributes;		
		
		const isPreview = this.state.isPreview;
		
		const classNames = classnames( className, [ 'block-editor-icon-svg' ] );		
		
		return (	
			<div className={ classNames }>
				{ isSelected && (
				<div className="components-toolbar">
					{ icon && (	
					<button
						className={ `components-tab-button ${ isPreview ? 'is-active' : '' }` }
						onClick={ this.switchToPreview }
					>
						<span>{ __( 'View' ) }</span>
					</button>	
					) }	
					<button
						className={ `components-tab-button ${ ! isPreview ? 'is-active' : '' }` }
						onClick={ this.switchToEditor }
					>
						<span>{ __( 'Code' ) }</span>
					</button>
				</div>
				) }
				<Disabled.Consumer>
					{ ( isDisabled ) => (
						( isPreview || isDisabled ) ? (
						    <SandBox html={ icon } />
						) : (
							<div>
								<h3>{ 'SVG Code' }</h3>
								<PlainText
									value={ icon }
									onChange={ ( code ) => setAttributes( { icon: code } ) }
									placeholder={ __( 'Paste SVG…' ) }
									aria-label={ __( 'SVG' ) }
								/>
							</div>
						)
					) }
				</Disabled.Consumer>
			</div>
		);
	
	}
	
}

export default IconEditor;