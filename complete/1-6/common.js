var hashtext = decodeURI(location.hash).substr(1);
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
      location.hash = decodeURI(element.innerText);
      e.preventDefault();
    }, false);
    if (hashtext == element.innerText) {
      element.click();
    }
  });
  if (hashtext == "") {
    document.querySelector("a").click();
  }
  window.addEventListener("hashchange", function () {
    hashtext = decodeURI(location.hash).substr(1);
    document.querySelectorAll(".menu>a").forEach(function (element) {
      if (hashtext == element.innerText) {
        element.click();
      }
    });
  }, false);
}, false);