$(function() {
    $.getJSON("/api/4-5", function (data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<div>";
            html += "<div>" + data[i].title + "</div>";
            html += "<div>" + data[i].content + "</div>";
            html += "</div>";
        }
        $(".box").append(html);
    });
});