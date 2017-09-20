var Db = require("./db");
var express = require("express");
var path = require("path");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/api/2-4", function (req, res) {
    res.status(500).send('error!');
});
app.get("/api/4-(1|2)", function (req, res) {
    var db = new Db("users");
    res.set("Access-Control-Allow-Origin", "*");
    var username = req.query.username;
    var isregister = req.query.isregister === "true" ? true : false;
    db.select({ name: username }, function (data) {
        if (data.length > 0 || username === "") {
            res.json(isregister ? false : true);
        } else {
            if (isregister) {
                db.insert({ name: username }, function (data) {
                    res.json(true);
                }, function (err) {
                    res.json(false);
                });
            } else {
                res.json(false);
            }
        }
    }, function (err) {
        console.log(err);
        res.end();
    });
});
app.get("/api/4-(3|4)", function (req, res) {
    var db = new Db("names");
    res.set("Access-Control-Allow-Origin", "*");
    var search = req.query.search;
    db.select({ name: new RegExp("^" + search, "i") }, function (data) {
        res.json(data.map(function (a) {
            return a.name;
        }));
    }, function (err) {
        res.json([]);
    });
});
app.get("/api/4-(5|6|7)", function (req, res) {
    var db = new Db("articles");
    res.set("Access-Control-Allow-Origin", "*");
    var num = parseInt(req.query.num || 0);
    var fetch = req.query.fetch ? parseInt(req.query.fetch) : null;
    db.select({ $query: { num: { $gt: num } }, $orderby: { num: 1 } }, function (data) {
        res.json(data);
    }, function (err) {
        console.log(err);
    }, fetch);
});
(function () {
    var storage = [];
    var pos = 0;
    var max = 20;
    app.get("/api/4-8", function (req, res) {
        res.set("Access-Control-Allow-Origin", req.headers["origin"]);
        res.set("Access-Control-Allow-Credentials", true);
        var userpos = 0;
        if (req.cookies.pos) {
            userpos = parseInt(req.cookies.pos);
        } else {
            res.cookie("pos", userpos.toString());
        }
        if (req.query.name && req.query.message) {
            storage[pos] = req.query.name + "說：" + req.query.message;
            if (pos >= max) {
                pos = -1;
            }
            pos++;
        }
        var output = [];
        var i = 0;
        if (pos > userpos) {
            for (i = userpos; i < pos; i++) {
                storage[i] && output.push(storage[i]);
            }
        } else if (pos < userpos) {
            for (i = userpos; i < max + 1; i++) {
                storage[i] && output.push(storage[i]);
            }
            for (i = 0; i < pos; i++) {
                storage[i] && output.push(storage[i]);
            }
        }
        res.cookie("pos", pos.toString());
        res.json(output);
    });
})();
(function () {
    var storage = [];
    var pos = 0;
    var max = 20;
    app.get("/api/4-9", function (req, res) {
        res.set("Access-Control-Allow-Origin", req.headers["origin"]);
        res.set("Access-Control-Allow-Credentials", true);
        var userpos = 0;
        if (req.cookies.pos) {
            userpos = parseInt(req.cookies.pos);
        } else {
            res.cookie("pos", userpos.toString());
        }
        if (req.query.name && req.query.message) {
            storage[pos] = req.query.name + "說：" + req.query.message;
            if (pos >= max) {
                pos = -1;
            }
            pos++;
            res.write("ok");
            res.end();
        } else {
            var timeout = 60000;
            var step = 200;
            var timer = 0;
            setTimeout(function () {
                timer += step;
                if (timer < timeout && pos === userpos) {
                    setTimeout(arguments.callee, step);
                } else {
                    var output = [];
                    var i = 0;
                    if (pos > userpos) {
                        for (i = userpos; i < pos; i++) {
                            storage[i] && output.push(storage[i]);
                        }
                    } else if (pos < userpos) {
                        for (i = userpos; i < max + 1; i++) {
                            storage[i] && output.push(storage[i]);
                        }
                        for (i = 0; i < pos; i++) {
                            storage[i] && output.push(storage[i]);
                        }
                    }
                    res.cookie("pos", pos.toString());
                    res.json(output);
                }
            }, step);
        }
    });
})();
app.listen(process.env.PORT || 3000);