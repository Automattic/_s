!function(a){"use strict";a(document).ready((function(){a("body").on("submit","form.cart",(function(t){var o=a(this).parents(".type-product");if(!o.hasClass("product-type-external")&&!o.hasClass("product-type-grouped")){t.preventDefault();var d=a(this),e=d.find(".single_add_to_cart_button"),r=d.serialize();r+="&action=shoptimizer_pdp_ajax_atc",e.val()&&(r+="&add-to-cart="+e.val()),e.removeClass("added not-added"),e.addClass("loading"),a(document.body).trigger("adding_to_cart",[e,r]),a.ajax({url:shoptimizer_ajax_obj.ajaxurl,data:r,method:"POST",success:function(t){if(t){var o=window.location.toString();if(o=o.replace("add-to-cart","added-to-cart"),t.error&&t.product_url)window.location=t.product_url;else{e.removeClass("loading");var d=t.fragments;t.cart_hash;d&&a.each(d,(function(t){a(t).addClass("updating")})),d&&a.each(d,(function(t,o){a(t).replaceWith(o)})),0<t.notices.indexOf("error")?(a("body").append(t.notices),e.addClass("not-added")):e.addClass("added")}}},error:function(){console.log("pdp ajax atc error occured")},complete:function(){}})}})),a("body").on("adding_to_cart",(function(t,o,d){a("body").toggleClass("drawer-open")}))}))}(jQuery);