$(function() {
    var data = ["John", "Tom", "Mark", "Allen", "Peter", "David"];
    $("ul").append("<li class=\"nav-header\">員工名單</li>");
    $("ul").append("<hr>");
    for (var i = 0, max = data.length; i < max; i++) {
        $("ul").append("<li><a>" + data[i] + "</a></li>");
    }
});