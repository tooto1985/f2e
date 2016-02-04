$(function () {
    function sendMessage(message) {
        $.getJSON("http://tw.somee.com/demo/4-8/data.ashx", { name: $("#name").val(), message: message }, function(data) {
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $(".box").append("<div>" + data[i] + "</div>");
                }
                $(".box").animate({ "scrollTop": $(".box").prop("scrollHeight") - $(".box").height() }, 200);
            }
        });
        if (!message) {
            $("#message").val("");
        }
    }

    $("#send").click(function() {
        sendMessage($("#message").val());
    });
    $("#message").keyup(function(e) {
        if (e.keyCode == 13) {
            sendMessage($("#message").val());
        }
    });
    setInterval(sendMessage, 3000);
});