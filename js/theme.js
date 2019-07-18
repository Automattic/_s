(function($){

  /* Toggle the search visibility */
  $('.search-toggle').click(function(e){
    $('.search-form').toggleClass('visible');
    e.preventDefault();
  });

  /* Open menu sub-items */
  $('.menu-item-has-children > a').on('click', function() {
    $(this).parent('li').toggleClass('expanded');
  });
  
  /* Archive year toggle */
  $('.archive-year .month-name').on('click', function() {
    $(this).next('ul').slideToggle()
    .parent('.archive-year').toggleClass('expanded');
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
    
      $(".countdown").each(function(){
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
    
    $( '.wp-block-svbk-collapse__trigger').on( 'click', function(){
      var $button = $(this);
      var $collapse = $button.closest('.wp-block-svbk-collapse');
      
      $collapse.find('.wp-block-svbk-collapse__content').slideToggle(500, function(){
          $collapse.toggleClass('wp-block-svbk-collapse--open');
      });
      
    } );
    
  });


})(jQuery);
