$(function() {
    var hours = new Date().getHours();
    console.time("6-3-a");
    if (hours < 6) {
        $("#show").text("凌晨");
    } else if (hours < 12) {
        $("#show").text("上午");
    } else if (hours < 18) {
        $("#show").text("下午");
    } else {
        $("#show").text("傍晚");
    }
    console.timeEnd("6-3-a");
    console.time("6-3-b");
    switch (true) {
        case hours < 6:
            $("#show").text("凌晨");
            break;
        case hours < 12:
            $("#show").text("上午");
            break;
        case hours < 18:
            $("#show").text("下午");
            break;
        default:
            $("#show").text("傍晚");
    }
    console.timeEnd("6-3-b");
});