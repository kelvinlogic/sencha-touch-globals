Ext.define('Global.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        styleHtmlContent: true,
        items:[
            {
                xtype: 'titlebar',
                title: 'Declaring globals'
            }
        ]

    },
    initialize: function(){
        var globalFn  = Global.app.globalFunction('Trim this statement');
        var globalArr = Global.app.globalArray[0];
        var globalVar = Global.app.globalVariable;

        this.setHtml('<ol><li>global function: '+globalFn+'</li><li>global Array: '+globalArr+'</li><li>global Variable:'+globalVar+'</li></ol>' );
    }
});
