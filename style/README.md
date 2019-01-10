# Style Guide

## Site Main Layout
Import in critical.scss either in-grid or full layout style.
* [In-grid (boxed) layout](layout/_in-grid.scss)
* [Full layout](layout/_full.scss)

## Header
### Mobile Menu
Import either center or left aligned style in header/header.scss.
* [Mobile right aligned menu](header/_right-mobile-nav.scss):
    use as default.
* [Mobile left aligned menu](header/_left-mobile-nav.scss):
    use when both search toggle and cart icon coexist in header.

### Desktop Menu
Import either center or left aligned style in header/header.scss.
* [Desktop left aligned menu](header/_left-aligned.scss)
* [Desktop center aligned menu](header/_center-aligned.scss)

### Top Header
If top header is present, import the style in header/header.scss.
* [Top header style](header/_top-header.scss)

### Sticky Header
If sticky header animation is used, import the stuck style in header/header.scss.
* [Stuck header style](header/_header-stuck.scss)

## Background images
When setting images as background, use the mixin `background-image($fileName, $fileType)`,
where `$fileType` is the file extension ('jpg', 'png', etc).