(function($){
	$( '.order-details-toggle' ).on(
		'click', function(){
			$(this).toggleClass('open');
			$( '#order-details' ).slideToggle();
		}
	);
	
	var options = _svbk_woocommerce || {
        'cvcInstructions' : {
        	'buttonText': 'Where?',
        	'text': 'If you use Mastercard, Visa and Diners, the security code is shown on the back of your credit card near the space reserved for your signature, and consists of 3 digits. If you use American Express, the secure code is placed on the front of your card and consists of 4 digits.', 
        	'imageUrl': '{{theme-path}}/dist/css/images/cards.css',
        	'closeText': 'Close',
        }
	};
	
	var cvcTooltip = $(
		'<div id="find-your-cvc">' +
			'<a class="find-your-cvc-hide close">' + options.cvcInstructions.closeText + '</a>' +
			'<p>' + options.cvcInstructions.text + '</p>' +
			'<img src="' + options.cvcInstructions.imageUrl + '" />' +
		'</div>'
	);
	
	var cvcTooltipButton = $(
		'<a class="find-your-cvc-show open">' + options.cvcInstructions.buttonText + '</a>'
	);
	
	cvcTooltipButton.on('click', function(){
		cvcTooltip.addClass('tooltip-show');
	});

	cvcTooltip.on('click', '.find-your-cvc-hide', function(){
		cvcTooltip.removeClass('tooltip-show');
	});
	
	$(document.body).on('updated_checkout wc-credit-card-form-init', function(){
		$('#stripe-cvc-element')
			.after( cvcTooltip )
			.after( cvcTooltipButton );
	} );

})( jQuery );
