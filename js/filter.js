(function( $ ) {

    $.widget( "silverbackstudio.ajaxArchive", {

        options: {
            nextPageElement: '.posts-navigation .nav-previous a',
            loadMoreButton: '.load-more',
            paginationLinks: '.pagination a',
            filterElement: '.ajax-filter',
            postContainer: '.ajax-content',
            itemSelector: '.ajax-content .hentry',
            loadingClass: 'loading',
            noMoreClass: 'no-more',
        },

        _create: function() {
            this.element.addClass("ajax-archive");
            this._update();
        },

        _setOption: function( key, value ) {
            this.options[ key ] = value;
            this._update();
        },

        _update: function() {

            var self = this;

            if( this.options.loadMoreButton ) {
                $( this.element ).on('click.ajaxArchive', this.options.loadMoreButton, function(){
                    var nextPageLink = $( self.options.nextPageElement, self.element ).attr('href');

                    if( nextPageLink ) {
                        self._navigate( {url: nextPageLink, append: true}, this._preventDefault );
                    }
                });
            }

            if( this.options.paginationLinks ) {
                $( this.element ).on('click.ajaxArchive', this.options.paginationLinks, function(e){
                    var nextPageLink = $(this).attr('href');

                    self._navigate( {url: nextPageLink, append: false}, this._preventDefault );
                });
            }

            if( this.options.filterElement ) {
                $( this.element ).on('click.ajaxArchive', this.options.filterElement + ' a', function(e){
                    var link = $(this).attr('href');

                    self._navigate( {url: link, append: false}, this.preventDefault );
                });
            }

        },

        _updateNext: function( link ) {
            link = link || '';

            console.log( link );

            this.element.find( this.options.nextPageElement ).attr('href', link);
            this.element.find( this.options.loadMoreButton ).toggleClass( this.options.noMoreClass, !link);
        },

        _preventDefault : function(e){
            e.preventDefault();
        },

        _hashUrl : function ( url ) {
            var hash = 0, i, chr;
            if (url.length === 0) return hash;
            for (i = 0; i < url.length; i++) {
                chr   = url.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        },

        _navigate: function (request, callback){

            var self = this;

            this.element.addClass( this.options.loadingClass );

            $.get( request.url, function(data){

                var page = $(data);
                var contents = page.find( self.options.itemSelector );

                if( self.options.filterElement ) {
                    var filterContainer = $( self.options.filterElement, self.element );
                    var filterItems = page.find(self.options.filterElement).contents();
                    filterContainer.empty().append( filterItems );
                    self._trigger( "filterUpdate", null, { items: filterItems, container: filterContainer, target: self } );
                }

                var nextPage = page.find( self.options.nextPageElement ).attr('href');
                self._updateNext( nextPage );
                self._trigger( "updateNext", null, { url: nextPage, target: self } );

                var postContainer = $( self.options.postContainer, self.element );

                if( !request.append ){
                    self._trigger( "empty", null, { items: contents, container: postContainer, target: self } );
                    postContainer.empty();
                }

                self._trigger( "append", null, { items: contents, container: postContainer, target: self  } );
                postContainer.append(contents);
                self._trigger( "appended", null, { items: contents, container: postContainer, target: self } );

                self.element.removeClass( self.options.loadingClass );

                $( document.body ).trigger( 'post-load' );

                if(typeof callback === 'function'){
                    callback(data, contents, filterItems);
                }

            });

        },

        _destroy: function() {
            this.element
                .removeClass( "ajax-archive" );
        }

    });

}( jQuery ));
