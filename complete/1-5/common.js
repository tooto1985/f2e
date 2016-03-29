$(function() {
    $(".menu").load("Menu.html", function() {
        var url = location.href;
        var href = url.substr(url.lastIndexOf("/") + 1);
        //var href = url.split("/").pop();
        $("a[href='" + (href || "index.html") + "']").addClass("selected");
    });
});
