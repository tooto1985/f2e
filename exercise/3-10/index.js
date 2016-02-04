$(function() {
    $.getJSON("data.json", function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td>" + data[i].date + "</td>";
            html += "<td>" + data[i].className + "</td>";
            html += "<td>" + data[i]["peoples"] + "</td>";
            html += "</tr>";
        }
        $("#content").html(html);
    });
});