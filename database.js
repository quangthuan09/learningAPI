var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "namecard",
});

var connect = function () {
  connection.connect(function (err) {
    if (!err) {
      console.log("Database is connected !");
    } else {
      console.log("Database connected fails");
    }
  });
};

var closeDB = function () {
  connection.end(function (err) {
    if (!err) console.log("close db");
  });
};

exports.getAllUser = function (callbackQuery) {
  connect();
  connection.query("select * from user", function (err, results, fields) {
    if (!err) {
      const a = [];
      results.forEach((item) => {
        const objectData = {
          id: item.id,
          ic: {
            name: item.name,
            level: item.level,
          },
        };
        a.push(objectData);
      });
      callbackQuery(a);
    } else {
      console.log(err);
    }
  });
};
