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
  
  /* FAQ toggle */
  $('.schema-faq-question').on('click', function() {
    $(this).toggleClass('open');
    $(this).next('.schema-faq-answer').slideToggle();
  });
  
  /* Animations */
  var waypoints = $('.animate').waypoint({
    handler: function() {
      $(this.element).addClass('animated');
    },
    offset: '70%',
    triggerOnce: true
  });
  
  /* Highlight animation */
  var waypoints = $('.highlight').waypoint({
    handler: function() {
      var highlightTime = $(this.element).text().length / 70;
      $(this.element)
      .addClass('animated')
      .css('transition-duration', highlightTime.toFixed(2) + 's');
    },
    offset: '70%',
    triggerOnce: true
  });


	$('.loadmore').on('click', '.loadmore__button', function(event){
		event.preventDefault();
		var loadmore = $(this);
		var container = loadmore.closest('.loadmore');
		  container.addClass('loading');

		$.get( loadmore.attr('href') + ' #main', function( response ){
			var loader = $( response );
			
			  container
				  .append(loader.find('.hentry'))
				  .removeClass('loading');
			
			  var nextPage = loader.find('.navigation .nav-previous a');
			
			  if( nextPage.length ){
				  loadmore.attr('href', nextPage.attr('href') );
				  container
					  .append(loadmore)
			  } 
			
			$(document.body).trigger( 'post-load' );
		} );
		
		loadmore.detach();
	});		
		
	function getCookie(name) {
	  var value = "; " + document.cookie;
	  var parts = value.split("; " + name + "=");
	  if (parts.length == 2) return parts.pop().split(";").shift();
	}

  $(document).ready(function(){
      $(".wp-block-svbk-countdown").each(function(){
      	var countdown_expires =  $(this).data('expires');
      	
      	if( $.isNumeric( countdown_expires ) ) {
      		countdown_expires += new Date().getTime();
      	} else if ( countdown_expires )  {
      	  countdown_expires = new Date( countdown_expires );
      	} else {
      	  return;
      	}
      	
      	var countdown_persist = parseInt($(this).data('persist'));
      	
      	if( countdown_persist ) {
 	        var cookie_name = $(this).attr("id") + "_expires";
      		var countdown_cookie = getCookie(cookie_name);
      		
      		if (countdown_cookie) {
      			countdown_expires = countdown_cookie;
      		} else {
      			var cookie_expire = new Date();
      			cookie_expire.setTime(cookie_expire.getTime() + (countdown_persist*60*60*1000));
	          document.cookie = cookie_name + "=" + countdown_expires + "; expires=" + cookie_expire;                    		
      		}   
      	}
      	
      	var date_format = $(this).html();
      	
      	$(this).countdown( countdown_expires, function(event) {
      	    
      	    $(this).addClass('countdown--running');
      	    
            if (event.elapsed) { 
                $(this).addClass('countdown--elapsed');
                $(this).removeClass('countdown--running');
            } else {
          	  $(this).html( event.strftime( date_format ) );
            }      	  
      	 
      	});
  	});
  });                	  
  
})(jQuery);
