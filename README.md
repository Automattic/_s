This WordPress “theme” is for those of us who use WordPress only as a CMS, get our content as JSON, and build our pages elsewhere. Preferably with less PHP and zero databases. While starting from [_s][_s] essentially everything has been destroyed :boom:

&hellip; except for these things:

 - Post formats that match [Tumblr post types][tumblr-types]. Apply extra styling hooks for these. They should [really be overridden][post-formats] on a per site basis however with a [child theme][child-theme] to suit your particular requirements.
 
 - A ridiculous content width to override the [equally ridiculous global variable][content-width] that maddeningly overrides image size settings. Bitter? Indeed.
 
 - Varnish cache purging hackery for WP Engine hosted installs that use the JSON REST API plugin
 
 - The words of wisdom below :neckbeard:

### Recommended Plugins

We think these plugins make WordPress sing:

 - [Category Order and Taxonomy Terms Order][taxonomy-terms-order]
 - [Crop-Thumbnails][crop-thumbnails]
 - [Featured Image Column][featured-image-column]
 - [Polylang][polylang]
 - [Raw HTML Snippets][raw-html-snippets]
 - [Simple Image Sizes][simple-image-sizes]
 - [VaultPress][vaultpress]
 - [WP Smush.it][wp-smushit]
 
### JSON

To get your content out of WordPress as JSON, use the excellent [JSON REST API][json-rest-api] and [contribute][json-rest-api-github]. If those PHP response times are killing you, check out [Storyteller.io][storyteller]. Add our very own node.js-based [Solidus][solidus] web server to the mix and you’re set!

### Structured Data

Doing much more with WordPress than managing simple title/body structures? We recommend taking a look at these services instead to save yourself the hackery and PHP:

 - [Contentful][contentful]
 - [Prismic.io][prismic]
 - [Osmek][osmek]


[_s]: http://underscores.me
[tumblr-types]: http://www.tumblr.com/docs/en/custom_themes#introduction
[child-theme]: https://codex.wordpress.org/Child_Themes
[post-formats]: https://codex.wordpress.org/Post_Formats
[content-width]: http://wycks.wordpress.com/2013/02/14/why-the-content_width-wordpress-global-kinda-sucks

[taxonomy-terms-order]: https://wordpress.org/plugins/taxonomy-terms-order
[featured-image-column]: https://wordpress.org/plugins/featured-image-column
[crop-thumbnails]: https://wordpress.org/plugins/crop-thumbnails
[polylang]: https://wordpress.org/plugins/polylang
[raw-html-snippets]: https://wordpress.org/plugins/raw-html-snippets
[simple-image-sizes]: https://wordpress.org/plugins/simple-image-sizes
[vaultpress]: http://vaultpress.com
[wp-smushit]: http://wordpress.org/plugins/wp-smushit

[json-rest-api]: http://wordpress.org/plugins/json-rest-api
[json-rest-api-github]: https://github.com/wp-api/wp-api
[storyteller]: https://www.storyteller.io
[solidus]: https://github.com/solidusjs

[contentful]: https://www.contentful.com
[prismic]: https://prismic.io
[osmek]: http://osmek.com