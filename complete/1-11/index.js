$(function() {
	$(document).click(function() {
		$("#box").fadeOut();
	});
	$("#btn").click(function(e) {
		$("#box").fadeIn();
		e.stopPropagation();
	});
	$("#box").click(function(e) {
		e.stopPropagation();
	});
});