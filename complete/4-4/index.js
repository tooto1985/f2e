$(function() {
    function getTop(index,top) {
        if (top < 0) {
            return index * 30;
        } else if (top >= 300) {
            return (index - 9) * 30;
        }
    }
    function getAdd(index, keyCode) {
        if (keyCode == 40) {
            return ++index;
        }
        return --index;
    }
    $("#search").keydown(function(e) {
        if (e.keyCode == 40 || e.keyCode == 38) {
            var index = getAdd($("a.selected").removeClass().index(),e.keyCode);
            if (index>=$(".list>a").length) {
                index=0;
            }
            var top = $(".list>a").eq(index).addClass("selected").position().top;
            $(".list").scrollTop(getTop(index,top));
        }
        if (e.keyCode == 13) {
            $("a.selected").click();
        }
    });
    $(".list").on("mouseenter click","a",function(e) {
        if (e.type=="click") {
            $("#search").val($("a.selected").text());
            $(".list").hide();
        } else {
            $("a.selected").removeClass();
            $(this).addClass("selected");            
        }
    });
    $("#search").keyup(function(e) {
        if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13) {
            var value = $(this).val().trim();
            if (value) {
                $.getJSON("http://tw.somee.com/demo/4-4/data.ashx", {
                    search: value
                }, function(data) {
                    if (data.length > 0) {
                        var html = "";
                        for (var i = 0; i < data.length; i++) {
                            html += "<a>" + data[i] + "</a>";
                        }
                        $(".list").html(html).show();
                    } else {
                        $(".list").hide();
                    }
                });
            } else {
                $(".list").hide();
            }
        }
    });
});