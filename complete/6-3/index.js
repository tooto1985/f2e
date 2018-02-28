$(function() {
    var hours = new Date().getHours();
    /*
    if (hours < 6) {
        $("#show").text("凌晨");
    } else if (hours < 12) {
        $("#show").text("上午");
    } else if (hours < 18) {
        $("#show").text("下午");
    } else {
        $("#show").text("傍晚");
    }
    */
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
});