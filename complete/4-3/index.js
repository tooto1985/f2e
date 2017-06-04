$(function() {
    $("#search").keyup(function() {
        var value = $(this).val().trim();
        if (value) {
            $.getJSON("/api/4-3", {
                    search: value
                }, function(data) {
                    if (data.length) {
                        var html = "";
                        for (var i = 0; i < data.length; i++) {
                            html += "<a>" + data[i] + "</a>";
                        }
                        $(".list").html(html).show();
                    } else {
                        $(".list").hide();
                    }
                });
        } else {
            $(".list").hide();
        }
    });
});