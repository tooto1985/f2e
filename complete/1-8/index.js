﻿$(window).load(function() {
    $(".loading").fadeOut();
});
$(function() {
    var progress = 0;
    $("img").load(function() {
        progress += 100 / $("img").length;
        var percent = Math.round(progress) + "%";
        $(".txt").text(percent);
        $(".bar").width(percent);
    });
});