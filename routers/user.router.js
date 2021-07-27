var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/", function (req, res) {
  database.getAllUser(function (resultQuery) {
    res.send(resultQuery);
    // console.log(resultQuery);
  });
});

module.exports = router;
