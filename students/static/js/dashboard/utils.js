const loadJSON = function(url) {
    var json = null;
    $.ajax({
        'async': false,
        'cache': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function(data) {
            json = data;
        }
    });
    return json;
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};
// This section is for function to manipulate form components
function fillSelect(select, valuesArray) {
    var options = '';
    valuesArray.forEach(value => {
        options += '<option value="' + value + '">' + value + '</option>';
    });
    select.append(options);
};

function initSelect(select, options, option_value) {
    $.each(options, function(idx, el) {
        option = $(el)
        if (option.val() == option_value) {
            option.attr('selected', true)
        }
        select.append(option)
    });
}

// let url = 'https://example.com';

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });

// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//         var status = xhr.status;
//         if (status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(status, xhr.response);
//         }
//     };
//     xhr.send();
// };

// getJSON('http://127.0.0.1:8000/static/data_annotator/js/dashboard/config/config.json',
//     function(err, data) {
//         if (err !== null) {
//             alert('Something went wrong: ' + err);
//         } else {
//             alert('Your query count: ' + data);
//         }
//     });