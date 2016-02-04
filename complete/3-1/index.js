$(function () {
    $.getJSON("message.json", function (data) {
        $("#message").html(data);
    });
});