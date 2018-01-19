document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu>a").forEach(function (element) {
    element.addEventListener("click", function (e) {
      if (document.querySelector(".menu>a.selected")) {
        document.querySelector(".menu>a.selected").removeAttribute("class");
      }
      this.setAttribute("class", "selected");
      fetch(this.getAttribute("href")).then(function (response) {
        return response.text();
      }).then(function (text) {
        document.querySelector(".content").innerHTML = text;
      });
      e.preventDefault();
    }, false);
  });
  document.querySelector("a").click();
}, false);