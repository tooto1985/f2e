var Slide = (function () {
    function Slide(data) {
        this.data = data;
        this.index = 0;
    }
    Slide.prototype.next = function () {
        this.index++;
        if (this.index >= this.data.length) {
            this.index = 0;
        }
        return this.index;
    }
    Slide.prototype.back = function () {
        this.index--;
        if (this.index < 0) {
            this.index = this.data.length - 1;
        }
        return this.index;
    }
    Slide.prototype.setIndex = function (value) {
        this.index = value;
        return this.index;
    }
    return Slide;
})();
$(function () {
    function show(data) {
        var html = "";
        html += "<div>";
        html += "<a href=\"" + data[1] + "\" target=\"_blank\"><img src=\"" + data[0] + "\"></a>";
        html += "</div>";
        return html;
    }
    function dot(index) {
        $(".navi>span.active").removeClass();
        $(".navi>span").eq(index).addClass("active");
    }
    $.getJSON("data.json", function (data) {
        var slide = new Slide(data);
        $(".next").click(function () {
            if (!$(".inbox").is(":animated")) {
                slide.next();
                $(".inbox").animate({ left: "-=800" }, function () {
                    if (slide.index === 0) {
                        $(this).css("left", 0);
                    }
                    dot(slide.index);
                });
            }
        });
        $(".prev").click(function () {
            if (!$(".inbox").is(":animated")) {
                if (slide.index === 0) {
                    $(".inbox").css("left", slide.data.length * -800);
                }
                slide.back();
                $(".inbox").animate({ left: "+=800" }, function () {
                    dot(slide.index);
                });
            }
        });
        $(".navi").on("click", ">span" ,function () {
            if (!$(".inbox").is(":animated")) {
                $(".inbox").animate({ left: slide.setIndex($(this).index()) * -800 }, function () {
                    dot(slide.index);
                });
            }
        });
        (function () {
            for (var i = 0; i <= slide.data.length; i++) {
                var index = i;
                if (i === slide.data.length) {
                    index = 0;
                }
                $(".inbox").append(show(slide.data[index]));
                if (i < slide.data.length) {
                    var $span = $("<span>");
                    if (i === 0) {
                        $span.addClass("active");
                    }
                    $(".navi").append($span);
                }
            }
            var sid = setInterval(function() {
                $(".next").click()
            }, 3000);
            $(".inbox,.prev,.next,.navi").hover(function() {
                clearInterval(sid);
            }, function() {
                sid = setInterval(function() {
                    $(".next").click()
                }, 3000);
            })
        })(); //init
    });
});