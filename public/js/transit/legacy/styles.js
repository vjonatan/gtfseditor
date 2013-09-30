define(["OpenLayers"], function (OpenLayers) {
	var my = {};

	my.notesStyleMap = new OpenLayers.StyleMap({
            'default': new OpenLayers.Style({strokeColor: 'blue',
                strokeWidth: 10, strokeOpacity: 1, pointRadius: 6,
                fillOpacity: 1,
                fontColor: "black", fontSize: "16px",
                fontFamily: "Courier New, monospace", fontWeight: "bold",
                labelAlign: "left", labelXOffset: "8", labelYOffset: "8",
                labelOutlineColor: "white", labelOutlineWidth: 3
                }),
            'select': new OpenLayers.Style({strokeColor: "red",
                strokeWidth: 3, pointRadius: 5
                })
    });
    my.notesStyleMap.addUniqueValueRules("default", "type", {
                "Start": {label : "${type}", fillColor: 'white',
                    strokeWidth: 3, strokeColor: 'black'},
                "End": {label : "${type}", fillColor: 'white',
                    strokeWidth: 3, strokeColor: 'black'},
                "Line": {strokeWidth: 10, strokeOpacity: 0.5}
    });

	my.gpxStyleMap = new OpenLayers.StyleMap({
            'default': new OpenLayers.Style({
                strokeColor: 'black',
                strokeWidth: 2, strokeOpacity: 1, pointRadius: 6,
                fillOpacity: 0.8,
                fontColor: "black", fontSize: "16px",
                fontFamily: "Courier New, monospace", fontWeight: "bold",
                labelAlign: "left", labelXOffset: "8", labelYOffset: "8",
                labelOutlineColor: "white", labelOutlineWidth: 3
                })
            });


    my.gpxStyleMap.addUniqueValueRules("default", "name", 
        {
           "Bus stop": {label : "s", fillColor: 'white',
                strokeWidth: 3, strokeColor: 'black'},
            "Parada de autobús": {label : "s", fillColor: 'white',
                strokeWidth: 3, strokeColor: 'black'},
            "Tracked with OSMTracker for Android™": {fillColor: 'white',
                strokeWidth: 3, strokeColor: 'green'},
            "Trazado con OSMTracker para Android™": {fillColor: 'white',
                strokeWidth: 3, strokeColor: 'green'}
        });


	my.routesStyleMap = new OpenLayers.StyleMap({
            'default': new OpenLayers.Style({
                strokeColor: "blue",
                strokeWidth: 8,
                strokeOpacity: 0.6
            }),
            'select': new OpenLayers.Style({
                strokeColor: "red",
                strokeWidth: 8,
                strokeOpacity: 0.8
            }),
            'vertex': new OpenLayers.Style({
                strokeColor: "black",
                strokeWidth: 2,
                strokeOpacity: 0.9,
                pointRadius: 8,
                fill: true,
                fillColor: 'white',
                fillOpacity: 0.6
            })
        });

    my.stopsStyleMap = new OpenLayers.StyleMap({
            'default': new OpenLayers.Style({
              strokeColor: 'black', strokeWidth: 3, strokeOpacity: 1, 
              pointRadius: 6, fillColor: 'yellow', fill: true, 
              fillOpacity: 1
              })
              ,
            'select': new OpenLayers.Style({
              strokeColor: 'black', strokeWidth: 3, strokeOpacity: 1, 
              pointRadius: 8, fillColor: 'red', fill: true, fillOpacity: 1,
              label: '${stop_id}',
              fontColor: "black", fontSize: "16px", 
              fontFamily: "Courier New, monospace", fontWeight: "bold",
              labelAlign: "left", labelXOffset: "8", labelYOffset: "12",
              labelOutlineColor: "white", labelOutlineWidth: 3
              })          
    });

    return my;

});