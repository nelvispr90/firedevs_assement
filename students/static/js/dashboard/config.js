/** This script is to load configuration preset to initialize dashboard.
 *  Accesibles const:
 *  config 
 *  map view
 *  group_base
 *  projections
 */


const config = function() {
    return loadJSON('/static/data_annotator/config/config.json');
}();

//Config for Openlayers Map
const map_view = config.map_view;

//Base Maps for Openlayers Map
const group_base = function createGroupBaseLayer() {
    let layers = [];
    config.base_layers.forEach(base_layer => {
        layers.push(createBaseLayer(base_layer.base_layer));
    });

    return new ol.layer.Group({
        // A layer must have a title to appear in the layerswitcher
        title: 'Base Maps',
        fold: 'open',
        layers: layers
    })
}();

function createBaseLayer(base_layer) {
    var layer = null;
    switch (base_layer.type) {
        case 'Tile':
            layer = createBaseTileLayer(base_layer);
            break;
            // Add more cases for other layer types.
    }
    return layer;
};

function createBaseTileLayer(base_layer) {
    var layer = new ol.layer.Tile({
        title: base_layer.title,
        type: 'base',
        visible: base_layer.is_visible,
        source: createSourceBaseTileLayer(base_layer),
    });

    return layer;
};

function createSourceBaseTileLayer(base_layer) {
    var source = null;
    switch (base_layer.source_type) {
        case 'XYZ':
            source = new ol.source.XYZ({
                url: base_layer.url,
                attributions: base_layer.attributions
            });
            break;
        case 'OSM':
            source = new ol.source.OSM();
            break;
            // Add more cases for other source types, for example WMTS source type.
    }

    return source;
};

//Projections to draw layer in the map
const projections = function() {
    var projections = [];
    config.projections.forEach(projection => {
        projections.push(projection.code);
    });
    return projections;
}();