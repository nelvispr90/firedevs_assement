const speeds = {
    fast: 10000,
    slow: 15000,
    default: 12000
};

function getAlertWithType(type, alert) {
    switch (type) {
        case "info":
            alert.addClass("alert-info");
            alert.find("strong").append("Info!");
            break;
        case "success":
            alert.addClass("alert-success");
            alert.find("strong").append("Success!");
            break;
        case "error":
            alert.addClass("alert-danger");
            alert.find("strong").append("Error!");
            break;
        default:
            alert.addClass("alert-warning");
            alert.find("strong").append("Warning!");
    }
    return alert;
}

function getSpeedForAnimate(speed_label) {
    let speed;
    switch (speed_label) {
        case "fast":
            speed = speeds.fast;
            break;
        case "slow":
            speed = speeds.slow;
            break;
        default:
            speed = speeds.default;
    }
    return speed;
}

function createAlert() {
    return $("<div class=\"alert alert-block col\">\
                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\
                <strong></strong><span class=\"ml-1\"></span>\
            </div>");
}

$(function appendAlertsContainer() {
    $(document).ready(function() {
        let container = $("<div id=\"alerts\" class=\"row\">\
               <div id=\"alerts-container\" class=\"col col-md\">\
               </div>\
            </div>");
        $('body').append(container);
    });
});

function createAlertContainer() {
    return $("<div id=\"alert-container\" class=\"row\"></div>");
};

function showAlert(type, text, speed_label) {
    $(document).ready(function() {
        let container = createAlertContainer();
        let alert = createAlert();

        alert = getAlertWithType(type, alert);
        let speed = getSpeedForAnimate(speed_label);
        alert.find("span").append(text);

        container.append(alert);
        $("#alerts div#alerts-container").append(container);

        alert.on('close.bs.alert', function() {
            parent = alert.parent();
            parent.remove();
        });

        alert.animate({
            opacity: [-0.25, "linear"]
        }, speed, function() {
            alert.alert('close');
        });
    });
};