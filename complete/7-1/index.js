$(function() {
    var $content = $("#content");
    $content.html($content.html().replace(/(手機[^，。、]*)/g, "<span>$1</span>"));
});