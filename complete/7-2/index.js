$(function() {
    var $content = $("#content");
    $("#count").text($content.html().match(/(手機[^，。、]*)/g).length);
    $content.html($content.html().replace(/(手機[^，。、]*)/g, "<span>$1</span>"));
});