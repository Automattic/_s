(function($){

  /* Toggle the search visibility */
  $('.search-toggle').click(function(e){
    $('.search-form').toggleClass('visible');
    e.preventDefault();
  });

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

  /* Open menu sub-items */
  $('.menu-item-has-children > a').on('click', function() {
    $(this).parent('li').toggleClass('expanded');
  });
  
  /* Archive year toggle */
  $('.archive-year .month-name').on('click', function() {
    $(this).next('ul').slideToggle()
    .parent('.archive-year').toggleClass('expanded');
  });
  
  /* Account toggle menu */
  $('.secondary-navigation__toggle').on('click', function() {
    $('.secondary-navigation').slideToggle();
  });
  
  /* Highlight animation */
  var waypoints = $('.highlight').waypoint({
    handler: function() {
      var highlightTime = $(this.element).text().length / 80;
      $(this.element)
      .addClass('animated')
      .css('transition-duration', highlightTime.toFixed(2) + 's');
    },
    offset: '70%',
    triggerOnce: true
  });
  
})(jQuery);
