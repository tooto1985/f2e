$(function () {
    function salary(day) {
        var money = 35000;
        var pay = money / 30;
        var cut = pay * day;
        cut = parseInt(cut, 10);
        return cut;
    }
    for (var i = 0; i <= 30; i++) {
        var day = i;
        var output = "<li><a>請假" + day + "日扣薪水" + salary(day) + "元</a></li>";
        $("ul").append(output);
    }
});