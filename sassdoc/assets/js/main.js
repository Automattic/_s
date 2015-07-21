/* global document */

(function ($, global) {
  'use strict';

  // Constructor
  var App = function (conf) {
    this.conf = $.extend({
      // Search module
      search: new global.Search(),

      // Sidebar module
      sidebar: new global.Sidebar(),

      // Initialisation
      init: true
    }, conf || {});

    // Launch the module
    if (this.conf.init !== false) {
      this.initialize();
    }
  };

  // Initialisation method
  App.prototype.initialize = function () {
    this.codePreview();
  };

  // Toggle code preview collapsed/expanded modes
  App.prototype.codePreview = function () {
    var $item;
    var $code;
    var switchTo;

    $('.item__code--togglable').on('click', function () {
      $item = $(this);
      $code = $item.find('code');
      switchTo = $item.attr('data-current-state') === 'expanded' ? 'collapsed' : 'expanded';

      $item.attr('data-current-state', switchTo);
      $code.html($item.attr('data-' + switchTo));
      Prism.highlightElement($code[0]);
    });
  };

  global.App = App;
}(window.jQuery, window));

(function ($, global) {

  $(document).ready(function () {
    var app = new global.App();
  });

}(window.jQuery, window));