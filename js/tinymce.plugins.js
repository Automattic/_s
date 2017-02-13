jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins._svbk_helper_buttons', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('insert_section_template', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        //If text is selected when button is clicked
                        //Wrap shortcode around it.
                        content =  '<section class="content-section"><header><h2>Title</h2><p class="subtitle">Subtitle</p></header><p>'+selected+'</p></section><br/>';
                    }else{
                        content =  '<section class="content-section"><header><h2>Title</h2><p class="subtitle">Subtitle</p></header><p>Content</p></section><br/>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });
                ;             
                
                
                ed.addCommand('insert_definition', function() {
                    selected = tinyMCE.activeEditor.selection.getContent();

                    if( selected ){
                        content =  '<div class="definition">'+selected+'<span class="definition-text">Insert text here</span></div>';
                    }else{
                        content =  '<div class="definition">Content<span class="definition-text">Insert text here</span></div>';
                    }

                    tinymce.execCommand('mceInsertContent', false, content);
                });                  

            // Register buttons - trigger above command when clicked
            ed.addButton('section_button', {title : 'Section', cmd : 'insert_section_template', image: url.replace('js', 'icons') + '/tinymce/section.png' });
            ed.addButton('definition', {title : 'Definizione', cmd : 'insert_definition', image: url.replace('js', 'icons') + '/tinymce/anchors-index.png' });            
        },   
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('_svbk_helper_buttons', tinymce.plugins.svbk_helper_buttons);
});