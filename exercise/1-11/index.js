$(function() {
    $("#menu").load("menu.html", function() {
        $("#menu a").on("mouseenter mouseleave click", function(e) {
            if (e.type != "click") {
                var temp = $(this).text();
                $(this).text($(this).data("english"));
                $(this).data("english", temp);
            } else {
                $(".content").load($(this).attr("href"));
                e.preventDefault();
            }
        });
    });
});