$(function() {
    /*
    if (new Date().getHours() >= 12) {
        $("#show").append("下午");
    } else {
        $("#show").append("上午");
    }
    */
    $("#show").append(new Date().getHours() >= 12 ? "下午" : "上午");
});