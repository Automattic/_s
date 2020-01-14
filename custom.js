var dashboard_admin_URL = dashboard_ajax_url.adminurl;


jQuery(document).ready(function() {


	jQuery('.single-post-data a.add_cart').click(function(){
		jQuery(this).addClass('disable');
	});

	jQuery( "#register-form" ).submit(function( event ) {

		event.preventDefault();
		//jQuery(".loadmoreimg").show();

		//var filename = jQuery("#file").val();
		jQuery('form#register-form span.error-msg').remove();
		jQuery('form#register-form span.success-msg').remove();

				var data = {};
				var fieldName = '';
				var popMsg = '';
				var popError = false;
				var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				var formTag = jQuery('form#register-form');
				jQuery("form#register-form .btn-green").attr('disabled',true);

				jQuery('form#register-form').find('input,select,checkbox').each(function(i, field) {
					data[field.name] = field.value;
					fieldName = field.name;
					fieldName = fieldName.replace(/_/gi, " ");
					fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
						return letter.toUpperCase();
					});

					if(field.name == 'email'){
						if(field.value == ''){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please enter email.</span>');
							if(popError == false)
								popError = true;
						}
					}else if(field.name == 'uecid'){

						if(field.value == ''){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please enter uecid.</span>');
							if(popError == false)
								popError = true;
						}
					}/* else if(field.name == 'ssn'){
						if(field.value == ''){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please enter SSN.</span>');
							if(popError == false)
								popError = true;
						}
					}	 */
					else if (field.name == 'firstname' || field.name == 'lastname' || field.name == 'city' || field.name == 'zipcode' || field.name == 'phone' || field.name == 'gender' || field.name == 'citizenship'){

						if(field.name == 'gender'){
							if(field.value.length === 0 || field.value == null || field.value == undefined || field.value == "") {
							 jQuery('.gender_error').after('<span class="error-msg select-box">Please select required field.</span>');
							 if(popError == false)
								popError = true;
							}
						}
						if (field.name == 'citizenship') {
							if(field.value.length === 0 || field.value == null || field.value == undefined || field.value == "") {
							 jQuery('.citizenship_error').after('<span class="error-msg select-box">Please select required field.</span>');
							 if(popError == false)
								popError = true;
							}
						}
						if(field.value == '' ){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please fill in the required field.</span>');
							if(popError == false)
								popError = true;
						}else if ((field.value).trim() == null || (field.value).trim() == '') {
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please fill in the required field.</span>');
							if(popError == false)
								popError = true;
						}

					} else if(field.name == 'password' || field.name == 'cpassword'){
						if(field.value == ''){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Please enter password</span>');
							if(popError == false)
								popError = true;
						}else if(field.value.length < 6) {
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Password should be minimum 6 character long.</span>');
							if(popError == false)
								popError = true;
						} else if(jQuery("#password").val() != jQuery("#cpassword").val()){
							formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-msg">Passwords do not match.</span>');
							if(popError == false)
								popError = true;
						}
					}
				});

				if(popError == true){
					formTag.addClass('invalid');
					jQuery(".loadmoreimg").hide();
					jQuery(".error-message").show();
					jQuery("form#register-form .btn-green").removeAttr('disabled');
					return false;
				}  else {

					formTag.removeClass('invalid');
					jQuery(".error-message").hide();
					var form = jQuery('#register-form').serialize();

					jQuery.ajax({
						type: 'POST',
						url: dashboard_admin_URL,
						data: form,
						success:function(data){
							//jQuery("form#register-form .btn-green").removeAttr('disabled');
							var responseData = JSON.parse(data);
							//jQuery(".edit_profile").removeAttr("disabled");;
							//jQuery("html, body").animate({ scrollTop: jQuery('.red-gr ').offset().top}, 600);
							if(responseData.result == 'fail'){
								jQuery('.register-form-error').empty().append('<span class="error-msg">'+responseData.message+'</span>');
								jQuery("form#selectSubjectId").attr('disabled',true);
							} else {
								// jQuery('.register-form-error').empty().append('<span class="success-msg">'+responseData.message+'</span>');
								// return false;
								setTimeout( function() { window.location.href = responseData.redirect_url; } , 1000);
							}
							jQuery(".loadmoreimg").hide();
						},
						error:function(){
							alert("Error: There is some issue please try again.")
						}
					});
				}

	});

	window.onload = function() {
	 jQuery('select#selectSubCategoryId').attr("disabled",true);
	 jQuery('select#selectSubjectId').attr("disabled",true);
	};

	jQuery('form#selectFilter').find('select').on("change",function(){

		jQuery('select#selectSubCategoryId').removeAttr("disabled",false);
		jQuery('select#selectSubjectId').removeAttr("disabled",false);

		var selectedFilter;
		var taxonomyUniversity = jQuery('select#selectProductId').val();
		var current_filter = jQuery(this).attr('id');
		if(current_filter == 'selectProductId'){
			jQuery('select#selectSubCategoryId').find('option').prop("selected", false);
			jQuery('select#selectSubjectId').find('option').prop("selected", false);
			selectedFilter = 'university';
		}else if(current_filter == 'selectSubCategoryId'){
			selectedFilter = 'instruction_type';
		}else if(current_filter == 'selectSubjectId'){
			selectedFilter = 'subject';
		}
		if(taxonomyUniversity != ''){
			var categoryUniversityID = jQuery('select#selectProductId').val();
			var taxonomyUniversity = 'university_category';
		}else{
			var categoryUniversityID = '';
			var taxonomyUniversity = '';
		}

		var taxonomyCategory = jQuery('select#selectSubCategoryId').val();
		if(taxonomyCategory != ''){
			var categoryCategoryID = jQuery('select#selectSubCategoryId').val();
			var taxonomyCategory = 'university-sub-category';
		}else{
			var categoryCategoryID = '';
			var taxonomyCategory = '';
		}

		var taxonomySubject = jQuery('select#selectSubjectId').val();
		if(taxonomySubject != ''){
			var categorySubjectID = jQuery('#selectSubjectId').val();
			var taxonomySubject = 'university-course-department';
		}else{
			var categorySubjectID = '';
			var taxonomySubject = '';
		}

		console.log(selectedFilter);
		jQuery(".loadmoreimg").show();
	//	jQuery('.display_block').hide();
		var data = { 'action':'universityList'};

		data = 'categoryUniversityID='+categoryUniversityID+'&categoryCategoryID='+categoryCategoryID+'&categorySubjectID='+categorySubjectID+'&taxonomyUniversity='+taxonomyUniversity+'&taxonomyCategory='+taxonomyCategory+'&taxonomySubject='+taxonomySubject+'&selectedFilter='+selectedFilter+'&'+jQuery.param(data);
		console.log(data);

		jQuery.ajax({
		type: 'POST',
		url: dashboard_admin_URL,
		data: data,
		success:function(result){

			  var responseData = JSON.parse(result);
			  var responseTerms = responseData.terms_sub_category;
			  var responseCourse = responseData.terms_course_department;
			  var responseTermsHtml = responseData.instruction_type_html;


			  newItems = jQuery(responseData.result);

			  $container = jQuery(".display_block");
			  $container.html(newItems);
			  jQuery("#listing-university").hide();

			  var subCatID = jQuery("#selectSubCategoryId").val();

			  if ( responseTerms) {

				if(current_filter !== 'selectSubCategoryId' && current_filter !== 'selectSubjectId'){
					$('#selectSubCategoryId').find('option').remove().end().append('<option>All</option>').val('');
					$( responseTerms ).each(function(index, element) {
						subCatID = (categoryCategoryID == element.term_id) ? 'selected' : '';
						var term = '<option value="' + element.term_id + '" '+subCatID+'>' + element.name + '</option>';
						$('#selectSubCategoryId').append(term);
					});
				}
			  } else {
			  	jQuery(".display_block").html(responseData.message);
					jQuery(".loadmoreimg").hide();
			  }

			  if( responseCourse) {

			  	$('#selectSubjectId').find('option').remove().end().append('<option>All</option>').val('');
			  	$( responseCourse ).each(function(index, element) {
			  		subjectID = (categorySubjectID == element.term_id) ? 'selected' : '';
				  	var subject = '<option value="' + element.term_id + '" '+subjectID+'>' + element.name + '</option>';
					$('#selectSubjectId').append(subject);
				});
			  } else {
			  	jQuery(".display_block").html(responseData.message);
					jQuery(".loadmoreimg").hide();
			  }

			  if(responseData.result == 'success'){
				//	jQuery('select').val(null).trigger('change');
					//window.location.href = responseData.redirect;
				}else if(responseData.result == 'fail'){
					jQuery(".display_block").html(responseData.message);
					jQuery(".loadmoreimg").hide();
					// jQuery("#selectSubjectId").attr('disabled',true);
				}
				jQuery(".loadmoreimg").hide();
			},
			error:function(){
				alert("Error");
			}
		});
	});

	jQuery("form#searchTermID").submit(function(event){
		event.preventDefault();
		jQuery(".loadmoreimg").show();
		jQuery("form#searchTermID span.error-message").remove();
		var searchTerm = jQuery("#searchTermField").val();
		var fieldData = {};
		var popError = false;
		var formTag = jQuery('form#'+this.id);

			jQuery('form#'+this.id).find('input').each(function(i, field) {
					fieldData[field.name] = field.value;
					fieldName = field.name;
					console.log(fieldName);
					if(field.name == 'searchByTerm'){
					if(field.value == ''){
						formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-message">Please enter some valid search term.</span>');
						if(popError == false)
							popError = true;
					}

				}

			});

			/* if(searchTerm == ''){

				jQuery("form#searchTermID").parent().addClass('error wpcf7-not-valid').after('<span class="error-message">Please Enter Some Valid Search Term</span>');
				if(popError == false){
				popError = true;
				}
			} */
			if(popError == true){
				jQuery("#searchTermID").addClass('invalid');
				jQuery(".loadmoreimg").hide();
				jQuery(".error-message").show();
				return false;
			}  else {
				jQuery("#searchTermID").removeClass('invalid');
				jQuery(".error-message").hide();
				var data = { 'action':'universityList'};
				data = 'searchTerm='+searchTerm+"&"+jQuery.param(data);
				jQuery.ajax({
				type: 'POST',
				url: dashboard_admin_URL,
				data: data,
				success:function(result){

					  var responseData = JSON.parse(result);
					  newItems = jQuery(responseData.result);
					  console.log(newItems);
					  $container = jQuery(".display_block");
					  $container.html(newItems);
					  jQuery("#listing-university").hide();
					  if(responseData.result == 'success'){

							//window.location.href = responseData.redirect;
						}else if(responseData.result == 'fail'){
							jQuery(".display_block").html(responseData.message);
						}
						jQuery(".loadmoreimg").hide();

					},
					error:function(){
						alert("Error");
					}
				});


			}
	});

	jQuery( "#dateSearch" ).submit(function( event ) {
		event.preventDefault();
		jQuery(".loadmoreimg").show();

		jQuery('form#dateSearch span.error-message').remove();
		var date = jQuery(".course-start-date").val();
		var popError = false;
		var fieldData = {};
		var formTag = jQuery('form#'+this.id);

		jQuery('form#'+this.id).find('input').each(function(i, field) {
				fieldData[field.name] = field.value;
				fieldName = field.name;
				console.log(fieldName);
				if(field.name == 'courseDatePicker'){
				if(field.value == ''){
					formTag.find('input[name="'+field.name+'"]').addClass('error wpcf7-not-valid').after('<span class="error-message">Please select Date.</span>');
					if(popError == false)
						popError = true;
				}

			}

		});
		/*
		if(date==''){
			jQuery("form#dateSearch").addClass('error wpcf7-not-valid').after('<span class="error-message">Please Select Date</span>');
			if(popError == false){
			popError = true;
			}
		} */
		if(popError == true){
				jQuery(".loadmoreimg").hide();
				jQuery(".error-message").show();
				jQuery(".select-wrapper").addClass('invalid');
		}else{
			jQuery(".select-wrapper").removeClass('invalid');
			jQuery(".error-message").hide();
			var data = { 'action':'universityList'};
			data = 'courseDate='+date+"&"+jQuery.param(data);
			jQuery.ajax({
			type: 'POST',
			url: dashboard_admin_URL,
			data: data,
			success:function(result){

				  var responseData = JSON.parse(result);
				  newItems = jQuery(responseData.result);
				  console.log(newItems);
				  $container = jQuery(".display_block");
				  $container.html(newItems);
				  jQuery("#listing-university").hide();
				  if(responseData.result == 'success'){

						//window.location.href = responseData.redirect;
					}else if(responseData.result == 'fail'){
						jQuery(".display_block").html(responseData.message);
					}
					jQuery(".loadmoreimg").hide();

				},
				error:function(){
					alert("Error");
				}
			});
		}
	});
});
