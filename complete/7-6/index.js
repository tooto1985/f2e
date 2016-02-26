$(function() {
    $("#text").keyup(function() {
        var $this = $(this);
        var value = $this.val();
        $this.removeClass();
        if (value) {
            $this.addClass(new RegExp($("#regexp").val(), "g").test(value) ? "yes" : "no");
        }
    });
});