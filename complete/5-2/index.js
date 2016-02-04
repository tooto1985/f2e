function callback(data) {
    $("#search").keyup(function() {
        var val = $(this).val();
        var html = "";
        if (val) {
            var show = data.filter(function(a) {
                return a.addr.indexOf(val) > -1 || a.name.indexOf(val) > -1;
            });
            for (var i = 0; i < show.length; i++) {
                html += "<div>";
                html += "<div>" + show[i].name + "</div>";
                html += "<div>" + show[i].addr + "</div>";
                html += "</div>";
            }
        }
        $("#list").html(html);
    });
}