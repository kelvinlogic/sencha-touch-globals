Ext.application({
    name: 'Global',

    requires: [
        'Ext.MessageBox',
        'Ext.TitleBar'
    ],

    views: [
        'Main'
    ],

    launch: function(){
        Ext.Viewport.add(Ext.create('Global.view.Main'));
    },

    //defining globals
    globalVariable: 3.145,
    globalArray: [37.788539, -122.401643],

    globalFunction: function(content) {
        return Ext.String.trim(content);
    }

});
