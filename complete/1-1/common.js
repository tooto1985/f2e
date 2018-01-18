fetch("header.html").then(function (response) {
  return response.text();
}).then(function (text) {
  document.querySelector("#header").innerHTML = text;
});

fetch("footer.html").then(function (response) {
  return response.text();
}).then(function (text) {
  document.querySelector("#footer").innerHTML = text;
});