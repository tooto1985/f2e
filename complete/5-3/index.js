$(function() {
    $.ajax({
        url: "//json2jsonp.com/?url=http%3A%2F%2Fdata.taipei%2Fopendata%2Fdatalist%2FapiAccess%3Fscope%3DresourceAquire%26rid%3D24c9f8fe-88db-4a6e-895c-498fbc94df94",
        dataType: "jsonp",
        success: function(data) {
            var source = data.result.results;
            $("#search").keyup(function() {
                var val = $(this).val();
                var html = "";
                if (val) {
                    var show = source.filter(function(a) {
                        return a.o_tlc_agency_name.indexOf(val) > -1;
                    });
                    for (var i = 0; i < show.length; i++) {
                        html += "<div>";
                        html += "<div>" + show[i].o_tlc_agency_name + "</div>";
                        html += "<a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q=" + show[i].o_tlc_agency_address + "\" target=\"_blank\">" + show[i].o_tlc_agency_address + "</a>";
                        html += "</div>";
                    }
                }
                $("#list").html(html);
            });
        }
    });
});