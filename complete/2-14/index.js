$(function() {
    console.warn("警告");
    console.error("錯誤");
    console.group("群組1");
    console.log("文字%s", "文字");
    console.log("數字%d", 100);
    console.groupEnd();
    console.dir(document);
    console.log("%c測試文字", "font-size: 32px; color: red");
    console.count("計數器");
    //console.log($0); //$0~$4
});