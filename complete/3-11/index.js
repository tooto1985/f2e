$(function() {
    $.getJSON("data.json", function(data) {
        var $table = $("<talbe>");
        for (var i = 0; i < data.length; i++) {
            $table.append(
                $("<tr>").append(
                    $("<td>").append(
                        $("<a>").attr("href", data[i].url).text(data[i].title)
                    )
                )
            );
        }
        $("#content").html($table.html());
    });
});