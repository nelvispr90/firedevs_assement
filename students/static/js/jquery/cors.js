(function($) {
    $.fn.enableCors = function() {
        $.ajaxPrefilter(function(options) {
            if (options.crossDomain) {
                console.log(options)
                options.url = "http://cors.corsproxy.io/url=" + options.url;
            }
        });
        return this;
    };
}(jQuery));