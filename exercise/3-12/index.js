$(function() {
    $.getJSON("data.json", function(data) {
        var $tbody = $("<tbody>");
        for (var i = 0; i < data.length; i++) {
            $tbody.append(
                $("<tr>").append(
                    $("<td>").append(
                        $("<a>").attr("href", data[i].url).text(data[i].title)
                    )
                )
            );
        }
        $("#content").html($tbody.html());
    });
});