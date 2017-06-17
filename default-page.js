
var fs = require("fs");
module.exports = function (req, res, next) {
    if (/^\/(complete|exercise)\/[0-9]+-[0-9]+$/i.test(req.url)) {
        res.writeHead(301, {
            location: req.url + "/"
        });
        res.end();
    } else if (/^\/(complete|exercise)\/[0-9]+-[0-9]+\/$/i.test(req.url)) {
        fs.exists("." + req.url + "index.html", function (exists) {
            if (exists) {
                res.writeHead(200, {
                    "content-type": "text/html"
                });
                res.write(fs.readFileSync("." + req.url + "index.html"));
                res.end();
            } else {
                next();
            }
        })
    } else {
        next();
    }
}