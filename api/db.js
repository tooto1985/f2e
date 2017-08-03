var fs = require("fs");
module.exports = function (jsonFileName) {
    function readFile() {
        var data = fs.readFileSync("./api/json/" + jsonFileName + ".json").toString();
        return JSON.parse(data);
    }

    function writeFile(data) {
        fs.writeFileSync("./api/json/" + jsonFileName + ".json", JSON.stringify(data, null, "\t"));
    }

    this.insert = function (insertObject, success, error) {
        try {
            var json = readFile();
            insertObject._id = Date.now().toString();
            json.push(insertObject);
            writeFile(json);
            if (success) success(insertObject);
        } catch (e) {
            if (error) error(e);
        }
    };

    this.select = function (filter, success, error, fetch) {
        try {
            var json = readFile();
            if (filter.$orderby) {
                var keys = Object.keys(filter.$orderby);
                for (var i = 0; i < keys.length; i++) {
                    json.sort(function (a, b) {
                        if (filter.$orderby[keys[i]] === 1) {
                            if (a[keys[i]] > b[keys[i]]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else {
                            if (a[keys[i]] < b[keys[i]]) {
                                return 1;
                            } else {
                                return -1;
                            }
                        }
                    });
                }
            }
            if (filter.$query) {
                filter = filter.$query;
            }
            if (filter) {
                var keys = Object.keys(filter);
                for (var i = 0; i < keys.length; i++) {
                    json = json.filter(function (a) {
                        if (filter[keys[i]] instanceof RegExp) {
                            return filter[keys[i]].test(a[keys[i]]);
                        } else if (filter[keys[i]] instanceof Object) {
                            if (filter[keys[i]].$gt) {
                                return a[keys[i]] > filter[keys[i]].$gt;
                            }
                            return true;
                        } else {
                            return filter[keys[i]] === a[keys[i]];
                        }
                    });
                }
            }
            if (fetch) {
                json = json.filter(function (a) {
                    var index = json.indexOf(a);
                    return fetch > index;
                });
            }
            if (success) success(json);
        } catch (e) {
            if (error) error(e);
        }
    };

    this.update = function (id, updateObject, success, error) {

    };

    this.remove = function (id, success, error) {

    };

    this.id = function (id) {

    };
};