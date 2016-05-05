$(function() {
    console.info("資訊");
    console.warn("警告");
    console.error("錯誤");
    $.getJSON("data.json", function(data) {
        console.table(data);
    });
});