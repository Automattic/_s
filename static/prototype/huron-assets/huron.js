/*eslint-disable*/


var store = require('./huron-store.js');
var assets = require.context('../partials', true, /\.html|\.json|\.hbs$/);
var modules = {};

assets.keys().forEach(function(key) {
  modules[key] = assets(key);
});

if (module.hot) {
  module.hot.accept(
    assets.id,
    () => {
      var newAssets = require.context(
        '../partials',
        true,
        /\.html|\.json|\.hbs$/
      );
      var newModules = newAssets.keys()
        .map((key) => {
          return [key, newAssets(key)];
        })
        .filter((newModule) => {
          return modules[newModule[0]] !== newModule[1];
        });

      updateStore(require('./huron-store.js'));

      newModules.forEach((module) => {
        modules[module[0]] = module[1];
        hotReplace(module[0], module[1], modules);
      });
    }
  );

  module.hot.accept(
    './huron-store.js',
    () => {
      updateStore(require('./huron-store.js'));
    }
  );
}


'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var md5 = require('js-md5');

/* eslint-disable no-underscore-dangle */
// Accept the huron.js module for Huron development
if (module.hot) {
  module.hot.accept();
}

/** Class for inserting HTML snippets at particular insertion points.
 * Uses require() to grab html partials, then inserts that html
 * into an element with attribute [huron-id] corresponding to the reference URI of the target KSS section,
 * and [huron-type] corresponding with the required KSS field
 */

var InsertNodes = function () {
  function InsertNodes(modules, store) {
    _classCallCheck(this, InsertNodes);

    /** webpack module list in which keys are relative require paths and values are the module contents */
    this._modules = modules;
    /** array of module keys */
    this._moduleIds = Object.keys(modules);
    /** reference to the huron config */
    this._config = null;
    /** KSS sections organized in various formats including by reference URI, by module key, and modules sorted by parent/child */
    this._sections = null;
    /** Key/value pairs of partner data and template files */
    this._templates = null;
    /** array of prototypes */
    this._prototypes = null;
    /** array of valid huron placeholder types */
    this._types = null;

    /** Cache for module metadata */
    this.meta = {};

    /** Reference to entire memory store */
    this.store = store;

    // Inits
    this.cycleModules();
    this.cycleStyleguide();
  }

  /**
   * Apply a modifier to a render function
   *
   * @param {string} modifier - target modifier
   * @param {object} meta - module metadata
   * @return {string} rendered - the modified HTML module
   */


  _createClass(InsertNodes, [{
    key: 'cycleModules',


    /**
     * Replace all template markers with the actual template markup.
     *
     * @param {string} context - The hash context for the module
     * @param {object} filter - Filter for modules. Fields explained in the filterModules() function docs
     */
    value: function cycleModules() {
      var _this = this;

      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var moduleList = {};
      var elementList = context;

      // We're replacing top-level elements
      if (!elementList) {
        this.regenCache();

        // Find all top-level huron placeholders
        elementList = [].concat(_toConsumableArray(document.querySelectorAll('[data-huron-id][data-huron-type]')));
      }

      moduleList = this.getModuleListFromTags(elementList);

      // Loop through modules array
      Object.keys(moduleList).forEach(function (key) {
        var module = _this._modules[key];
        var replaceElements = moduleList[key];

        _this.loadModule(key, module, replaceElements, true, filter);
      });
    }

    /**
     * Helper for reloading sections only
     */

  }, {
    key: 'cycleSections',
    value: function cycleSections() {
      this.cycleModules(false, {
        property: 'type',
        values: ['section'],
        include: true
      });
    }

    /**
     * Reload styleguide sections and menu helpers
     */

  }, {
    key: 'cycleStyleguide',
    value: function cycleStyleguide() {
      var sectionsQuery = document.querySelector('[huron-sections]');
      var menuQuery = document.querySelector('[huron-menu]');

      // Sections
      if (sectionsQuery) {
        sectionsQuery.innerHTML = '';
        this.outputSections(null, sectionsQuery);
        this.cycleSections();
      }

      // Menu
      if (menuQuery) {
        menuQuery.innerHTML = '';

        if (null === document.querySelector('.section-menu__expand')) {
          var menuTrigger = document.createElement('button');

          menuTrigger.classList.add('section-menu__expand');
          menuTrigger.innerHTML = 'Sections Menu';
          document.body.insertBefore(menuQuery.appendChild(menuTrigger), document.body.childNodes[0]);

          // Add menu trigger handler
          menuTrigger.addEventListener('click', function () {
            document.body.classList.toggle('section-menu-open');
          });
        }

        // Create menu
        this.outputMenu(null, menuQuery);
      }
    }

    /**
     * Get module metadata from a module require path
     *
     * @param  {string} key - Module require path
     * @return {object} containing module id, module type, key and the module contents
     */

  }, {
    key: 'getMetaFromPath',
    value: function getMetaFromPath(key, module) {
      var _this2 = this;

      var sections = this._sections.sectionsByPath;
      var templateTypes = this._types.filter(function (type) {
        return 'prototype' !== type;
      });
      var id = false;
      var type = false;

      /* eslint-disable space-unary-ops */
      if (-1 !== key.indexOf('./prototypes')) {
        /* eslint-enable space-unary-ops */
        var prototype = Object.keys(this._prototypes).filter(function (name) {
          return _this2._prototypes[name] === key;
        });

        if (prototype.length) {
          id = prototype[0];
          type = 'prototype';
        }
      } else if (key === this._sectionTemplatePath) {
        id = 'sections-template';
        type = 'sections-template';
      } else {
        var testTypes = [];
        var testSections = Object.keys(sections).filter(function (section) {
          var tempTypes = templateTypes.filter(function (currentType) {
            return sections[section][currentType + 'Path'] === key;
          });

          if (tempTypes.length) {
            testTypes = tempTypes;
            return true;
          }

          return false;
        });

        if (testSections && testSections.length && testTypes && testTypes.length) {
          id = sections[testSections[0]].referenceURI;
          type = testTypes[0];
        }
      }

      if (id && type) {
        var hashKey = 'data' === type ? this._templates[key] : key;
        var renderData = this.getModuleRender(type, key, module);
        var hash = InsertNodes.generateModuleHash(hashKey);

        if (renderData) {
          return Object.assign({ id: id, type: type, key: key, hash: hash, module: module }, renderData);
        }
      }

      console.warn( // eslint-disable-line no-console
      'Module \'' + key + '\' does not exist on the page\n      or is no longer in use');
      return false;
    }

    /**
     * Check if a tag is a huron placeholder and, if so,
     * return its associated module key
     *
     * @param {object} tag - tag to check
     * @return {bool} associated module key
     */

  }, {
    key: 'getModuleKeyFromTag',
    value: function getModuleKeyFromTag(tag) {
      // Safari/webkit has some trouble parsing dataset in certain cases.
      // This is a fallback method of accessing the same data.
      var type = InsertNodes.getDataAttribute(tag, 'huron-type');
      var id = InsertNodes.getDataAttribute(tag, 'huron-id');
      var section = this._sections.sectionsByURI[id];

      if (id && type) {
        if (section) {
          return section[type + 'Path'];
        } else if ('prototype' === type) {
          return this._prototypes[id];
        }
      }

      return false;
    }

    /**
     * Check if an array of elements contains a Huron placeholder
     *
     * @param {array} tags - array of DOM nodes
     * @param {bool} recurse - should we recurse this function with a new array
     * @return {object} moduleList - Huron placeholder DOM node
     */

  }, {
    key: 'getModuleListFromTags',
    value: function getModuleListFromTags(elements) {
      var _this3 = this;

      var recurse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var moduleList = {};
      var newList = {};

      if (elements && elements.length) {
        elements.forEach(function (element) {
          var moduleKey = _this3.getModuleKeyFromTag(element);

          if (moduleKey) {
            if (!moduleList[moduleKey]) {
              moduleList[moduleKey] = [];
            }
            moduleList[moduleKey].push(element);
          } else if (recurse) {
            newList = _this3.getModuleListFromTags([].concat(_toConsumableArray(element.querySelectorAll('[data-huron-id][data-huron-type]'))), false);

            Object.keys(newList).forEach(function (key) {
              moduleList[key] = moduleList[key] ? moduleList[key].concat(newList[key]) : newList[key];
            });
          }
        });
      }

      return moduleList;
    }

    /**
     * Transform every module into a predictable object
     *
     * @param {object} type - Module metadata
     * @param {mixed} module - Module contents
     * @return {object} containing render function, render data and module id
     */

  }, {
    key: 'getModuleRender',
    value: function getModuleRender(type, key, module) {
      var render = false;
      var data = false;

      if ('template' === type && 'function' === typeof module) {
        // It's a render function for a template
        render = module;
        data = this._modules[this._templates[key]];
      } else if ('sections-template' === type && 'function' === typeof module) {
        // It's a kss section template
        render = module;
      } else if ('section' === type && 'object' === (typeof module === 'undefined' ? 'undefined' : _typeof(module))) {
        // It's section data
        render = this._modules[this._sectionTemplatePath];
        data = module;
      } else if (('template' === type || 'description' === type || 'prototype' === type) && 'string' === typeof module) {
        // it's straight HTML
        render = function render() {
          return module;
        };
      } else if ('data' === type && 'object' === (typeof module === 'undefined' ? 'undefined' : _typeof(module))) {
        // It's a data file (.json)
        render = this._modules[this._templates[key]];
        data = module;
      }

      // Only need render, as data will be left empty for static HTML
      if (render) {
        return { render: render, data: data };
      }

      return false;
    }

    /**
     * Replace all sections. For hot reloading use when the section template has changed.
     *
     * @param {object} replaceElements - The context (e.g. document) that you will query for the template ID to replace
     * @param {string} key - Module require path
     * @param {mixed} module - Module contents
     * @param {bool} cached - Whether or not to use cached values for module replacement
     * @param {object} filter - Filter for modules. Fields explained in the filterModules() function docs
     */

  }, {
    key: 'loadModule',
    value: function loadModule(key, module, replaceElements) {
      var cached = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var shouldLoad = true;
      var moduleMeta = false;

      // Check if we should load from internal module metadata cache
      if (cached) {
        moduleMeta = this.meta[key];
      } else {
        moduleMeta = this.meta[key] = this.getMetaFromPath(key, module);
      }

      if (moduleMeta) {
        if (filter) {
          shouldLoad = InsertNodes.filterModules(filter, moduleMeta);
        }

        if (shouldLoad) {
          this.replaceTemplate(moduleMeta, replaceElements);
        }
      }
    }

    /*
     * Helper function for inserting styleguide sections.
     *
     * Recurses over sorted styleguide sections and inserts a <ul> to be used as a menu for each section
     */

  }, {
    key: 'outputMenu',
    value: function outputMenu(parent, el) {
      var _this4 = this;

      var sections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._sections.sorted;

      var templateId = null;
      var newEl = el;

      Object.keys(sections).forEach(function (section) {
        var hasSubmenu = Object.keys(sections[section]).length;
        var menuTarget = void 0;
        var nextMenu = void 0;

        if (parent) {
          templateId = parent + '-' + section;
        } else {
          templateId = section;
        }

        if (newEl) {
          var title = _this4._sections.sectionsByURI[templateId] ? _this4._sections.sectionsByURI[templateId].header : templateId;
          var sectionMenu = document.createElement('ul');
          var menuItem = document.createElement('li');
          var link = '<a href="#styleguide-section-' + templateId + '">' + title + '</a>';

          sectionMenu.classList.add('section-menu');
          menuItem.classList.add('section-menu__item');
          menuItem.innerHTML = link;

          // Check if this is a UL and, if not, create one
          if ('UL' !== newEl.tagName) {
            menuTarget = sectionMenu.cloneNode();
            newEl.appendChild(menuTarget);
            newEl = menuTarget;
          }

          // Has subsections
          if (hasSubmenu) {
            nextMenu = sectionMenu.cloneNode();
            nextMenu.classList.add('section-menu--submenu');
            menuItem.classList.add('section-menu__item--has-submenu');
            menuItem.appendChild(nextMenu);
          }

          newEl.appendChild(menuItem);

          if (hasSubmenu) {
            _this4.outputMenu(templateId, nextMenu, sections[section]);
          }
        }
      });
    }

    /**
     * Helper function for inserting styleguide sections.
     *
     * Recurses over sorted styleguide sections and inserts a <section> tag with [huron-id] equal to the section template name.
     */

  }, {
    key: 'outputSections',
    value: function outputSections(parent, el) {
      var _this5 = this;

      var sections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._sections.sorted;

      var templateId = null;
      var placeholder = null;

      Object.keys(sections).forEach(function (section) {
        var istopLevel = false;
        var topLevelWrapper = null;
        var topLevelSection = null;
        var insertionEl = el;

        // Generate section ID and check if it is top-level
        if (parent) {
          templateId = parent + '-' + section;
        } else {
          templateId = section;
          istopLevel = true;
        }

        if (el) {
          // Generate huron placeholder for this section
          placeholder = document.createElement('div');
          placeholder.dataset.huronId = templateId;
          placeholder.dataset.huronType = 'section';

          if (istopLevel) {
            // Generate wrapper to contain top-level section and all subsections underneath it
            topLevelWrapper = document.createElement('div');
            topLevelWrapper.classList.add('section--top-level__wrapper');

            // Generate wrapper for top-level section
            topLevelSection = document.createElement('div');
            topLevelSection.classList.add('section', 'section--top-level');

            // Append wrappers to huron-sections element
            topLevelSection.appendChild(placeholder);
            topLevelWrapper.appendChild(topLevelSection);
            el.appendChild(topLevelWrapper);
            insertionEl = topLevelWrapper;
          } else {
            // If this is not top-level, append placeholder
            el.appendChild(placeholder);
          }
        }

        // Recursively call this function to insert other sections
        if (Object.keys(sections[section]).length && placeholder) {
          _this5.outputSections(templateId, insertionEl, sections[section]);
        }
      });
    }

    /**
     * Regenerate module meta cache
     */

  }, {
    key: 'regenCache',
    value: function regenCache() {
      var _this6 = this;

      Object.keys(this._modules).forEach(function (moduleKey) {
        _this6.meta[moduleKey] = _this6.getMetaFromPath(moduleKey, _this6._modules[moduleKey]);
      });
    }

    /**
     * Recursively remove old tags
     *
     * @param {string} hash - hash of module for which we need to remove old tags
     * @param {object} tag - tag to start our search with
     *                       (usually the tag immediately preceding the current placeholder)
     */

  }, {
    key: 'removeOldTags',
    value: function removeOldTags(hash, tag) {
      if (tag) {
        var parentHash = InsertNodes.getDataAttribute(tag, 'parent-hash');
        var selfHash = InsertNodes.getDataAttribute(tag, 'self-hash');

        if (parentHash === hash && selfHash !== hash) {
          // This is a child of the current module,
          // so remove it and its children (if applicable)
          var childrenHash = selfHash;
          var nextTag = tag.previousSibling;

          if (childrenHash) {
            this.removeOldTags(childrenHash, nextTag);
            // Reset nextTag if we removed a child
            nextTag = tag.previousSibling;
          }

          tag.parentNode.removeChild(tag);
          this.removeOldTags(hash, nextTag);
        }
      }
    }

    /**
     * Replace a single template marker with template content.
     *
     * @param {object} replaceElements - Array of elements to check for Huron placeholders
     * @param {object} meta - Module metadata
     */

  }, {
    key: 'replaceTemplate',
    value: function replaceTemplate(meta, replaceElements) {
      var _this7 = this;

      var type = this.validateType(meta.type);
      var tags = [];
      var replace = replaceElements;
      var hasStyleguideHelpers = false;

      if (!replace) {
        replace = document.querySelectorAll('[data-huron-id][data-huron-type]');
      }

      if (type) {
        replace.forEach(function (tag) {
          var tagType = InsertNodes.getDataAttribute(tag, 'huron-type');
          var tagId = InsertNodes.getDataAttribute(tag, 'huron-id');

          if (tagId === meta.id && tagType === type) {
            tags.push(tag);
          }
        });

        if (tags && tags.length && meta.render) {
          tags.forEach(function (currentTag) {
            var modifiedPlaceholder = currentTag;
            var modifier = InsertNodes.getDataAttribute(modifiedPlaceholder, 'huron-modifier');
            var parent = modifiedPlaceholder.parentNode;
            var rendered = InsertNodes.applyModifier(modifier, meta);
            var renderedTemplate = InsertNodes.convertToElement(rendered).querySelector('template');
            var renderedContents = null;

            // Remove existing module tags
            _this7.removeOldTags(meta.hash, modifiedPlaceholder.previousSibling);

            // Get the contents of the rendered template
            renderedContents = [].concat(_toConsumableArray(renderedTemplate.content.children));

            // Insert each tag of the template contents before placeholder
            renderedContents.forEach(function (element) {
              var newEl = element;

              if (1 === newEl.nodeType) {
                newEl.dataset.parentHash = meta.hash;
                hasStyleguideHelpers = !hasStyleguideHelpers ? InsertNodes.isSectionHelper(newEl, meta) : hasStyleguideHelpers;

                parent.insertBefore(newEl, modifiedPlaceholder);
              }
            });

            // Add module hash to this placeholder
            modifiedPlaceholder.dataset.selfHash = meta.hash;

            // Hide the placeholder
            modifiedPlaceholder.style.display = 'none';

            // Recursively load modules, excluding the current one
            _this7.cycleModules(renderedContents, {
              property: 'key',
              values: [meta.key, _this7._sectionTemplatePath],
              include: false
            });

            if (hasStyleguideHelpers) {
              _this7.cycleStyleguide();
            }
          });
        }
      } else {
        console.warn( // eslint-disable-line no-console
        'Could not render module\n        section: ' + meta.id + '\n        type: ' + meta.type);
      }
    }

    /**
     * Verify specified element is using an acceptable huron type
     *
     * @param  {string} type - type of partial (template, data, description, section or prototype )
     * @return {string} type - huron type or 'template' if invalid
     */

  }, {
    key: 'validateType',
    value: function validateType(type) {
      if ('data' === type) {
        return 'template';
      }

      if (!this._types.includes(type)) {
        return false;
      }

      return type;
    }

    /*
     * Set new modules object
     */

  }, {
    key: 'modules',
    set: function set(modules) {
      this._modules = modules;
      this._moduleIds = Object.keys(modules);
    }

    /*
     * Set store
     */

  }, {
    key: 'store',
    set: function set(store) {
      this._store = store;
      this._config = store.config;
      this._sections = store.sections;
      this._templates = store.templates;
      this._prototypes = store.prototypes;
      this._types = store.types;
      this._sectionTemplatePath = store.sectionTemplatePath;
    }
  }], [{
    key: 'applyModifier',
    value: function applyModifier(modifier, meta) {
      var rendered = false;
      var data = meta.data;

      if (data) {
        // If we have a modifier, use it, otherwise use the entire data set
        if (modifier && meta.data[modifier]) {
          data = Object.assign({}, meta.data[modifier], { modifier: modifier });
        }

        rendered = meta.render(data);
      } else {
        rendered = meta.render();
      }

      return rendered;
    }

    /**
     * Get markup from any type of module (html, json or template)
     *
     * @param {string} content - String corresponding to markup
     * @return {object} el.firstElementChild - HTML module
     */

  }, {
    key: 'convertToElement',
    value: function convertToElement(content) {
      var el = document.createElement('div');

      el.innerHTML = content;
      return el.firstElementChild;
    }

    /**
     * Filter module object by module key or module type
     *
     * @param {object} filter - Filter for modules. Options:
     * @param {string} filter.property - Which property to filter ('key' or 'type')
     * @param {array} filter.values - Values for property
     * @param {bool} filter.include - Whether the values should be included or excluded (true = include, false = exclude)
     * @param {object} moduleMeta - Filter for modules. Fields explained in the filterModules() function docs
     * @return {bool} match - determine if modules need to be filtered
     */

  }, {
    key: 'filterModules',
    value: function filterModules(filter, moduleMeta) {
      var match = true;

      // Check if we should filter out any modules
      if ('object' === (typeof filter === 'undefined' ? 'undefined' : _typeof(filter)) && {}.hasOwnProperty.call(filter, 'property') && {}.hasOwnProperty.call(filter, 'values') && {}.hasOwnProperty.call(filter, 'include')) {
        match = filter.values.filter(function (value) {
          return moduleMeta[filter.property] === value;
        });
        return Boolean(match.length) === filter.include;
      }

      console.log(' // eslint-disable-line no-console\n      filter ' + filter + ' is not in a valid format.\n      module filters must include \'property\', \'values\', and \'include\' properties\n    ');

      return match;
    }

    /**
     * Generate a hash string from a module key
     *
     * @param {string} key - module key (require path) to convert into a hash
     * @return {string} key - generated MD5 Hash
     */

  }, {
    key: 'generateModuleHash',
    value: function generateModuleHash(key) {
      return md5(key);
    }

    /**
     * Retrieve a data attribute from a tag using one of two methods
     *
     * @param {HTMLElement} tag - DOM node on which to check for a data attribute
     * @param {string} attr - attribute to check for
     * @returns {string} data - contents of data attribute
     */

  }, {
    key: 'getDataAttribute',
    value: function getDataAttribute(tag, attr) {
      var data = false;

      // Check if element has dataset and, if so, use it
      if (tag.dataset) {
        data = tag.dataset[attr];
      }

      // Fallback to getAttribute for ugly old Safari
      if (!data && tag.getAttribute) {
        data = tag.getAttribute('data-' + attr);
      }

      return data;
    }

    /**
     * Check if this tag is a styleguide helper
     *
     * @param {object} tag - tag to check
     * @param {object} meta - module metadata
     * @return {bool}
     */

  }, {
    key: 'isSectionHelper',
    value: function isSectionHelper(tag, meta) {
      if ('prototype' === meta.type) {
        return tag.hasAttribute('huron-sections') || tag.hasAttribute('huron-menu');
      }

      return false;
    }
  }]);

  return InsertNodes;
}();
/* eslint-enable no-underscore-dangle */

// Create a new instance of the InsertNodes class
/*eslint-disable*/
// Create object for modifiying the templates on the page and
// initial first templates.


var insert = new InsertNodes(modules, store);
/*eslint-enable*/
//# sourceMappingURL=huron.js.map


function hotReplace(key, module, modules) {
  insert.modules = modules;
  if (key === store.sectionTemplatePath) {
    insert.cycleSections();
  } else {
    insert.inserted = [];
    insert.loadModule(key, module, false);
  }
};

function updateStore(newStore) {
  insert.store = newStore;
}


/*eslint-enable*/
