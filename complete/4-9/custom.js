(function($) {
    $.getJSON = function(url, data, callback) {
        if ($.isFunction(data)) {
            callback = data;
            data = undefined;
        }
        return $.ajax({
            url: url,
            data: data,
            xhrFields: { withCredentials: true },
            success: callback
        });
    };
})(jQuery);