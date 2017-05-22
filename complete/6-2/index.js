$(function() {
    console.time("6-2-a");
    if (new Date().getHours() >= 12) {
        $("#show").append("下午");
    } else {
        $("#show").append("上午");
    }
    console.timeEnd("6-2-a");
    console.time("6-2-b");
    $("#show").append(new Date().getHours() >= 12 ? "下午" : "上午");
    console.timeEnd("6-2-b");
});