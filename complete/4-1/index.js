$(function () {
    $("#name").keyup(function () {
        $("#status").attr("class", "loading");
        $.getJSON("/api/4-1", { username: $(this).val() }, function (data) {
            if (data) {
                $("#status").attr("class", "no");
            } else {
                $("#status").attr("class", "ok");
            }
        });
    });
});