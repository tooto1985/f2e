$(function() {
	var text = "PC版網頁";
    if (/android/i.test(navigator.userAgent)) {
    	text = "Android版網頁";
    } else if (/iphone/i.test(navigator.userAgent)) {
    	text = "iPhone版網頁";
    }
    $("body").append("<div>" + text + "</div>");
});