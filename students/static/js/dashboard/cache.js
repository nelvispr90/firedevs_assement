const default_cache = {
    //set this property logged user
    user: "jhon_doe",
    project: "",
    drones_imageset_date: "",
    sentinel_dataset: "",
    map_view: {
        view_center: {
            lon: map_view.view_center.lon,
            lat: map_view.view_center.lat
        },
        projection: map_view.default_projection,
        zoom: map_view.zoom
    },
    // cache_path: null
    //other coming soon
};

var cache = function init_cache() {
    return load_cache(default_cache)
}();


function load_cache(data) {
    var csrftoken = getCookie('csrftoken');
    var cache_json = null;
    $.ajax({
        'async': false,
        'cache': false,
        'global': false,
        'type': 'POST',
        'url': '/cache',
        'contentType': 'application/json; charset=utf-8',
        'dataType': "json",
        'data': JSON.stringify(data),
        'beforeSend': function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        'success': function(data) {
            cache_json = data;
        }
    });
    return cache_json;
}

function overwrite_cache(data) {
    let csrftoken = getCookie('csrftoken');
    let cache_json = null;
    $.ajax({
        'async': false,
        'cache': false,
        'global': false,
        'type': 'POST',
        'url': '/cache/overwrite',
        'contentType': 'application/json; charset=utf-8',
        'dataType': "json",
        'data': JSON.stringify(data),
        'beforeSend': function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
        },
        'success': function(data) {
            cache_json = data;
        }
    });
    return cache_json;
}