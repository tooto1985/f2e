$(function() {
    $(".menu>a").click(function(e) {
        $(".menu>a.selected").removeClass();
        $(".content").load($(this).addClass("selected").attr("href"));
        location.hash = $(this).text();
        e.preventDefault();
    }).filter(":contains('" + (location.hash.substr(1) || $(".menu>a").first().text()) + "')").click();
    $(window).on("hashchange", function() {
        $(".menu>a").filter(":contains('" + (location.hash.substr(1) || $(".menu>a").first().text()) + "')").click();
    });
});