$(function () {
    for (var i = 0; i <= 100; i++) {
        var number = i;
        var output = "<li><a>" + number + "的平方是" + (number * number) + "</a></li>";
        $("ul").append(output);
    }
});