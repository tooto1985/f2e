$(function() {
    var $content = $("#content");
    $content.html(function(index, oldhtml) {
    	return oldhtml.replace(/(手機[^，。、]*)/g, "<span>$1</span>");
    });
});