$(function() {
    $.getJSON("data.json", function(data) {
        $.get("template.html", function(html) {
            $("#list").html(render(html, data));
        });
    });
    
});