var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWS_DB||{
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burger"
});


connection.connect(function(err) {
  if (err)throw err; 
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
