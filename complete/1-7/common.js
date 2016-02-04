$(function() {
    $(".menu>a").click(function(e) {
        $(".menu>a.selected").removeClass();
        $(this).addClass("selected");
        $(".content").load($(this).attr("href"));
        location.hash = $(this).index();
        e.preventDefault();
    }).eq(location.hash.substr(1)).click();
});