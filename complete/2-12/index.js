$(function() {
    function show(data) {
        try {
            for (var i = 0; i < data.length; i++) {
                $("body").append("<div>" + data[i] + "</div>");
            }
        } catch(e) {
            alert(e.message);
        }
    }
    show();
    show(["John", "Tom", "Mark"]);
});