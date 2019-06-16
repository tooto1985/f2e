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
        var search = $(this).val().toLowerCase();
        show(json.filter(function(user) {
            var name = user.name.toLowerCase();
            return name.indexOf(search) > -1;
        }));
    });
});