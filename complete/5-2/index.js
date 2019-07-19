function callback(data) {
    $("#search").keyup(function() {
        var val = $(this).val();
        var html = "";
        if (val) {
            var show = data.filter(function(a) {
                return a.name.indexOf(val) > -1 || a.cityName.indexOf(val) > -1 || a.address.indexOf(val) > -1;
            });
            for (var i = 0; i < show.length; i++) {
                html += "<div>";
                html += "<div>" + show[i].name + "</div>";
                html += "<a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q=" + show[i].cityName + show[i].address + "\" target=\"_blank\">" + show[i].cityName + show[i].address + "</a>";
                html += "</div>";
            }
        }
        $("#list").html(html);
    });
}