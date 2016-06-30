$(function() {
    var $content = $("#content");
    var $count = $("#count");
    var html = $content.html();
    $("#search").keyup(function() {
    	var $this = $(this);
    	var value = $this.val();
    	var regexp = new RegExp("(?![^<]*>)("+value+")","g");
    	if (value) {
    		$count.text(html.match(regexp).length);
    		$content.html(html.replace(regexp, "<span>$1</span>"));	
    	} else {
    		$count.text(0);
    		$content.html(html);
    	}
    });
});