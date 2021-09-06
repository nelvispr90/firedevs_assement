// const geonetwork_query_endpoint = "https://cig.geocuba.cu/geonetwork/srv/eng/q?"

var params = {
    any: "sentinel",
    creation_date_from: "2021-01-01",
    creation_date_to: "2021-03-04",
    bbox: "geometry=",
    content_type: "json",
    fast: "fast=index",
    sort_by: "changeDate",
    from: "1",
    to: "5",
    sort_order: "reverse"

}
var query_url = createQueryUrl(params);

// var result = query(query_url);
// console.log(result);

function createQueryUrl(params) {
    // let query_url = geonetwork_query_endpoint;
    let query_url = "";
    query_url = query_url.concat("any=", params.any);
    query_url = query_url.concat("&", "_content_type=", params.content_type);
    query_url = query_url.concat("&", "creationDateFrom=", params.creation_date_from);
    query_url = query_url.concat("&", "creationDateTo=", params.creation_date_to);
    query_url = query_url.concat("&", "sortBy=", params.sort_by);
    // query_url = query_url.concat("&", "sortOrder=", params.sort_order);
    query_url = query_url.concat("&", "from=", params.from);
    query_url = query_url.concat("&", "to=", params.to);
    console.log(query_url);
    return query_url;
}

function query(query_url) {
    // let csrftoken = getCookie('csrftoken');
    let result = null;
    $.ajax({
        'async': false,
        'cache': false,
        'global': false,
        'type': 'GET',
        'url': '/corsproxy/geonetwork/query?' + query_url,

        'success': function(data, status, res) {
            // res.setResponseHeader('Access-Control-Allow-Origin', '*')
            result = data;
        }
    });
    return result;
};