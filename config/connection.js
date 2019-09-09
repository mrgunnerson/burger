var mysql = require("mysql");
var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "burgers_db"
  }
);

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

module.exports = connection;
