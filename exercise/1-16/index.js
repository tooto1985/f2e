$(function() {
	$("#out").mouseover(function() {
		$("#left").append("#out mouseover<br>");
	});
	$("#out").mouseout(function() {
		$("#left").append("#out mouseout<br>");
	});
	$("#in").mouseover(function() {
		$("#left").append("#in mouseover<br>");
	});
	$("#in").mouseout(function() {
		$("#left").append("#in mouseout<br>");
	});
	$("#out").mouseenter(function() {
		$("#right").append("#out mouseenter<br>");
	});
	$("#out").mouseleave(function() {
		$("#right").append("#out mouseleave<br>");
	});
	$("#in").mouseenter(function() {
		$("#right").append("#in mouseenter<br>");
	});
	$("#in").mouseleave(function() {
		$("#right").append("#in mouseleave<br>");
	});
	$(document).click(function() {
		$("#left,#right").text("");
	});
});