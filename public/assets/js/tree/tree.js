'use strict';
var tree_custom = {
    init: function() {
        $('#treeBasic').jstree({
            'core' : {
                'themes' : {
                    'responsive': false
                }
            },
            'types' : {
                'default' : { 
                    'icon' : 'fa fa-folder-o font-theme'
                },
                'file' : {
                    'icon' : 'fa fa-file-text-o font-dark'
                }
            },
            'plugins' : ['types']
        }), $('#treecheckbox').jstree({
    		'core' : {
    			'themes' : {
    				'responsive': false
    			}
    		},
            'types' : {
                'default' : {
                    'icon' : 'fa fa-folder-o font-theme'
                },
                'file' : {
                    'icon' : 'fa fa-file-text-o font-dark'
                }
            },
            'plugins' : ['types', 'checkbox']
        }), $('#dragTree').jstree({
    		'core' : {
    			'check_callback' : true,
    			'themes' : {
    				'responsive': false
    			}
    		},
            'types' : {
                'default' : {
                    'icon' : 'fa fa-folder-o  font-theme'
                },
                'file' : {
                    'icon' : 'fa fa-file-text-o font-dark'
                }
            },
            'plugins' : ['types', 'dnd']
        }), $('#contextmenu').jstree({
            'core' : {
                'check_callback' : true,
                'themes' : {
                    'responsive': false
                }
            },
            'types' : {
                'default' : {
                    'icon' : 'fa fa-folder-o  font-theme'
                },
                'file' : {
                    'icon' : 'fa fa-file-text-o font-dark'
                }
            },
                    "plugins" : [ "contextmenu", "state", "types" ]
        });
    }
};
jQuery(document).ready(function() {
    tree_custom.init()
});