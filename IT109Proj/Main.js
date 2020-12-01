const winH = document.querySelector('.main_container');
fun_winH();

function fun_winH(){
	var x = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	winH.style.height = x - 20 + "px";
}




var mymap = L.map('mapid').setView([9.1204, 125.59], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

L.tileLayer.wms('http://localhost:8080/geoserver/IT109geoserver/wms', {
	layers: 'IT109geoserver:IT109geoserver_caraga',
	format: 'image/png',
	transparent: true,
	attribution: "Julius Elvira",
	zIndex: 101,
	opacity: .8,
	version: '1.1.0',
}).addTo(mymap);

L.tileLayer.wms('http://localhost:8080/geoserver/IT109geoserver/wms', {
	layers: 'IT109geoserver:agusan del sur',
	format: 'image/png',
	transparent: true,
	attribution: "Julius Elvira",
	zIndex: 101,
	opacity: .8,
	version: '1.1.0',
}).addTo(mymap);


// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// 		maxZoom: 18,
// 		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
// 			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 		id: 'mapbox/streets-v11',
// 		tileSize: 512,
// 		zoomOffset: -1
// 	}).addTo(mymap);
// var geojson = L.geoJson(statesData).addTo(mymap);

// function getColor(d) {
//     return d > 1000 ? '#800026' :
//            d > 500  ? '#BD0026' :
//            d > 200  ? '#E31A1C' :
//            d > 100  ? '#FC4E2A' :
//            d > 50   ? '#FD8D3C' :
//            d > 20   ? '#FEB24C' :
//            d > 10   ? '#FED976' :
//                       '#FFEDA0';
// }

// function style(feature) {
//     return {
//         fillColor: getColor(feature.properties.density),
//         weight: 2,
//         opacity: 1,
//         color: 'white',
//         dashArray: '3',
//         fillOpacity: 0.7
//     };
// }

// L.geoJson(statesData, {style: style}).addTo(mymap);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 	}).addTo(mymap);

// var municipalities;
// function load_municipalities(){
// 		var municipalities = L.tileLayer.wms('http://localhost:8080/geoserver/IT109geoserver/wms', {
// 			layers: 'IT109geoserver:IT109geoserver_caraga',
// 			format: 'image/png',
// 			transparent: true,
// 			attribution: "Matt Morales",
// 			zIndex: 101,
// 			// opacity: .8,
// 			// version: '1.1.0',
// 		}).addTo(mymap);
// 	}

// load_municipalities();

// L.tileLayer.wms('http://localhost:8080/geoserver/IT109geoserver/wms', {
// 			layers: 'IT109geoserver:IT109geoserver_caraga',
// 			format: 'image/png',
// 			transparent: true,
// 			attribution: "Matt Morales",
// 			zIndex: 101,
// 			opacity: .8,
// 			version: '1.1.0',
// 		}).addTo(mymap);

// var tiled = new ol.layer.Tile({
//         visible: false,
//         source: new ol.source.TileWMS({
//           url: 'http://localhost:8080/geoserver/IT109geoserver/wms',
//           params: {'FORMAT': format, 
//                    'VERSION': '1.1.1',
//                    tiled: true,
//                 "STYLES": '',
//                 "LAYERS": 'IT109geoserver:IT109geoserver_caraga',
//                 "exceptions": 'application/vnd.ogc.se_inimage',
//              tilesOrigin: 118.51237783336694 + "," + 0.0000713410282038
//           }
//         })
//       }).addTo(mymap);

// var mapboxAccessToken = 'http://localhost:8080/geoserver/IT109geoserver/wms?service=WMS&version=1.1.0&request=GetMap&layers=IT109geoserver%3Aagusan%20del%20norte&bbox=118.51237783336694%2C7.810421530689674E-5%2C118.51238286693294%2C8.530972581570584E-5&width=536&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers';

// L.tileLayer(mapboxAccessToken, {
//     id: 'mapbox/light-v9',
//     attribution: ...,
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(mymap);

// L.geoJson(statesData).addTo(mymap);

// var marker = L.marker([9.1204, 125.59]).addTo(mymap);

// var circle = L.circle([9.1204, 125.59], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);


// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// mymap.on('click', onMapClick);

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);

///////////////////////////////////////////////////////////////////////////////////
// var owsURI = 'http://localhost:8080/geoserver/IT109geoserver/ows';
// 	var municipalities;
// 	var WFSLayer = null;
// 	var map = L.map('mapid').setView([9.1204, 125.59], 8);
// 	var basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 	}).addTo(map);
	
// 	L.control.scale().addTo(map);
	
// 	var legend = L.control({position: 'topright'});
// 	legend.onAdd = function (map) {
// 		var div = L.DomUtil.create('div', 'info legend');
// 		div.innerHTML ='<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=IT109geoserver:IT109geoserver_caraga&legend_options=fontName:Arial;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:120;labelMargin:5"/>';
// 		return div;
// 	};
// 	legend.addTo(map);
	

	
// 	function wfsRequest(filter){
// 		var defaultParameters = {
// 			service: 'WFS',
// 			version: '2.0.0',
// 			request: 'GetFeature',
// 			typeName: 'IT109geoserver:IT109geoserver_caraga',
// 			maxFeatures: 100,
// 			outputFormat: 'application/json',
// 			cql_filter: filter
// 		}
// 		var parameters = L.Util.extend(defaultParameters);
// 		var URL = owsURI + L.Util.getParamString(parameters);
// 		$.ajax({
// 			url : URL,
// 			dataType : 'json',
// 			jsonpCallback : 'getJson',
// 			beforeSend: function (){
// 				$('#loader').show();
// 			},
// 			success : function (response) {
// 				$('#loader').hide();
// 				if(response.features.length > 0){
// 					WFSLayer = L.geoJson(response, {
// 						style: function (feature) {
// 							return {
// 								stroke: false,
// 								fillColor: null,
// 								fillOpacity: 0
// 							};
// 						}
// 					}).addTo(map);
// 					map.fitBounds(WFSLayer.getBounds()); 
// 				}else{
// 					alert('NO RESULT, TRY ANOTHER VALUE');
// 				}

// 			}
// 		})
// 	}

	
// 	function load_municipalities(){
// 		municipalities = L.tileLayer.wms(owsURI, {
// 			layers: 'IT109geoserver:IT109geoserver_caraga',
// 			format: 'image/png',
// 			transparent: true,
// 			attribution: "Matt Morales",
// 			zIndex: 100,
// 			opacity: .8,
// 			version: '1.1.0',
// 		}).addTo(map);
// 	}

// 	load_municipalities();
	
// 	map.on("click", function(e) {
// 		var _layers = this._layers,
// 		  layers = [],
// 		  versions = [],
// 		  styles = [];

// 		for (var x in _layers) {
// 		  var _layer = _layers[x];
// 		  if (_layer.wmsParams) {
// 			layers.push(_layer.wmsParams.layers);
// 			versions.push(_layer.wmsParams.version);
// 			styles.push(_layer.wmsParams.styles);
// 		  }
// 		}
		
// 		var loc = e.latlng,
// 		  xy = e.containerPoint,
// 		  size = this.getSize(),
// 		  bounds = this.getBounds(),
// 		  crs = this.options.crs,
// 		  sw = crs.project(bounds.getSouthWest()),
// 		  ne = crs.project(bounds.getNorthEast()),
// 		  obj = {
// 			service: "WMS",
// 			version: versions[0],
// 			request: "GetFeatureInfo",
// 			layers: layers,
// 			bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y,
// 			width: size.x,
// 			height: size.y,
// 			query_layers: layers,
// 			info_format: "application/json", 
// 			feature_count: 1
// 		  };
// 		if (parseFloat(obj.version) >= 1.3) {
// 		  obj.crs = crs.code;
// 		  obj.i = Math.round(xy.x);
// 		  obj.j = Math.round(xy.y);
// 		} else {
// 		  obj.srs = crs.code;
// 		  obj.x = Math.round(xy.x);
// 		  obj.y = Math.round(xy.y);
// 		}
// 		$.ajax({
// 		  url: owsURI + L.Util.getParamString(obj, owsURI, true),
// 		  beforeSend:function(){
// 			$('#loader').show();
// 		  },
// 		  success: function(data, status, xhr) {
// 			$('#loader').hide();
// 			var html = "<table  class='table table-striped'>";
// 			if (data.features) {
// 			 var features = data.features;
// 			  if (features.length) {
// 				for (var i in features) {
// 				  var feature = features[i];                     
// 				  var properties=feature.properties;
// 				  html+='<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>';
// 				  for (var x in properties) {
// 					  html+='<tr><th>'+x+'</th><td>'+properties[x]+'</td></tr>';
// 				  }
// 				  html+='</tbody></table>';
// 				}
// 			  } else {
// 				html += "No Features Found.";
// 			  }
// 			} else {
// 			  html += "Failed to Read the Feature(s).";
// 			}
// 			map.openPopup(html, loc,{maxHeight:500});
// 		  },
// 		  error: function(xhr, status, err) {
// 			html += "Unable to Complete the Request.: " + err;
// 			map.openPopup(html, loc);
// 		  }
// 		});
// 	});

// 	function set_cql(textInput,greaterLess, numberInput, typeOfQuery) {
// 		var cql_filter = [];
// 		if (textInput){
// 			cql_filter.push("mun_name LIKE '%"+textInput+"%'")
// 		}
// 		if (numberInput){
// 			cql_filter.push(typeOfQuery+" "+greaterLess+" "+numberInput)
// 		}
		
// 		if (cql_filter.length == 2){
// 			cql_filter.splice(1, 0, "AND");
// 		}
// 		if (cql_filter.length==0){
// 			cql_filter.push("1=1")
// 		}

// 		municipalities.setParams({
// 			CQL_FILTER: cql_filter.join(' ')
// 		})
// 		wfsRequest(cql_filter.join(' '));
// 	}
	
// 	$('#btnGo').click(function(){
// 		var textInput = $('#textInput').val();
// 		var greaterLess = $('#greaterLess').val();
// 		var numberInput = $('#numberInput').val();
// 		var typeOfQuery = $('#typeOfQuery').val();
// 		WFSLayer = null;
// 		set_cql(textInput.toUpperCase(),greaterLess, numberInput, typeOfQuery);
// 		map.closePopup();
// 	})
// 	$('#btnClear').click(function(){
// 		$('#textInput').val('');
// 		$('#numberInput').val('');
// 		municipalities.setParams({
// 			CQL_FILTER: '1=1',
// 		})
// 		map.closePopup();
// 		WFSLayer = null;
// 		map.setView([9.1204, 125.59], 8);
// 	})