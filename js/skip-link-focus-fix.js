( function() {
var is_webkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
var is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

if((is_webkit || is_opera || is_ie ) &&  typeof(document.getElementById) !== 'undefined'  ) {
    var eventMethod = (window.addEventListener) ? 'addEventListener' : 'attachEvent' ;
    window[eventMethod]("hashchange", function(event) {

        var element = document.getElementById(location.hash.substring(1));

        if (element) {

            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }

            element.focus();
        }

    }, false); 

} 

})();
