$(function() {
    $("#text").keyup(function() {
        var $this = $(this);
        var value = $this.val();
        var regexp = new RegExp($("#regexp").val(), "g");
        $this.removeClass();
        if (value) {
            $this.addClass(regexp.test(value) ? "yes" : "no");
        }
    });
});