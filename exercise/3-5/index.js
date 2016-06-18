$(function() {
    $.getJSON("data.json", function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<div>";
            html += "<a href=\"" + data[i][1] + "\" target=\"_blank\"><img src=\"" + data[i][0] + "\"></a>";
            html += "</div>";
        }
        $(".inbox").html(html);
        //$(".scrollable").scrollable({ circular: true }).autoscroll({ interval: 2000 });
        $(".inbox").append($(".inbox>div").first().clone());
        var index = 0;
        function run() {
            $(".inbox").animate({left: "-=800"}, function() {
                if (index >= data.length - 1) {
                    index = -1;
                    $(this).css("left", 0);
                }
                index++;
            });
        }
        var sid = setInterval(run, 2000);
        $(".inbox").hover(function() {
            clearInterval(sid);
        },function() {
            sid = setInterval(run, 2000);
        });
    });
});