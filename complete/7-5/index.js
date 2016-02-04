$(function() {
    $("#cname").keyup(function () {
        var $this = $(this);
        var value = $this.val();
        $this.removeClass();
        if (value) {
            $this.addClass(/^[\u4e00-\u9fa5]{2,4}$/.test(value) ? "yes" : "no");
        }
    });
});