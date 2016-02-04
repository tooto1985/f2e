$(function() {
    $.getJSON("photos.json", function(data) {
        var i = 0;
        function run() {
            if (i >= data.length) {
                i = 0;
            }
            $("#image").attr("src", data[i]);
            i++;
        }
        setInterval(run, 3000);
        run();
    });
});