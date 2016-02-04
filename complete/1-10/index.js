$(function() {
    $(window).load(function() {
        $(".loading").delay(500).fadeOut();
    });
    var add = 100 / $("img").length;
    var progress = 0;
    $("img").load(function() {
        progress += add;
        $(".txt").text(Math.round(progress) + "%");
        $(".bar").css("width", progress + "%");
    });
});