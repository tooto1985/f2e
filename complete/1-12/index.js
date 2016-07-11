$(function() {
    $("#checkbox").change(function() {
        if ($(this).is(":checked")) {
            $("#register").on("click", function() {
                location.href = "../4-2/index.html";
            }).removeClass();
        } else {
            $("#register").off("click").addClass("off");
        }
    }).change();
});