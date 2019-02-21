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
    `@import 'mobile/right-nav/right-nav';`
* [Mobile left aligned menu](header/_left-mobile-nav.scss):
    use it when either search toggle or cart icon or both are present.\
    `@import 'mobile/left-nav/left-nav';`\
    Note: import has-cart.scss (`@import 'has-cart';`) in left-nav.scss if cart icon is present.

### Desktop Menu
Import either center or left aligned style in header/header.scss.
* [Desktop left aligned menu](header/_left-aligned.scss)\
    `@import 'desktop/logo-left';`
* [Desktop center aligned menu](header/_center-aligned.scss)\
    `@import 'desktop/logo-center';`

## Blocks

### Full Width blocks
* **Solid or no background**\
    Use a Wordpress multiple columns (2 columns) block with 
    `wp-block-container` class.
    Use `is-style-full` class to obtain an inner content with a maximum width of
    600px on desktop;
* **Background image**\
    Use a Wordpress Media and Text block with `has-image-background` class. 
    The media component will be set as the block background.

## Buttons Group
Obtain two aligned buttons using a Multiple Columns (2 columns) block with
`buttons-wrap` class. Insert a button block in each column.

### Cards
* **Icon card** (suitable for bullets/company services)\
    Use Wordpress Multiple Columns block with `is-style-icon-cards` class.\
    Structure: image (icon) + title (either h2 or h3) + text content (p, ul, ol, etc).
* **Image card** (suitable for company services/area of competence)\
    Use Wordpress Multiple Columns block with `is-style-image-cards` class.\
    Structure: image + title (either h2 or h3) + (p, ul, ol, etc).
* **Data card** (suitable for company data and stats)\
    Use Wordpress Multiple Columns block with `is-style-stats-cards` class.\
    Structure: wrap numbers in an `<em>` tag to output the card correctly. 
    Assign icons through CSS pseudo-elements.

### Clients'logos gallery
Suitable to display a simple gallery of aligned logos.\
Use a Multiple Columns block with `is-style-clients` class.\
Fill the first column with the label text (h3) and the second column with 
a gallery block.

### Form and image
Suitable for Guide Donwload blocks or contact form blocks. \
Use Wordpress Multiple Columns (2 columns) block with `is-style-form` class. \
To display a standard Guide Download block (where the guide png is allowed to 
slightly excedes the block vertically) add the `has-overflow-image` class.\
To add an overlay caption to the image content add `is-style-overlay-caption` 
class to the specific element.

### Offer block
Suitable for offer presentation. The first column contains either an embedded
video or an image of the product. \
Use Wordpress Multiple Columns (2 columns) block with `is-style-offer` class.

### Method block
Suitable for process presentation.\
Structure: a Wordpress Multiple Columns block (variable columns number) with 
`is-style-method` class. Assign the `single-step` class to every inner column.
Fill every column with the following blocks:
* an image with `single-step__picture` class;
* a paragraph with `single-step__label` class;
* an heading with `single-step__title` class;
* a paragraph with `single-step__content` class.
