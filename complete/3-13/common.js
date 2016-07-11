$(function() {
    function build(data, parent) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            if (data[i].parent == parent) {
                html += "<li>";
                html += "<a href=\"" + data[i].url + "\">" + data[i].name + "</a>";
                html += "<ul>" + build(data, data[i].id) + "</ul>";
                html += "</li>";
            }
        }
        return html;
    }
    $.getJSON("data.json", function(data) {
        $(".navigation").html(build(data, 0));
    });
    $(".navigation").on("mouseenter", "a", function() {
        var $parent = $(this).parent();
        var link = "";
        while (!$parent.hasClass("navigation")) {
            if ($parent.is("li")) {
                link = "＞" + $parent.find(">a").text() + link;
            }
            $parent = $parent.parent();
        }
        $(".link").html(link.substr(1));
    });
});
