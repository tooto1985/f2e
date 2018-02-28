$(function() {
    /*
    if (new Date().getHours() >= 12) {
        console.log("下午");
    } else {
        console.log("上午");
    }
    */
    console.log(new Date().getHours() >= 12 ? "下午" : "上午");
});