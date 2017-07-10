jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins._svbk_helper_buttons', {
        init : function(ed, url) {
                // Register command for when button is clicked
                ed.addCommand('insert_section_template', function() {
                    var selected = tinyMCE.activeEditor.selection.getContent() || 'Content';
                    var content =
                      '<section class="content-section">'
                    + ' <header>'
                    + '   <h2>Title</h2>'
                    + '   <p class="subtitle">Subtitle</p>'
                    + ' </header>'
                    + ' <p>' + selected + '</p>'
                    + '</section>'
                    + '<br/>';

                    tinymce.execCommand('mceInsertContent', false, content);
                });

                ed.addCommand('insert_split_section_template', function() {
                    var selected = tinyMCE.activeEditor.selection.getContent() || 'Content';
                    var content =
                    '<section class="split-section">'
                    + '  <div class="first-part"></div>'
                    + '  <div class="second-part">'
                    + '    <header>'
                    + '      <p class="pretitle">Pretitle</p>'
                    + '      <h2>Title</h2>'
                    + '      <p class="subtitle">Subtitle</p>'
                    + '    </header>'
                    + '    <p>' + selected + '</p>'
                    + '  </div>'
                    + '</section>';

                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('section_button', {title : 'Section', cmd : 'insert_section_template', image: url.replace('js', 'icons') + '/tinymce/section.png' });
            ed.addButton('split_section_button', {title : 'Split Section', cmd : 'insert_split_section_template', image: url.replace('js', 'icons') + '/tinymce/split-section.png' });
        }
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('_svbk_helper_buttons', tinymce.plugins._svbk_helper_buttons);
});
