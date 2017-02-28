function updateNextPostLink(link){
    if(link){
        $('.posts-navigation .nav-previous a').attr('href', link);
        $('.load-more').removeClass('no-more');
    } else {
        $('.load-more').addClass('no-more');
    }
}

function ajaxNavigate(newUrl, append,  callback){

    var postContainer = $('.posts-container');

    $.get( newUrl, function(data){

        var page = $(data);
        var contents = page.find(".posts-container").contents();

        updateNextPostLink(page.find(".posts-navigation .nav-previous a").attr('href'));

        if(!append){
            if(postContainer.hasClass('masonry')){
                postContainer.masonry( 'remove', postContainer.contents() ).masonry('layout');
            } else {
                postContainer.empty();
            }
        }

        postContainer.append(contents);

        if(postContainer.hasClass('masonry')){
            postContainer.imagesLoaded( function() {
                postContainer.masonry( 'appended', contents );
            });
        }

        if(typeof callback === 'function'){
            callback();
        }

    });

}

History.Adapter.bind(window,'statechange',function(){
    var State = History.getState();
    ajaxNavigate(State.url, State.data.append);
});


$('body').on('click','.load-more', function(){
    var nextPostLink = $('.posts-navigation .nav-previous a').attr('href');

    if ( ! History.pushState({page: nextPostLink, append: true}, document.title, nextPostLink) ) {
        ajaxNavigate( nextPostLink, true );
    }
});

$('.category-filter').on('click', 'a', function(e){
    var link = $(this).attr('href');

    if ( ! History.pushState({page: link, append: false }, document.title, link) ) {
        ajaxNavigate( link, false, function(){ e.preventDefault(); } );
    } else {
        e.preventDefault();
    }
});
