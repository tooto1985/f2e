$(function() {
    var json;
    function show(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<tr>";
            html += "<td>" + data[i]["date"] + "</td>";
            html += "<td>" + data[i]["className"] + "</td>";
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
        $this.siblings().removeClass();
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
                if (a[key] > b[key]) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (a[key] < b[key]) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
    }
    function customSort(input) {
        if (typeof input == "string") {
            input = input.replace("一","1");
            input = input.replace("二","2");
            input = input.replace("三","3");
            input = input.replace("四","4");
            input = input.replace("五","5");
        }
        return input;
    }
});