[![Bourbon](http://images.thoughtbot.com/bourbon/bourbon-logo.svg)](http://bourbon.io)

[![Gem Version](http://img.shields.io/gem/v/bourbon.svg?style=flat)](https://rubygems.org/gems/bourbon)
[![Code Climate](http://img.shields.io/codeclimate/github/thoughtbot/bourbon.svg?style=flat)](https://codeclimate.com/github/thoughtbot/bourbon)
[![Gitter chat](https://img.shields.io/badge/gitter-thoughtbot/bourbon-ae3dd2.svg?style=flat)](https://gitter.im/thoughtbot/bourbon)
[![Stack Overflow](http://img.shields.io/badge/stack%20overflow-bourbon-ae3dd2.svg?style=flat)](http://stackoverflow.com/questions/tagged/bourbon)

## A simple and lightweight mixin library for Sass.

Bourbon is a library of pure Sass mixins that are designed to be simple and easy to use. No configuration required. The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible.

The mixins contain vendor specific prefixes for all CSS3 properties for support amongst modern browsers. The prefixes also ensure graceful degradation for older browsers that support only CSS3 prefixed properties. Bourbon uses SCSS syntax.

- **[Documentation](http://bourbon.io/docs)**
- **[Changelog](https://github.com/thoughtbot/bourbon/releases)**
- **[Issues & Bugs](https://github.com/thoughtbot/bourbon/issues)**

Follow the [@bourbonsass](https://twitter.com/bourbonsass) Twitter account
for updates.

## Requirements

- [Sass](https://github.com/sass/sass) 3.4+ or [LibSass](https://github.com/sass/libsass) 3.1+

## Installation

For command line help, visit our wiki page on Bourbon’s [command line interface](https://github.com/thoughtbot/bourbon/wiki/Command-Line-Interface).

1. Install the Bourbon gem using the [RubyGems](https://rubygems.org) package manager:

  ```bash
  gem install bourbon
  ```

  Alternatively, you can install Bourbon with [Bower](http://bower.io).

2. Install the Bourbon library into the current directory:

  ```bash
  bourbon install
  ```

  **Pro Tip:** You can target installation into a specific directory using the `path` flag:

  ```bash
  bourbon install --path my/custom/path/
  ```

3. Import Bourbon at the beginning of your stylesheet:

  ```scss
  @import "bourbon/bourbon";
  ```

  It’s not recommended to add or modify the Bourbon files so that you can update them easily.

## Installation for Ruby on Rails 3.1+

1. Add Bourbon to your Gemfile:

  ```ruby
  gem 'bourbon'
  ```

2. Then run:

  ```bash
  bundle install
  ```

3. Restart your server and rename `application.css` to `application.scss`:

  ```bash
  mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
  ```

4. Delete _all_ Sprockets directives in `application.scss` (`require`, `require_tree` and `require_self`) and use Sass’s native `@import` instead.

5. Import Bourbon at the beginning of `application.scss`. All additional stylesheets should be imported below Bourbon:

  ```scss
  @import "bourbon";
  @import "home";
  @import "users";
  ```

  [Help! I’m getting an undefined mixin error.](https://github.com/thoughtbot/bourbon/wiki/Rails-Help-%5C-Undefined-mixin)

## Installing older versions of Bourbon

1. Uninstall any Bourbon gem versions you already have:

  ```bash
  gem uninstall bourbon
  ```

2. Reinstall the Bourbon gem, using the `-v` flag to specify the version you need:

  ```bash
  gem install bourbon -v 3.2.4
  ```

3. Follow the [instructions above](#installation) to install Bourbon into your project.

## Browser support

- Chrome 26+
- Firefox 29+
- Internet Explorer 9+
- Opera 15+
- Safari 6.1+

## The Bourbon family

- [Bourbon](https://github.com/thoughtbot/bourbon): A simple and lightweight mixin library for Sass
- [Neat](https://github.com/thoughtbot/neat): A lightweight semantic grid framework for Sass and Bourbon
- [Bitters](https://github.com/thoughtbot/bitters): Scaffold styles, variables and structure for Bourbon projects
- [Refills](https://github.com/thoughtbot/refills): Prepackaged patterns and components built with Bourbon, Neat and Bitters

Also check out [Proteus](https://github.com/thoughtbot/proteus), a collection of useful starter kits to help you prototype faster. Each kit comes with Bourbon, Neat and Bitters out-of-the-box.

## License

Copyright © 2011–2015 [thoughtbot, inc](http://thoughtbot.com).
Bourbon is free software,
and may be redistributed under the terms specified in the [license](LICENSE.md).

## About thoughtbot

[![thoughtbot](http://thoughtbot.github.io/images/signature.svg)][hire]

Bourbon is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github
