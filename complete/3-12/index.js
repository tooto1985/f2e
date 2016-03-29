$(function() {
    var json;
    var pagerCount = 5; //每頁顯示幾筆
    var currentIndex = 1; //目前在第幾頁

    function show(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td><a href=\"" + data[i].url + "\">" + data[i].title + "</a></td>";
            html += "</tr>";
        }
        $("#content").html(html);
    }

    $.getJSON("data.json", function(data) {
        json = data;
        show(pager(json, pagerCount, currentIndex));
    });

    function pager(data, count, index) {
        return data.filter(function(a) {
            var i = data.indexOf(a); //目前資料的索引位置
            return i >= count * (index - 1) && i < count * index;
        });
    }

    $("#first").click(function() {
        currentIndex = 1;
        show(pager(json, pagerCount, currentIndex));
    });
    $("#prev").click(function() {
        currentIndex--;
        if (currentIndex < 1) {
            currentIndex = 1;
            alert("沒有上一頁了");
        } else {
            show(pager(json, pagerCount, currentIndex));
        }
    });
    $("#next").click(function() {
        currentIndex++;
        var maxPagerIndex = Math.ceil(json.length / pagerCount);
        if (currentIndex > maxPagerIndex) {
            currentIndex = maxPagerIndex;
            alert("沒有下一頁了");
        } else {
            show(pager(json, pagerCount, currentIndex));
        }
    });
    $("#last").click(function() {
        currentIndex = Math.ceil(json.length / pagerCount);
        show(pager(json, pagerCount, currentIndex));
    });
});