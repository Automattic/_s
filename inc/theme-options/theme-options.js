var farbtastic;

( function($) {
	
	// set ID or class for the textarea
	var colorpicker = '#sample-colorpicker',
			example     = '#sample-colorpicker-example';
	
	var pickColor = function(a) {
		farbtastic.setColor(a);
		$(colorpicker).val(a);
		$(example).css('background-color', a);
	};
	
	$(document).ready( function() {
		$('#default-color').wrapInner('<a href="#" />');
		
		farbtastic = $.farbtastic('#colorPickerDiv', pickColor);
		
		pickColor( $(colorpicker).val() );
		
		$('.pickcolor').click( function(e) {
			$('#colorPickerDiv').show();
			e.preventDefault();
		});
		
		$(colorpicker).keyup( function() {
			var a = $(colorpicker).val(),
				b = a;
			
			a = a.replace(/[^a-fA-F0-9]/, '');
			if ( '#' + a !== b )
				$(colorpicker).val(a);
			if ( a.length === 3 || a.length === 6 )
				pickColor( '#' + a );
		});
		
		$(document).mousedown( function() {
			$('#colorPickerDiv').hide();
		});
		
		$('#default-color a').click( function(e) {
			pickColor( '#' + this.innerHTML.replace(/[^a-fA-F0-9]/, '') );
			e.preventDefault();
		});
		
		$('.image-radio-option.color-scheme input:radio').change( function() {
			var currentDefault = $('#default-color a'),
				newDefault = $(this).next().val();
			
			if ( $(colorpicker).val() == currentDefault.text() )
				pickColor( newDefault );
			
			currentDefault.text( newDefault );
		});
	});
	
} )(jQuery);
