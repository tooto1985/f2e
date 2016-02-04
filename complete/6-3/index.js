$(function() {
    var hours = new Date().getHours();
    /*
    if (hours < 6) {
        $("#show").append("凌晨");
    } else if (hours < 12) {
        $("#show").append("上午");
    } else if (hours < 18) {
        $("#show").append("下午");
    } else {
        $("#show").append("傍晚");
    }
    */
    switch (true) {
        case hours < 6:
            $("#show").append("凌晨");
            break;
        case hours < 12:
            $("#show").append("上午");
            break;
        case hours < 18:
            $("#show").append("下午");
            break;
        default:
            $("#show").append("傍晚");
    }
});