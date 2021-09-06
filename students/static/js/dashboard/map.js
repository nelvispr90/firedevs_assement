var map = {
    init: function() {
        // Config map with preset parameter 
        var view = new ol.View({
            projection: cache.map_view.projection,
            center: [cache.map_view.view_center.lon, map_view.view_center.lat],
            zoom: cache.map_view.zoom
        });

        var map = new ol.Map({
            layers: [group_base],
            target: 'map',
            view: view
        });

        // Add control from ol-layerswitcher to group layer on map
        map.addControl(new ol.control.LayerSwitcher());

        // Create and add control to determinate mouse position
        let mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: cache.map_view.projection,
            className: 'sb-coordinate',
            target: document.getElementById('sb-mouse-position'),
            undefinedHTML: '0.0000,0.0000' //'&nbsp;',
        });

        // Bind projection select to mouse position control
        let projectionSelect = $('#sb-projection');
        projectionSelect.bind('change', function(e) {
            let current_projection = cache.map_view.projection;
            mousePositionControl.setProjection(e.target.value);
            cache.map_view.projection = e.target.value
            let center_coordinates = [cache.map_view.view_center.lon, cache.map_view.view_center.lat]
            center_coordinates = ol.proj.transform(
                center_coordinates,
                current_projection,
                e.target.value
            );
            cache.map_view.view_center.lon = center_coordinates[0];
            cache.map_view.view_center.lat = center_coordinates[1]
            overwrite_cache(cache);

            var reproject_view = new ol.View({
                projection: e.target.value,
                center: center_coordinates,
                zoom: cache.map_view.zoom
            });
            map.setView(reproject_view);
        });

        map.addControl(mousePositionControl);

    }
}