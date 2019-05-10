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
    name: 'phone',
    label: 'Phone'
} );

wp.blocks.registerBlockStyle( 'core/group', {
    name: 'no-padding',
    label: 'No Padding'
} );

wp.blocks.registerBlockStyle( 'core/columns', {
    name: 'split',
    label: 'Split'
} );

wp.blocks.registerBlockStyle( 'core/columns', {
    name: 'split-inverted',
    label: 'Split Inverted'
} );

wp.blocks.registerBlockStyle( 'core/image', {
    name: 'rounded',
    label: 'Rounded'
} );

wp.blocks.registerBlockStyle( 'core/image', {
    name: 'rounded-corners',
    label: 'Rounded Corners'
} );

wp.blocks.registerBlockStyle( 'core/columns', {
    name: 'shrink-first',
    label: 'Shrink First'
} );



