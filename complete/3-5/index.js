$(function() {
    $.getJSON("data.json", function(data) {
        var html = "";
        var navi = "";
        for (var i = 0; i < data.length; i++) {
            html += "<div>";
            html += "<a href=\"" + data[i][1] + "\" target=\"_blank\"><img src=\"" + data[i][0] + "\"></a>";
            html += "</div>";
            navi += "<span";
            if (i == 0) {
                navi += " class=\"active\"";
            }
            navi += "></span>";
        }
        $(".inbox").html(html);
        $(".navi").html(navi);
        //$(".scrollable").scrollable({ circular: true }).autoscroll({ interval: 2000 }).navigator();
        $(".inbox").append($(".inbox>div").first().clone());
        var index = 0;
        function run() {
            if (!$(".inbox").is(":animated")) {
                $(".inbox").animate({left: "-=800"}, function() {
                    if (index >= data.length - 1) {
                        index = -1;
                        $(this).css("left", 0);
                    }
                    index++;
                    dot();
                });
            }
        }
        var sid = setInterval(run, 2000);
        $(".inbox,.navi,.prev,.next").mouseenter(function() {
            clearInterval(sid);
        });
        $(".inbox,.navi,.prev,.next").mouseleave(function() {
            sid = setInterval(run, 2000);
        });
        function dot() {
            $(".navi>span.active").removeClass();
            $(".navi>span").eq(index).addClass("active");
        }
        function back() {
            if (!$(".inbox").is(":animated")) {
                if (index <= 0) {
                    index = data.length;
                    $(".inbox").css("left", data.length * -800);
                }
                $(".inbox").animate({left: "+=800"}, function() {
                    index--;
                    dot();
                });
            }
        }
        $(".next").click(function() {
            run();
        });
        $(".prev").click(function() {
            back();
        });
        $(".navi>span").click(function() {
            index = $(this).index();
            $(".inbox").animate({left: index * -800}, function() {
                dot();
            });
        });
    });
});