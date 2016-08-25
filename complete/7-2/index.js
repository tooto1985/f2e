$(function() {
    var $content = $("#content");
	$content.html(function(index, oldhtml) {
		$("#count").text(oldhtml.match(/(手機[^，。、]*)/g).length);
    	return oldhtml.replace(/(手機[^，。、]*)/g, "<span>$1</span>");
    });
});