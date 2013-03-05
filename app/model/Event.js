Ext.define('MoMo.model.Event', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            {
                mapping : 'id',
                name    : 'id',
                type    : 'string'
            },
            {
                mapping : 'name',
                name    : 'name',
                type    : 'string'
            },
            {
                mapping    : 'time',
                name       : 'date',
                type       : 'date',
                dateFormat : 'time'
            },

            {
                mapping : 'venue.name',
                name : 'venue',
                type : 'string'
            },
            {
                mapping : 'venue.address_1',
                name : 'address',
                type : 'string'
            },
            {
                mapping : 'venue.city',
                name : 'city',
                type : 'string'
            },
            {
                mapping : 'venue.state',
                name : 'state',
                type : 'string'
            },
            {
                mapping : 'venue.zip',
                name : 'zip',
                type : 'string'
            },
            {
                mapping : 'venue.lon',
                name : 'lon',
                type : 'number'
            },
            {
                mapping : 'venue.lat',
                name : 'lat',
                type : 'number'
            }
        ]
    }
});