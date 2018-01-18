fetch("Menu.html").then(function (response) {
    return response.text();
}).then(function (text) {
    var isSelected = false;
    document.querySelector(".menu").innerHTML = text;
    document.querySelectorAll("a").forEach(function (a) {
        if (a.pathname == location.pathname) {
            isSelected = true;
            a.setAttribute("class", "selected");
        }
    });
    if (isSelected == false) {
        document.querySelectorAll("a")[0].setAttribute("class", "selected");
    }
});