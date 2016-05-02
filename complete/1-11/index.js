$(function() {
    $("#menu").on("mouseenter mouseleave click", "a", function(e) {
        if (e.type != "click") {
            var temp = $(this).text();
            $(this).text($(this).data("english"));
            $(this).data("english", temp);
        } else {
            $(".content").load($(this).attr("href"));
            e.preventDefault();
        }
    });
    $("#menu").load("menu.html");
});