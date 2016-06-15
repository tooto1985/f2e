$(function() {
	$("#menu").load("menu.html", function() {
		$(this).find("a").on("mouseenter mouseleave", function() {
			var temp = $(this).text();
			$(this).text($(this).data("english"));
			$(this).data("english", temp);
		});
	});
});