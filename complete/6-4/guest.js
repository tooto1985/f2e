var name = "訪客人數";
var count = 25;
$(function () {
    console.time("6-4-a");
    $("ul").append("<li><a>" + name + "：" + count + "人</a></li>");
    console.timeEnd("6-4-a");
});
