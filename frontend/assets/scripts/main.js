jQuery(document).ready(function($) {

    window.onscroll = function() {navSticky();};

    var header = document.getElementById('masthead');
    var body = document.getElementsByTagName('body')[0];
    var sticky = header.offsetTop;

    function navSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
        }
    }

});
