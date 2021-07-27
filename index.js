var express = require("express");

var userRouters = require("./routers/user.router");

var app = express();

app.use("/users", userRouters);


app.listen(3000);
