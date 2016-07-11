(function($) {
	




})(jQuery);
$(function() {
    $("input").keyup(function() {
        var count = $("input:hasValue").length;
        $("#show").html("目前有" + count + "個欄位有值").show();
        count >= 3 ? $("button").show() : $("button").hide();
    });
});