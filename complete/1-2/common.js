fetch("common.html").then(function (response) {
  return response.text();
}).then(function (text) {
  var temp = document.createElement("div");
  temp.innerHTML = text;
  document.querySelector("#header").innerHTML += temp.querySelector("#header").innerHTML;
});

fetch("common.html").then(function (response) {
  return response.text();
}).then(function (text) {
  var temp = document.createElement("div");
  temp.innerHTML = text;
  document.querySelector("#footer").innerHTML += temp.querySelector("#footer").innerHTML;
});