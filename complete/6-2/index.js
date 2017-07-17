$(function() {
    console.time("6-2-a");
    if (new Date().getHours() >= 12) {
        $("#show").text("下午");
    } else {
        $("#show").text("上午");
    }
    console.timeEnd("6-2-a");
    console.time("6-2-b");
    $("#show").text(new Date().getHours() >= 12 ? "下午" : "上午");
    console.timeEnd("6-2-b");
});