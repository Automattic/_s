(function($){

  $('.search-toggle').click(function(e){
    $('.search-form').toggleClass('visible');
    e.preventDefault();
  });

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

  $('.svbk-show-content').on('click', function(e){
      e.preventDefault();

      $( $(this).attr('href') ).addClass('open');
  });

  $('.svbk-hide-content').on('click', function(e){
      e.preventDefault();

      $( $(this).attr('href') ).removeClass('open');
  });

  $('.svbk-lightbox-open').on('click', function(e){
      e.stopPropagation();
      $( document.body ).addClass('lightbox-open');
  });

  $('.svbk-lightbox-close').on('click', function(e){
      e.stopPropagation();
      $( document.body ).removeClass('lightbox-open');
  });

  // $('.ajax-archive')
  //   .ajaxArchive()
  //   .on('ajaxarchiveempty', function(event, data){
  //     data.container.masonry( 'remove', data.items ).masonry('layout');
  //   })
  //   .on('ajaxarchiveappend', function(event, data){
  //     data.items.hide();
  //   })
  //   .on('ajaxarchiveappended', function(event, data){
  //     data.container.imagesLoaded( function() {
  //       data.items.show();
  //       data.container.masonry( 'appended', data.items );
  //     });
  //   });


})(jQuery);
