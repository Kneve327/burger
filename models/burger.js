var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(value, callback) {
      orm.insertOne("burgers", value, function(res) {
        callback(res);
      });
    },
    updateOne: function(value, condition, callback) {
      orm.updateOne("burgers", value, condition, function(res) {
        callback(res);
      });
    }
  };
  
  module.exports = burger;
  