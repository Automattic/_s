# Style Guide

## Site Main Layout
Import in critical.scss either in-grid or full layout style.
* [In-grid (boxed) layout](layout/_in-grid.scss)
* [Full layout](layout/_full.scss)

## Header
### Mobile Menu
Import in header/header.scss the center or left aligned style for desktop menu.
* [Mobile right aligned menu](header/_right-mobile-nav.scss):
    use as default.
* [Mobile left aligned menu](header/_left-mobile-nav.scss):
    use when both search toggle and cart icon exist in header.

### Desktop Menu
Import in header/header.scss the center or left aligned style for desktop menu.
* [Desktop left aligned menu](header/_left-aligned.scss)
* [Desktop center aligned menu](header/_center-aligned.scss)

## Background images
When setting images as background, use the mixin `background-image($fileName, $fileType)`,
where `$fileType` is the file extension ('jpg', 'png', etc).