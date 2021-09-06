$(function init() {
    // Logged user.
    const logged_user = cache.user;
    $('#nb-user').val(logged_user);

    showDialogModal("Load cache", "Do you wish load configurations cache of dashboard from previously work?", dont, ok);

});

dont = (modal) => {
    return function() {
        _calls.hide(modal)();
        cache = overwrite_cache(default_cache);
        map.init();
        wb.init();
        sb.init();
        showAlert("warning", "Old cache removed.")
        showAlert("info", "New cache created successfully.")
    }
};

ok = (modal) => {
    return function() {
        _calls.hide(modal)();
        map.init();
        wb.init();
        sb.init();
        showAlert("info", "Cache loaded successfully.");
    }
};

//Set Workbench
var wb = {
    init: function() {
        var select_project = $('#wb-project')
        initSelect(select_project, $('#wb-project option'), cache.project);
        select_project.bind('change', function(e) {
            cache.project = e.target.value;
            overwrite_cache(cache);
            showAlert("info", "Project select")
        });

        var select_date_drones = $('#wb-date-drones')
        initSelect(select_date_drones, $('#wb-date-drones option'), cache.drones_imageset_date);
        select_date_drones.bind('change', function(e) {
            cache.drones_imageset_date = e.target.value;
            overwrite_cache(cache);
        });

        var select_dataset_sentinel = $('#wb-sentinel-dataset')
        initSelect(select_dataset_sentinel, $('#wb-sentinel-dataset option'), cache.sentinel_dataset);
        select_dataset_sentinel.bind('change', function(e) {
            cache.sentinel_dataset = e.target.value;
            overwrite_cache(cache);
        });
    }
};

//Set Statebar
var sb = {
    init: function() {
        // Fill select field on statebar
        var select_projection = $('#sb-projection')
        fillSelect(select_projection, projections);
        initSelect(select_projection, $('#sb-projection option'), cache.map_view.projection)
            //other
    }
};

//Set Toolbar
// var tb = {
//     take_sample: function() {
//         $("#map").bind('click', function(e) {
//             console.log($('#sb-mouse-position .sb-coordinate').html())
//             coordinate = $('#sb-mouse-position .sb-coordinate').html();
//             return coordinate;
//         })
//     }
// };