Ext.define('MoMo.controller.Event', {
    extend : 'Ext.app.Controller',

    config : {
        control : {
            'list' : {
                'itemtap' : 'onEventTap'
            }
        }
    },

    onEventTap : function (list, index, target, record, event, eOpts) {
        var navView = Ext.Viewport.down('navigationview');

        var location = new google.maps.LatLng(record.get('lat'), record.get('lon'));

        var map = navView.push({
            xtype              : 'map',
            title              : 'Map',
            //useCurrentLocation : true,

            mapOptions : {
                center                   : location,
                zoom                     : 17,
                navigationControl        : true,
                navigationControlOptions : {
                    style : google.maps.NavigationControlStyle.DEFAULT
                }
            },

            listeners : {
                maprender : function (comp, googleMap) {
                    var geocoder = new google.maps.Geocoder();

                    geocoder.geocode(
                        {
                            latLng : location
                        },
                        function (result, status) {
                            var marker = new google.maps.Marker({
                                map      : googleMap,
                                position : location,
                                title    : record.get('venue')
                            });

                            var infowindow = new google.maps.InfoWindow({
                                content: record.get('venue') + '<br />' +
                                         record.get('address') + '<br />' +
                                         record.get('city') + ', ' + record.get('state') + ' ' + record.get('zip')
                            });

                            google.maps.event.addListener(marker, 'click', function() {
                                infowindow.open(googleMap, marker);
                            });
                        }
                    );
                }
            }
        });
    }
});