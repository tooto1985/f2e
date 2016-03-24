$(function() {
    $.ajax({
        url: "//json2jsonp.com/?url=http%3A%2F%2Fdata.taipei%2Fopendata%2Fdatalist%2FapiAccess%3Fscope%3DresourceAquire%26rid%3D42cfc382-f2b8-4c3a-87ad-37249634f78e",
        dataType: "jsonp",
        success: function(data) {
            var source = data.result.results;
            $("#search").keyup(function() {
                var val = $(this).val();
                var html = "";
                if (val) {
                    var show = source.filter(function(a) {
                        return a.addr.indexOf(val) > -1 || a.name.indexOf(val) > -1;
                    });
                    for (var i = 0; i < show.length; i++) {
                        html += "<div>";
                        html += "<div>" + show[i].name + "</div>";
                        html += "<a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q=" + show[i].addr + "\" target=\"_blank\">" + show[i].addr + "</a>";
                        html += "</div>";
                    }
                }
                $("#list").html(html);
            });
        }
    });
});