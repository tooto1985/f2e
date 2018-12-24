$(function() {
    $(".menu>a").click(function(e) {
        $(".menu>a.selected").removeClass();
        $(".content").load($(this).addClass("selected").attr("href"));
        location.hash = $(this).attr("href");
        e.preventDefault();
    });
    $(window).on("hashchange", function() {
        $(".menu>a").filter("[href='" + (location.hash.substr(1) || $(".menu>a").attr("href")) + "']").click();
    }).trigger("hashchange");
});