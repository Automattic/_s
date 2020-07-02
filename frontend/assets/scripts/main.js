jQuery(document).ready(function($) {

    window.onscroll = function() {navSticky();};

    var header = document.getElementById('masthead');
    var body = document.getElementsByTagName('body')[0];
    var sticky = header.offsetTop + 100;

    function navSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('is-sticky');
            body.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
            body.classList.remove('is-sticky');
        }
    }

    var $loading = $('#ajax-loading').hide();

    $(document).ajaxStart(function() {
        $loading.show();
    }).ajaxStop(function() {
        $loading.hide();
    });

    // Close mobile menu - click the x icon.
    $('.close-drawer').on('click', function() {
        $('body').removeClass('mobile-toggled').removeClass('drawer-open');
    });

    //@see https://www.smartmenus.org/docs/
    $('.sm, .product-categories').smartmenus({
        showFunction: function($ul, complete) {
            $ul.slideDown(100, complete);
        },
        hideFunction: function($ul, complete) {
            $ul.slideUp(100, complete);
        },
        showTimeout : 0,
        hideTimeout : 0,
    });
});
