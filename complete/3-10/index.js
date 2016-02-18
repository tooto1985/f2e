$(function() {
    var json;
    function show(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td>" + data[i].date + "</td>";
            html += "<td>" + data[i].className + "</td>";
            html += "<td>" + data[i]["peoples"] + "</td>";
            html += "</tr>";
        }
        $("#content").html(html);
    }
    $.getJSON("data.json", function(data) {
        json = data;
        show(json);
    });
    $(".bordered th").click(function() {
        var $this = $(this);
        $(".bordered th").not($this).removeClass();
        if ($this.hasClass("up")) {
            $this.removeClass().addClass("down");
        } else {
            $this.removeClass().addClass("up");
        }
        var key = $this.data("key");
        var direction = $this.attr("class");
        sort(key, direction);
        show(json);
    });
    function sort(key, direction) {
        json.sort(function(a, b) {
            if (direction == "up") {
                if (a[key].customSort() > b[key].customSort()) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (a[key].customSort() < b[key].customSort()) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
    }
});

String.prototype.customSort=function() {
    return this.replace("一","1").replace("二","2").replace("三","3").replace("四","4").replace("五","5");
};