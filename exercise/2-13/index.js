$(function() {
    $(window).scroll(function() {
        $("#show").text($(this).scrollTop());
        console.log($(this).scrollTop());
    }).scroll();
});