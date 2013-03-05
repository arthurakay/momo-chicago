Ext.define('MoMo.view.Events', {
    extend : 'Ext.Container',
    alias  : 'widget.momo-events',

    requires : [
        'Ext.dataview.List',
        'Ext.Map'
    ],

    config : {
        layout : {
            type : 'fit'
        },
        items  : [
            {
                xtype   : 'list',
                store   : 'EventStore',
                itemTpl : new Ext.XTemplate(
                    '<p>',
                    '{name}<br />',
                    '{date:date("D m/d/Y")}',
                    '</p>'
                )
            }
        ]
    }

});