(function() {
    tinymce.create('tinymce.plugins.extra_tinymce', {
        init : function(ed, url) {
 
			ed.addButton('button', {
                title : 'Add in button',
				enabled: true,
				icons: 'material',
				tooltip:'Add in button',
                icon: 'button',
				onclick: function() {
                          ed.insertContent('[button url="" text="" size="normal"]<br/>');
                      }
            });
 
             ed.addButton('vid', {
                title : 'Add in video',
 				enabled: true,
				icons: 'material',
				tooltip:'Add in YouTube or Vimeo video',
				icon: 'video',
				onclick: function() {
                          ed.insertContent('[vid url=""]');
                      }
            });
			
            ed.addButton('footnote', {
                title : 'Add in footnote',
 				enabled: true,
				icons: 'material',
				tooltip:'Add in footnote',
				icon: 'footnote',
				onclick: function() {
                          ed.insertContent('[footnote][/footnote]');
                      }
            });
 

 

        },
    });
    tinymce.PluginManager.add( 'extra_tinymce', tinymce.plugins.extra_tinymce );
})();

