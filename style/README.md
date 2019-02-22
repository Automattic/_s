# Style Guide

### <a name="index">Index</a>
* [Background image](#background-image)
* [Responsive video](#responsive-video)
* [Site main layout](#site-main-layout)
* [Header/nav](#header-nav)
    * [Top header](#top-header)
    * [Sticky header](#sticky-header)
    * [Mobile menu](#mobile-menu)
    * [Desktop menu](#desktop-menu)
* [Blocks](#blocks)
    * [Separator](#separator)
    * [Full width block](#full-width-block)
    * [Buttons group](#buttons-group)
    * [Cards](#cards)
    * [Clients logos gallery](#clients-logos-gallery)
    * [Form and image](#form-and-image)
    * [Offer block](#offer-block)
    * [Method block](#method-block)

## <a name="background-image">Background image</a> [#](#index)
When setting images as background through CSS, use the mixin 
`background-image($fileName, $fileType)`,
where `$fileType` is the file extension ('jpg', 'png', etc).

## <a name="responsive-video">Responsive Video</a> [#](#index)
Wrap the video iframe in a div with `aspect-ratio` class to maintain video ratio 
through all devices.

## <a name="site-main-layout">Site Main Layout</a> [#](#index)
Import either in-grid or full layout style in critical.scss.
* [In-grid (boxed) layout](layout/_in-grid.scss)\
    `@import 'layout/in-grid';`
* [Full layout](layout/_full.scss)\
    `@import 'layout/full';`

## <a name="header-nav">Header/Nav</a> [#](#index)
### <a name="top-header">Top Header</a>
If top header is present, import the style in header/header.scss.
* [Top header style](header/_top-header.scss)\
    `@import 'top-header';`

### <a name="sticky-header">Sticky Header</a>
If sticky header animation is used, import the stuck header style in 
header/header.scss.
* [Stuck header style](header/_header-stuck.scss)
    `@import 'header-stuck';`

### <a name="mobile-menu">Mobile Menu</a>
Import either right or left aligned style in header/header.scss.
* [Mobile right aligned menu](header/_right-mobile-nav.scss): 
    use it as default.\
    `@import 'mobile/right-nav/right-nav';`
* [Mobile left aligned menu](header/_left-mobile-nav.scss):
    use it when either search toggle or cart icon or both are present.\
    `@import 'mobile/left-nav/left-nav';`\
    Note: import has-cart.scss (`@import 'has-cart';`) in left-nav.scss if cart icon is present.

### <a name="desktop-menu">Desktop Menu</a>
Import either center or left aligned style in header/header.scss.
* [Desktop left aligned menu](header/_left-aligned.scss)\
    `@import 'desktop/logo-left';`
* [Desktop center aligned menu](header/_center-aligned.scss)\
    `@import 'desktop/logo-center';`

## <a name="blocks">Blocks</a> [#](#index)

### <a name="separator">Separator</a>
The standard Wordpress separator comes with a center alignment.
Add `leftalign` class to get a left-aligned separator instead.

### <a name="full-width-block">Full Width block</a>
* **Solid or no background**\
    Use a Wordpress multiple columns (2 columns) block with 
    `wp-block-container` class.
    Use `is-style-full` class to obtain an inner content with a maximum width of
    600px on desktop;
* **Background image**\
    Use a Wordpress Media and Text block with `has-image-background` class. 
    The media component will be set as the block background.

### <a name="buttons-group">Buttons Group</a>
Obtain two aligned buttons using a Multiple Columns (2 columns) block with
`buttons-wrap` class. Insert a button block in each column.

### <a name="cards">Cards</a>
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

### <a name="clients-logos-gallery">Clients logos gallery</a>
Suitable to display a simple gallery of aligned logos.\
Use a Multiple Columns block with `is-style-clients` class.\
Fill the first column with the label text (h3) and the second column with 
a gallery block.

### <a name="form-and-image">Form and image</a>
Suitable for Guide Download blocks or contact form blocks.\
Use Wordpress Multiple Columns (2 columns) block with `is-style-form` class.\
To display a standard Guide Download block (where the guide png is allowed to 
slightly excedes the block vertically) add the `has-overflow-image` class.\
Add this caption
```html
<strong>Preferisci parlarne a voce?</strong>
Chiamaci al numero
<a href="tel:00393921414546">(+39) 392 1414546&#65279;</a>
```
to get a fancy contact call-to-action.
### <a name="offer-block">Offer block</a>
Suitable for offer presentation. The first column contains either an embedded
video or an image of the product. \
Use Wordpress Multiple Columns (2 columns) block with `is-style-offer` class.

### <a name="method-block">Method block</a>
Suitable for process presentation.\
Structure: a Wordpress Multiple Columns block (variable columns number) with 
`is-style-method` class. Assign the `single-step` class to every inner column.
Fill every column with the following blocks:
* an image with `single-step__picture` class;
* a paragraph with `single-step__label` class;
* an heading with `single-step__title` class;
* a paragraph with `single-step__content` class.
