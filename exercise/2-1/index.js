$(function() {
    $("#add").click(function() {
        $(".box").append("<input type=\"button\" class=\"btn btn-info btn-lg\" value=\"第" +  + "個按鈕\"/><br>");
    });
});