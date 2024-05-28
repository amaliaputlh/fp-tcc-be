const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*"
};

const db = require("./app/models");
db.sequelize.sync();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
}));

app.get("/", (req, res) => {
  res.json({ message: "This is a simple CRUD project using node js and postgres sql" });
});
require("./app/routes/product-routes")(app);
require("./app/routes/user-routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Running on port ", PORT);
});
