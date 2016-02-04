$(function() {
	$(".menu>a").click(function(e) {
		$(".menu>a.selected").removeClass();
		$(this).addClass("selected");
		$(".content").load($(this).attr("href"));
		e.preventDefault();
	}).first().click();
});