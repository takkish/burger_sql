var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(err,result){
      if(err)throw err;
      cb(result)
    })
  },
  update: function(tableInput,condition, cb){
    connection.query("UPDATE burgers SET devoured=true WHERE id="+condition+";",function(err,result){
      if(err)throw err;
      cb(result)
    })
  },
  create:function(tableInput,condition,cb){
    connection.query("INSERT INTO burgers (burger_name) VALUES('"+condition+"');", function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
};

module.exports = orm;
