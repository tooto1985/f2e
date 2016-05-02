$(function() {
    var imgWidth = 400;
    var isResize;
    $(window).resize(function() {
        if (isResize != parseInt($(window).width() / imgWidth)) {
            var i = 0;
            var row = [];
            $("img").removeClass().removeAttr("style").each(function() {
                var $this = $(this);
                $("body").queue("load", function() {
                    var img = new Image();
                    img.onload = function() {
                        if (i >= parseInt($(window).width() / imgWidth)) {
                            var min = row.indexOf(Math.min.apply(null, row));
                            $this.css({
                                position: "absolute",
                                top: row[min],
                                left: min * imgWidth
                            });
                            row[min] += $this.height();
                        } else {
                            row.push($this.height());
                        }
                        i++;
                        $("body").dequeue("load");
                    };
                    img.src = $this.attr("src");
                });
            });
            $("body").dequeue("load");
            isResize = parseInt($(window).width() / imgWidth);
        }
    }).resize();
});