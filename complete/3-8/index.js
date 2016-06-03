$(function() {
    var json;
    function show(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<div>";
            html += "<div>員工基本資料</div>";
            html += "<div>姓名：" + data[i].name + "</div>";
            html += "<div>年齡：" + data[i].age + "</div>";
            html += "<div>技能：" + data[i].skill + "</div>";
            html += "<div>職稱：" + data[i].title + "</div>";
            html += "<div>年資：" + data[i].year + "</div>";
            html += "</div>";
        }
        $("#list").html(html);
    }
    $.getJSON("data.json", function(data) {
        json = data;
        show(json);
    });
    $("#search").keyup(function() {
        show(json.filter(function(a) {
            var name = a.name.toLowerCase();
            var search = $("#search").val().toLowerCase();
            return name.indexOf(search) > -1;
        }));
    });
});