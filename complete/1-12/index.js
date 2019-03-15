$(function() {
    $("#checkbox").change(function() {
        if ($(this).is(":checked")) {
            $("#register").click(function() {
                location.href = "../4-2/";
            });
        } else {
            $("#register").off("click");
        }
    }).change();
});