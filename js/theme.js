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

  /* Open closes menu sub-items */
  $('.menu-item-has-children > a').on('click', function() {
    $(this).parent('li').toggleClass('expanded');
  });
  
})(jQuery);
