$(function() {
    var json;
    function show(data) {
        $.get("template.html", function(html) {
            $("#list").html(render(html, data));
        });
    }
    $.getJSON("data.json", function(data) {
        json = data;
        show(json);
    });
    $("#search").keyup(function() {
        show(json.filter(function(a) {
            var name = a.name.toLowerCase();
            var search = $("#search").val().toLowerCase();
            return name.indexOf(search) > -1;
        }));
    });
});