/**
 * app.js
 *
 * Custom scripts for our WordPress application
 */
(function($){
  'use strict';

  /**
   * @module Main app module
   */
   var _s = (function(document){

    function init(){
      // Initialize Foundation
      $(document).foundation();
    }

    // ...happy coding!

    return {
      init: init
    };
  })(document);

  /**
   * Initialize _s module
   * on document.ready
   */
  $(function(){
    _s.init();
  });

})(jQuery);
