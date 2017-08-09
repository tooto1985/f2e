$(function() {
    $("#name").keyup(function() {
        $("#status").attr("class", "loading");
        $.getJSON("/api/4-2", { username: $(this).val() }, function (data) {
            if (data) {
                $("#status").attr("class", "no");
            } else {
                $("#status").attr("class", "ok");
            }
        });
    });
    $("#register").click(function() {
        $.getJSON("/api/4-2", { username: $("#name").val(), isregister: true }, function (data) {
            if (data) {
                alert("註冊成功!");
            } else {
                alert("註冊失敗!");
            }
        });
    });
});