$(function() {
	$.getJSON("data.json", function(data) {
		$("#image").attr("src",data.image);
		$("#username").text(data.username);
		$("#photos").prepend(data.photos);
		$("#followers").prepend(data.followers);
	});
});