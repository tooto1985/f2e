$(function() {
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "x", "y", "w", "z", "i", "o"];
    var weight = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];
    function check(cid) {
        cid = cid.toLowerCase();
        cid = letter.indexOf(cid[0]) + 10 + cid.substr(1);
        return cid.split("").reduce(function(prev, next, i) {
            return prev + (next * weight[i]);
        }, 0) % 10 === 0;
    }
    $("#cid").keyup(function() {
        var $this = $(this);
        var value = $this.val();
        $this.removeClass();
        if (value) {
            $this.addClass(/^[a-z][12][0-9]{8}$/i.test(value) && check(value) ? "yes" : "no");
        }
    });
});