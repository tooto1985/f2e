function callback(data) {
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