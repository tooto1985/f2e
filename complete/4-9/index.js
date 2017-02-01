$(function() {
    function sendMessage(message) {
        if (!message) {
            $.getJSON("http://tw.somee.com/demo/4-9/data/", function(data) {
                if (data.length) {
                    for (var i = 0; i < data.length; i++) {
                        $(".box").append("<div>" + data[i] + "</div>");
                    }
                    $(".box").animate({ "scrollTop": $(".box").prop("scrollHeight") - $(".box").height() }, 200);
                }
                sendMessage();
            });
        } else {
            $.getJSON("http://tw.somee.com/demo/4-9/data/", { name: $("#name").val(), message: message });
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
    sendMessage();
});