$(function() {
    $("#name").keyup(function() {
        $("#status").removeClass().addClass("loading");
        $.getJSON("http://tw.somee.com/demo/4-2/data.ashx", { username: $(this).val() }, function (data) {
            if (data) {
                $("#status").removeClass().addClass("no");
            } else {
                $("#status").removeClass().addClass("ok");
            }
        });
    });
    $("#register").click(function() {
        $.getJSON("http://tw.somee.com/demo/4-2/data.ashx", { username: $("#name").val(), isregister: true }, function (data) {
            if (data) {
                alert("註冊成功!");
            } else {
                alert("註冊失敗!");
            }
        });
    });
});