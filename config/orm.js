var connection = require("./connection.js");

// Object Relational Mapper (ORM)


function printQuestionsMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push('?');
    }

    return array.toString();
}

function objToSql(ob) {

    var array = [];

    for (key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + "-" + ob[key]);
        }
    }

    return array.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //vals in an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    insertOne: function (tables, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString = queryString + " (";
        queryString = queryString + cols.toString();
        queryString = queryString + ") ";
        queryString = queryString + "VALUES (";
        queryString = queryString + printQuestionsMarks(val.length);
        queryString = queryString + ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cbb(result);
        });
    },

    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: cheeseburger, devoured: true}
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString = queryString + " SET ";
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + " WHERE ";
        queryString = queryString + condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;