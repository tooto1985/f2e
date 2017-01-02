document.addEventListener("DOMContentLoaded", function() {
    var data = [12, 15, 14, 9, 3, 10, 7];
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= data[i - 1]; j++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var a = document.createElement("a");
            a.href = "complete/" + i + "-" + j;
            a.innerText = i + "-" + j;
            td.appendChild(a);
            tr.appendChild(td);
            var td2 = document.createElement("td");
            var a2 = document.createElement("a");
            a2.href = "exercise/" + i + "-" + j;
            a2.innerText = i + "-" + j;
            td2.appendChild(a2);
            tr.appendChild(td2);
            document.getElementsByTagName("table")[0].appendChild(tr);
        }
    }
}, false);