var defaultPage = "index.html";
var fs = require("fs");
var express = require("express");
var serveIndex = require("serve-index");
var app = express();
app.use(function(req, res, next) {
    var url = req.url.split("?")[0];
    var param = req.url.split("?")[1];
    if (url.substr(url.length - 1) !== "/") {
        if (url.split("/").pop().indexOf(".") === -1) {
            res.redirect(301, url + "/" + (param ? "?" + param : ""));
            return;
        }
        next();
    } else {
        fs.stat("." + url + defaultPage, function(err, stats) {
            if (!err && stats.isFile()) {
                req.url += defaultPage;
            }
            next();
        });
    }
});
app.use('/', serveIndex('./'));
app.use(express.static("./"));
app.listen(3000);