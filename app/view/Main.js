Ext.define('MoMo.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'MoMo.view.Events'
    ],
    config: {
        items: [
            {
                xtype : 'momo-events',
                title  : 'Mobile Mondays Chicago'
            }
        ]
    }
});
