$(function() {
    $.getJSON("data.json", function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td><a href=\"" + data[i].url + "\">" + data[i].title + "</a></td>";
            html += "</tr>";
        }
        $("#content").html(html);
    });
});