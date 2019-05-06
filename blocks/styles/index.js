import './style.scss';
import './editor.scss';

// Register Custom Styles
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'subtitle',
    label: 'Subtitle'
} );

wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'standout',
    label: 'Standout'
} );

wp.blocks.registerBlockStyle( 'core/list', {
    name: 'pros',
    label: 'Pros'
} );

wp.blocks.registerBlockStyle( 'core/list', {
    name: 'cons',
    label: 'Cons'
} );

wp.blocks.registerBlockStyle( 'core/button', {
    name: 'secondary',
    label: 'Secondary'
} );

wp.blocks.registerBlockStyle( 'core/button', {
    name: 'text-button',
    label: 'Text button'
} );

wp.blocks.registerBlockStyle( 'core/button', {
    name: 'call-us',
    label: 'Call us'
} );

wp.blocks.registerBlockStyle( 'core/group', {
    name: 'layout-grid',
    label: 'Grid Layout'
} );

wp.blocks.registerBlockStyle( 'core/columns', {
    name: 'inverted',
    label: 'Inverted'
} );

