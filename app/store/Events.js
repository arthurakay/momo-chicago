Ext.define('MoMo.store.Events', {
    extend   : 'Ext.data.Store',
    requires : [
        'Ext.data.proxy.JsonP',
        'MoMo.model.Event'
    ],

    config : {
        autoLoad : true,
        autoSync : false,
        model    : 'MoMo.model.Event',
        pageSize : 0,
        storeId  : 'EventStore',
        proxy    : {
            type               : 'jsonp',
            enablePagingParams : false,
            noCache            : false,
            url                : MoMo.util.Meetup.getEventsUrl(),
            autoAppendParams   : false,
            reader             : {
                type         : 'json',
                rootProperty : 'results'
            }
        }
    }
});