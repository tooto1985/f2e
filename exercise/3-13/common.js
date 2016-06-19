$(function() {
    function build(data, parent) {










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
