$(function() {
	var text = "PC";
    if (/android/i.test(navigator.userAgent)) {
    	text = "Android";
    } else if (/iphone/i.test(navigator.userAgent)) {
    	text = "iPhone";
    }
    $("body").append("<div>" + text + "版網頁</div>");
});