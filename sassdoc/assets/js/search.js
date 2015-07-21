(function ($, global) {

  var Search = function (conf) {
    this.conf = $.extend({
      // Search DOM
      search: {
        items: '.sassdoc__item',
        input: '#js-search-input',
        form: '#js-search',
        suggestionsWrapper: '#js-search-suggestions'
      },

      // Fuse options
      fuse: {
        keys: ['name'],
        threshold: 0.3
      },

      init: true
    }, conf || {});

    if (this.conf.init === true) {
      this.initialize();
    }
  };

  Search.prototype.initialize = function () {
    // Fuse engine instanciation
    this.index = new Fuse($.map($(this.conf.search.items), function (item) {
      var $item = $(item);

      return {
        name: $item.data('name'),
        type: $item.data('type'),
        node: $item
      };
    }), this.conf.fuse);

    this.initializeSearch();
  };

  // Fill DOM with search suggestions
  Search.prototype.fillSuggestions = function (items) {
    var searchSuggestions = $(this.conf.search.suggestionsWrapper);
    searchSuggestions.html('');

    var suggestions = $.map(items.slice(0, 10), function (item) {
      var $li = $('<li />', {
        'data-type': item.type,
        'data-name': item.name,
        'html': '<a href="#' + item.type + '-' + item.name + '"><code>' + item.type.slice(0, 3) + '</code> ' + item.name + '</a>'
      });

      searchSuggestions.append($li);
      return $li;
    });

    return suggestions;
  };

  // Perform a search on a given term
  Search.prototype.search = function (term) {
    return this.fillSuggestions(this.index.search(term));
  };

  // Search logic
  Search.prototype.initializeSearch = function () {
    var searchForm = $(this.conf.search.form);
    var searchInput = $(this.conf.search.input);
    var searchSuggestions = $(this.conf.search.suggestionsWrapper);

    var currentSelection = -1;
    var suggestions = [];
    var selected;

    var self = this;

    // Clicking on a suggestion
    searchSuggestions.on('click', function (e) {
      var target = $(event.target);

      if (target.nodeName === 'A') {
        searchInput.val(target.parent().data('name'));
        suggestions = self.fillSuggestions([]);
      }
    });

    // Filling the form
    searchForm.on('keyup', function (e) {
      e.preventDefault();

      // Enter
      if (e.keyCode === 13) {
        if (selected) {
          suggestions = self.fillSuggestions([]);
          searchInput.val(selected.data('name'));
          window.location = selected.children().first().attr('href');
        }

        e.stopPropagation();
      }

      // KeyDown
      if (e.keyCode === 40) {
        currentSelection = (currentSelection + 1) % suggestions.length;
      }

      // KeyUp
      if (e.keyCode === 38) {
        currentSelection = currentSelection - 1;

        if (currentSelection < 0) {
          currentSelection =  suggestions.length - 1;
        }
      }

      if (suggestions[currentSelection]) {
        if (selected) {
          selected.removeClass('selected');
        }

        selected = suggestions[currentSelection];
        selected.addClass('selected');
      }

    });

    searchInput.on('keyup', function (e) {
      if (e.keyCode !== 40 && e.keyCode !== 38) {
        currentSelection = -1;
        suggestions = self.search($(this).val());
      }

      else {
        e.preventDefault();
      }
    }).on('search', function () {
      suggestions = self.search($(this).val());
    });
  };

  global.Search = Search;

}(window.jQuery, window));