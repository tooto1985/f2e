$(function () {
    function sendMessage(message) {
        $.getJSON("/api/4-8", { name: $("#name").val(), message: message }, function(data) {
            if (data.length) {
                for (var i = 0; i < data.length; i++) {
                    $(".box").append("<div>" + data[i] + "</div>");
                }
                $(".box").animate({ "scrollTop": $(".box").prop("scrollHeight") - $(".box").height() }, 200);
            }
        });
        if (message) {
            $("#message").val("");
        }
    }
    $("#send").click(function() {
        sendMessage($("#message").val());
    });
    $("#message").keyup(function(e) {
        if (e.keyCode == 13) {
            sendMessage($(this).val());
        }
    });
    setInterval(sendMessage, 3000);
});