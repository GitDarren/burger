

//Psuedocode for main app//

//Import Orm.js//
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    //The variables cols and vals are arrays.

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Required by burgers_controller
module.exports = burger;