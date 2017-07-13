var fs = require("fs");
var crypto = require("crypto");
module.exports = function (req, res, next) {
    if (req.url.lastIndexOf("/") !== req.url.length - 1 && !(req.url.split("/").pop().indexOf(".") > -1) ) {
        res.writeHead(301, {
            location: req.url + "/"
        });
        res.end();
    } else if (req.url.lastIndexOf("/") === req.url.length - 1) {
        fs.exists("." + req.url + "index.html", function (exists) {
            if (exists) {
                var data = fs.readFileSync("." + req.url + "index.html");
                var hash = crypto.createHash('sha1').update(data).digest('base64');
                if (req.headers['if-none-match'] == hash) {
                    res.writeHead(304);
                    res.end();
                    return;
                }
                res.writeHead(200, {
                    "content-type": "text/html",
                    "Etag": hash
                });
                res.write(data);
                res.end();
            } else {
                next();
            }
        })
    } else {
        next();
    }
}