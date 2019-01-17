# Style Guide

## Background images
When setting images as background through CSS, use the mixin 
`background-image($fileName, $fileType)`,
where `$fileType` is the file extension ('jpg', 'png', etc).

## Responsive Video
Wrap the video iframe in a div with `aspect-ratio` class to maintain video ratio 
through all devices.

## Site Main Layout
Import either in-grid or full layout style in critical.scss.
* [In-grid (boxed) layout](layout/_in-grid.scss)\
    `@import 'layout/in-grid';`
* [Full layout](layout/_full.scss)\
    `@import 'layout/full';`

## Header/Nav
### Top Header
If top header is present, import the style in header/header.scss.
* [Top header style](header/_top-header.scss)\
    `@import 'top-header';`

### Sticky Header
If sticky header animation is used, import the stuck header style in 
header/header.scss.
* [Stuck header style](header/_header-stuck.scss)
    `@import 'header-stuck';`

### Mobile Menu
Import either right or left aligned style in header/header.scss.
* [Mobile right aligned menu](header/_right-mobile-nav.scss): 
    use it as default.\
    `@import 'right-mobile-nav';`
* [Mobile left aligned menu](header/_left-mobile-nav.scss):
    use it when both search toggle and cart icon exist in header.\
    `@import 'left-mobile-nav';`

### Desktop Menu
Import either center or left aligned style in header/header.scss.
* [Desktop left aligned menu](header/_left-aligned.scss)\
    `@import 'left-aligned';`
* [Desktop center aligned menu](header/_center-aligned.scss)\
    `@import 'center-aligned';`

## Blocks

### Full Width blocks
* **Solid background or no background**\
    Use a Wordpress multiple columns (2 columns) block with 
    `wp-columns-full` class.
* **Background image**\
    Use a Wordpress Media and Text block with `has-dark-image-background` or 
    `has-light-image-background` classes. 
    The media component will be set as block background.

## Buttons Group
Obtain two aligned buttons using a Multiple Columns (2 columns) block with
`buttons-wrap` class. Insert a button block in each column.

### Cards
* **Icon card** (suitable for bullets/company services)\
    Use Wordpress columns block with `is-style-icon-cards` class.\
    Structure: image (icon) + title (either h2 or h3) + text content (p, ul, ol, etc).
* **Image card** (suitable for company services/area of competence)\
    Use Wordpress columns block with `is-style-image-cards` class.\
    Structure: image + title (either h2 or h3) + (p, ul, ol, etc).
* **Data card** (suitable for company data and stats)\
    Use Wordpress columns block with `is-style-stats-cards` class.\
    Structure: wrap numbers in an `<em>` tag to output the card correctly. 
    Assign icons through CSS pseudo-elements.

### Clients'logos gallery
Suitable to display a simple gallery of aligned logos.\
Use a Multiple Columns block with `is-style-clients` class.\
Fill the first column with the label text (h3) and the second column with 
a gallery block.

### Guide Download block
Use Wordpress Media and Text block with `is-style-download` class.

### Offer block
Use Wordpress multiple columns (2 columns) block with `is-style-offer` class.
Suitable for offer presentation. The first column contains either an embedded
video or an image of the product.

### Method block
Suitable for process presentation.\
Structure: a Wordpress multiple columns block (variable columns number) with 
`is-style-method` class. Assign the `single-step` class to every inner column.
Fill every column with the following blocks:
* an image with `single-step__picture` class;
* a paragraph with `single-step__label` class;
* an heading with `single-step__title` class;
* a paragraph with `single-step__content` class.

