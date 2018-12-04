var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (value, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUE (?)";

        connection.query(queryString, [value], function (err, res) {
            if (err) {
                throw err;
            }

            callback(res);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (value, condition, callback) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id=?";

        connection.query(queryString, [value], [condition], function (err, res) {
            if (err) {
                throw err;
            }

            callback(res);
        });
    }
};

// Export the orm object
module.exports = orm;