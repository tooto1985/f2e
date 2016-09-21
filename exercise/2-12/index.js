$(function() {
    function show(data) {

            for (var i = 0; i < data.length; i++) {
                $("body").append("<div>" + data[i] + "</div>");
            }
        

        
    }
    show();
    show(["John", "Tom", "Mark"]);
});