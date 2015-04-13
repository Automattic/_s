(function ($, global) {

  var Sidebar = function (conf) {
    this.conf = $.extend({

      // Collapsed class
      collapsedClass: 'is-collapsed',

      // Storage key
      storageKey: '_sassdoc_sidebar_index',

      // Index attribute
      indexAttribute: 'data-slug',

      // Toggle button
      toggleBtn: '.js-btn-toggle',

      // Automatic initialization
      init: true
    }, conf || {});

    if (this.conf.init === true) {
      this.initialize();
    }
  };

  /**
   * Initialize module
   */
  Sidebar.prototype.initialize = function () {
    this.conf.nodes = $('[' + this.conf.indexAttribute + ']');

    this.load();
    this.updateDOM();
    this.bind();
    this.loadToggle();
  };


  /**
   * Load sidebar toggle
   */
  Sidebar.prototype.loadToggle = function () {
    $('<span />', {
      'class': 'layout-toggle',
      'html': '&times;',
      'data-alt': '&#8594;'
    }).appendTo( $('.header') );

    $('.layout-toggle').on('click', function () {
      var $this = $(this);
      var alt;

      $('body').toggleClass('sidebar-closed');

      alt = $this.html();
      $this.html($this.data('alt'));
      $this.data('alt', alt);
    });
  };

  /**
   * Load data from storage or create fresh index
   */
  Sidebar.prototype.load = function () {
    var index = 'localStorage' in global ?
      global.localStorage.getItem(this.conf.storageKey) :
      null;

    this.index = index ? JSON.parse(index) : this.buildIndex();
  };

  /**
   * Build a fresh index
   */
  Sidebar.prototype.buildIndex = function () {
    var index = {};
    var $item;

    this.conf.nodes.each($.proxy(function (index, item) {
      $item = $(item);

      index[$item.attr(this.conf.indexAttribute)] = !$item.hasClass(this.conf.collapsedClass);
    }, this));

    return index;
  };

  /**
   * Update DOM based on index
   */
  Sidebar.prototype.updateDOM = function () {
    var item;

    for (item in this.index) {
      if (this.index[item] === false) {
        $('[' + this.conf.indexAttribute + '="' + item + '"]').addClass(this.conf.collapsedClass);
      }
    }
  };

  /**
   * Save index in storage
   */
  Sidebar.prototype.save = function () {
    if (!('localStorage' in global)) {
      return;
    }

    global.localStorage.setItem(this.conf.storageKey, JSON.stringify(this.index));
  };

  /**
   * Bind UI events
   */
  Sidebar.prototype.bind = function () {
    var $item, slug, fn, text;
    var collapsed = false;

    // Save index in localStorage
    global.onbeforeunload = $.proxy(function () {
      this.save();
    }, this);

    // Toggle all
    $(this.conf.toggleBtn).on('click', $.proxy(function (event) {
      $node = $(event.target);

      text = $node.attr('data-alt');
      $node.attr('data-alt', $node.text());
      $node.text(text);

      fn = collapsed === true ? 'removeClass' : 'addClass';

      this.conf.nodes.each($.proxy(function (index, item) {
        $item = $(item);
        slug = $item.attr(this.conf.indexAttribute);

        this.index[slug] = collapsed;

        $('[' + this.conf.indexAttribute + '="' + slug + '"]')[fn](this.conf.collapsedClass);
      }, this));

      collapsed = !collapsed;
      this.save();
    }, this));

    // Toggle item
    this.conf.nodes.on('click', $.proxy(function (event) {
      $item = $(event.target);
      slug = $item.attr(this.conf.indexAttribute);

      // Update index
      this.index[slug] = !this.index[slug];

      // Update DOM
      $item.toggleClass(this.conf.collapsedClass);
    }, this));
  };

  global.Sidebar = Sidebar;

}(window.jQuery, window));
