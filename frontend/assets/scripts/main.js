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

    /**
     * 瀑布流布局
     */
    jQuery('.js-masonry').imagesLoaded(function() {

        var ias = jQuery.ias({
            container : '.js-masonry',
            item      : 'article',
            pagination: '.nav-links',
            next      : '.nav-previous a',
        });

        // 添加加载指示器
        ias.extension(new IASSpinnerExtension({
            html: '<div class="ias-spinner" style="text-align: center;"><i class="nb-spinner"></i></div>'
        }));

        // 3页后显示查看更多
        ias.extension(new IASTriggerExtension({
            offset: 3,
            text  : 'View more',
        }));

        // 加载完成时显示的文字
        ias.extension(new IASNoneLeftExtension({text: 'No more content...'}));

    });

});
