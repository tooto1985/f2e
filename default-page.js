var fs = require("fs");
var crypto = require("crypto");
module.exports = function (defaultPage) {
    defaultPage = defaultPage || "index.html";
    return function (req, res, next) {
        if (req.url.lastIndexOf("/") !== req.url.length - 1 && !(req.url.split("/").pop().indexOf(".") > -1)) {
            res.writeHead(301, {
                location: req.url + "/"
            });
            res.end();
        } else if (req.url.lastIndexOf("/") === req.url.length - 1) {
            fs.exists("." + req.url + defaultPage, function (exists) {
                if (exists) {
                    var data = fs.readFileSync("." + req.url + defaultPage);
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
}