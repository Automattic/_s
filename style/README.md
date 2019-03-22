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
* [Footer](#footer)
    * [Footer fixed bar](#footer-fixed-bar)
* [Blocks](#blocks)
    * [Above the fold](#above-the-fold)
    * [Closing CTA block](#closing-cta-block)
    * [Separator](#separator)
    * [Full width block](#full-width-block)
    * [Media and text](#media-and-text)
    * [Buttons group](#buttons-group)
    * [Cards](#cards)
    * [Form and image](#form-and-image)
    * [Offer block](#offer-block)
    * [Method block](#method-block)
    * [Warranty](#warranty)
* [Gallery](#gallery)
    * [Clients logos gallery](#clients-logos-gallery)
    * [Slider/Carousel](#carousel)

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
    Note: import has-cart.scss (`@import 'has-cart';`) in left-nav.scss if cart 
    icon is present.

### <a name="desktop-menu">Desktop Menu</a>
Import either center or left aligned style in header/header.scss.
* [Desktop left aligned menu](header/_left-aligned.scss)\
    `@import 'desktop/logo-left';`
* [Desktop center aligned menu](header/_center-aligned.scss)\
    `@import 'desktop/logo-center';`

## <a name="footer">Footer</a> [#](#index)

### <a name="footer-fixed-bar">Footer fixed bar</a>
To show a mobile fixed bar with a main call-to-action and a togglable list
of secondary actions, enable it through Wordpress customizer panel.\
Here some html code to display it correctly (add it in customizer textarea).

```html
<a class="button">[MAIN CTA]</a>
<button class="fixed-bar__toggle">Contact us</button>
<ul class="fixed-bar__actions">
<li class="fixed-bar__action action--phone">
<a href="tel:[PHONE NUMBER]">[PHONE NUMBER]</a>
</li>
<li class="fixed-bar__action action--email">
<a href="mailto:[EMAIL ADDRESS]">[EMAIL ADDRESS]</a></li>
</ul>
```

## <a name="blocks">Blocks</a> [#](#index)

### <a name="above-the-fold">Above the fold (ATF)</a>
Use a Wordpress multiple columns (2 columns) block with `wp-block-atf` class to
get a standard above the fold content.\
Fill the left column with the media content, either a `<picture>` or a 
[slider](#carousel), and the right one with text content.
* **Text content on the right**\
    Add `has-text-on-the-right` class.
* **Text content appearance on desktop**\
    Add either `is-style-left-margin` or `is-style-boxed` class to change
    text content appearance on desktop.\
P.S.: Don't forget to give text content column a background through either 
`has-light-background`, `has-dark-background`, `has-alpha-light-background` or 
`has-alpha-dark-background` class.

### <a name="closing-cta-block">Closing CTA block</a>
Very similar to Above the fold block, but usually used to close the page content.
All the ATF rules are applicable.

### <a name="separator">Separator</a>
The standard Wordpress separator comes with a center alignment.
Add `leftalign` class to get a left-aligned separator instead.

### <a name="full-width-block">Full Width block</a>
* **Solid or no background**\
    Use a Wordpress multiple columns (2 columns) block with `wp-block-container` class.
    Add `container__header` class to the set a max-width of 700px for header elements.
* **Background image**\
    Use a Wordpress Media and Text block with `has-image-background` class. 
    The media component will be set as the block background.

### <a name="media-and-text">Media and text</a>
Use a standard Wordpress Media and text block.
If the media is a gallery or a `<picture>`, use a columns block instead: add
`wp-block-column--media` class to that column containing the media element and 
`wp-block-column--content` to the other.

### <a name="buttons-group">Buttons Group</a>
Obtain two aligned buttons using a Multiple Columns (2 columns) block with
`buttons-group` class. Insert a button block in each column.

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
Suitable for offer presentation.\
The first column contains either an embedded
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

### <a name="warranty">Warranty</a>
Use a Media and Text block with `is-style-warranty` class. The image loaded in the media section will turn in
background, while the content part will be the warranty card content. Add here a
seal image, a title (either H2 or H3), optionally a subtitle and eventually the
warranty description.

## Gallery

### <a name="clients-logos-gallery">Clients logos gallery</a>
Suitable to display a simple gallery of vertically aligned logos.\
Use a Multiple Columns block with `is-style-clients` class.\
Fill the first column with the label text (h3) and the second column with 
a gallery block.

### <a name="carousel">Slider/carousel</a>
Use a standard Gallery block and switch to Flickity style to get access to all
the main Flickity options through the block controls interface.