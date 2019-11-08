(function($){

  /* Scroll smoothly betweeen anchors */
  var smoothScroll = function(){
      $(document.body).on('click', 'a[href*="#"]:not([href="#"])', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 500);
                  return false;
              }
            }
      });
  };

  $(document).ready( smoothScroll );
  $(document.body).on( 'post-load', smoothScroll );
 
  $(document).ready(function() {
 
    var animatedElements = [
      '.is-animated .wp-block-media-text__media',
      '.is-animated .wp-block-media-text__content',
      '.is-animated .wp-block-column',
      '.is-animated.wp-block-svbk-grid > div',
      '.is-animated .wp-block-svbk-iter__step',
      '.is-animated.wp-block-svbk-warranty'
    ];
 
    /* Animations */
    $( animatedElements.join(',') ).waypoint({
        handler: function() {
          $(this.element).addClass('animated');
        },
        offset: '90%',
        triggerOnce: true
    });
    
    /* Highlight animation */
    $('.highlight').waypoint({
        handler: function() {
          var highlightTime = $(this.element).text().length / 70;
          $(this.element)
            .addClass('animated')
            .css('transition-duration', highlightTime.toFixed(2) + 's');
        },
        offset: '70%',
        triggerOnce: true
    });
    
    /* Fixed bar showing animation*/
    $('#page').waypoint({
      handler: function(direction) {
        $('.footer-fixed-bar').toggleClass('visible');
      },
      offset: "-500"
    });
    
  });


})(jQuery);