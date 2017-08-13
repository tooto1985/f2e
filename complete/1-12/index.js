$(function() {
    $("#checkbox").change(function() {
        if ($(this).is(":checked")) {
            $("#register").click(function() {
                location.href = "../4-2/index.html";
            });
        } else {
            $("#register").off("click");
        }
    }).change();
});