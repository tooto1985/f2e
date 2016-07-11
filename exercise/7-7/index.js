$(function() {
    var $content = $("#content");
    var $count = $("#count");
    var html = $content.html();
    $("#search").keyup(function() {
        var $this = $(this);
        var value = $this.val().trim();
        var regexp = new RegExp("(?![^<]*>)(" + value + ")", "igm");
        var match = html.match(regexp);
        if (value && match) {
            $count.text(match.length);
            $content.html(html.replace(regexp, "<span>$1</span>"));
        } else {
            $count.text(0);
            $content.html(html);
        }
    });
});