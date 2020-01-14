var admin_ajax_url = nascsp_admin_URL.admin_URL;
var siteurl = nascsp_admin_URL.MyHomepath;
var $video_player, _player, _isPlaying = false;

jQuery(document).ready(function($) {
	jQuery(".down-arrow a").on('click',function (event) {
            event.preventDefault();
            jQuery("html,body").animate({ scrollTop: jQuery("#next-section").offset().top},800);
    });
	jQuery(".search-icon a").click(function() {
        jQuery(".search-form").slideToggle();
        jQuery(this).parent().toggleClass("close-form");
    });

	/*	--------------------------------------------------Open Video in Fancy Box -------------------*/
	jQuery(".fancy_video").fancybox({
        // set type of content (we are building the HTML5 <video> tag as content)
        type: "html",
        // other API options
        scrolling: "no",
        fitToView: false,
        autoSize: false,
        beforeLoad: function () {
            // build the HTML5 video structure for fancyBox content with specific parameters
            this.content = "<video id='video_player' src='" + this.href + "' poster='" + $(this.element).data("poster") + "' width='360' height='360' controls='controls' preload='none' ></video>";
            // set fancyBox dimensions
            this.width = 360; // same as video width attribute
            this.height = 360; // same as video height attribute
        },
        afterShow: function () {
            // initialize MEJS player
            var $video_player = new MediaElementPlayer('#video_player', {
                defaultVideoWidth: this.width,
                defaultVideoHeight: this.height,
                success: function (mediaElement, domObject) {
                    _player = mediaElement; // override the "mediaElement" instance to be used outside the success setting
                    _player.load(); // fixes webkit firing any method before player is ready
                    _player.play(); // autoplay video (optional)
                    _player.addEventListener('playing', function () {
                        _isPlaying = true;
                    }, false);
                } // success
            });
        },
        beforeClose: function () {
            // if video is playing and we close fancyBox
            // safely remove Flash objects in IE
            if (_isPlaying && navigator.userAgent.match(/msie [6-8]/i)) {
                // video is playing AND we are using IE
                _player.remove(); // remove player instance for IE
                _isPlaying = false; // reinitialize flag
            };
        }
    });
	/*	--------------------------------------------------Open Video in Fancy Box -------------------*/

	jQuery("#phone-2-1").mask("(999)999-9999");
	jQuery("#custom_11").mask("(999)999-9999");

	jQuery(".banner-slider").bxSlider({
		pager: false,
	    auto: (jQuery('.banner-slider').children().length < 2) ? false : true,
        touchEnabled: false
	});
	jQuery(".mobile-icon").on("click touchstart", function (event) {
        event.preventDefault();
		event.stopPropagation();
		jQuery("body").toggleClass("open-menu");
    });

    jQuery(document).on('click', function () {
       jQuery('body').removeClass('open-menu');
    });

     jQuery(".site-header .header-right").on("click touchstart", function (event) {
		event.stopPropagation();
    });

    jQuery(".touch .navigation ul li > a").on("click touchstart",function(event){

	   if(!jQuery(this).parent().hasClass("open") && jQuery(this).parent().has("ul").length > 0)
	   {
		event.preventDefault();
		event.stopPropagation();
		jQuery(this).parent().addClass("open").siblings().removeClass("open");
	   }
	  });

	/*if(jQuery(window).width() < 767) {
		jQuery("ul.social-links").appendTo(".header-buttons");
	}*/


	jQuery('.owl-caresoul').owlCarousel({
		margin:57,
		responsiveClass:true,
		dots:false,
		mouseDrag:true,
		loop: true,
		nav:(jQuery(".owl-caresoul .news-item").length > 1) ? true : false,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			},
			1024:{
				items:3,
			}
		}
	});



	jQuery(".fancybox").fancybox();



	heightGlobal();

	// Video Categories [start]
	jQuery('#video-cats').change(function() {

		if( this.value.length > 0 )
		{
			console.log(this.value);
			window.location.href = this.value;
		}
	});
	// Video Categories [end]


	jQuery( ".postDetails" ).on("click touchstart",function(event){
		event.preventDefault();
		//jQuery('.detailsModal').remove(".ratingblock");
		//jQuery('.detailsModal').remove(".ratingtext");
		//jQuery('.detailsModal').remove(".thumblock");
		//jQuery('.detailsModal').remove(".hreview-aggregate");
		var postid = jQuery(this).data("postid");
		jQuery.ajax({
			type: "POST",
			cache: false,
			url: admin_ajax_url,
			data: 'action=nascsp_views&postid=' + postid,
			success: function( data ) {
				jQuery.fancybox( data, {
					closeClick: false,
					openEffect: 'fade',
					closeEffect: 'fade',
					helpers : {
						overlay : {
							css : {
								'background' : 'rgba(0, 0, 0, 0.80)'
							}
						}
					}
				});
			}
		});
	});

	// To Open All .PDF  and Third Party url in new tab
	var host = window.location.hostname;
	jQuery('.container').find('a').each(function(event) {
		jQuery('a[href$="pdf"]').attr('target','_blank');
		var url = jQuery(this).attr('href');
		var hostname = jQuery('<a>').prop('href', url).prop('hostname');
		if( hostname != host) {
		  jQuery(this).attr('target','_blank');
		}
    });

});
/*---- State Contact Form ----*/
jQuery("#state_form").submit(function( event ){

		event.preventDefault();
		var data = {};
		var formTag = jQuery('form#'+this.id);
		jQuery('form#'+this.id).find('select').each(function(i, field) {
			data[field.name] = field.value;
			console.log(field.value);
			window.location.href = field.value;

		});

});
jQuery("#state_contact_form").submit(function( event ){

	event.preventDefault();
	var data = {};
	var formTag = jQuery('form#'+this.id);
	jQuery('form#'+this.id).find('select').each(function(i, field) {
		data[field.name] = field.value;
		console.log(field.value);
		if(field.value != null){
			jQuery("#state_contact_form_id").attr("checked");
		}
		window.location.href = field.value;

	});

});


/*---- End of State Contact Form ----*/

 /*=================== window Load ===================================*/
jQuery(window).load(function() {

    heightGlobal();
});

/*========================== window Resize ============================*/
jQuery(window).resize(function(){
    heightGlobal();
});

function heightGlobal(){
    equalheight ('.banner-bottom-block');
    equalheight ('.banner-block-single p');
    equalheight ('.banner-bottom-block');
    equalheight ('.csbg-block-single');
    equalheight ('.member-single');
    equalheight ('.staff-member');
	equalheight ('.member-listing-block');
	equalheight ('.media-list .col-sm-4');
}

/*===== Equal Height =======*/
equalheight = function (container) {
    if (jQuery(window).width() > 767) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            jQueryel,
            topPosition = 0;
        jQuery(container).each(function () {
            jQueryel = jQuery(this);
            jQuery(jQueryel).innerHeight('auto')
            topPostion = jQueryel.offset().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].innerHeight(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = jQueryel.innerHeight();
                rowDivs.push(jQueryel);
            }
            else {
                rowDivs.push(jQueryel);
                currentTallest = (currentTallest < jQueryel.innerHeight()) ? (jQueryel.innerHeight()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].innerHeight(currentTallest);
            }
        });
    }
    else {
        jQuery(container).height('auto');
    }
}
