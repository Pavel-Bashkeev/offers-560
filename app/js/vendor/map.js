var iconFeature = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([37.628664, 55.751225], 'EPSG:4326', 'EPSG:3857')),
  name: 'Moscow',
  // population: 4000,
  // rainfall: 500
});

var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 1,
    src: 'images/marker.png'
  }))
});

iconFeature.setStyle(iconStyle);

var vectorSource = new ol.source.Vector({
  features: [iconFeature]
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});


var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([37.628664, 55.751225], 'EPSG:4326', 'EPSG:3857'),
    zoom: 12
  })
});

map.addLayer(vectorLayer);