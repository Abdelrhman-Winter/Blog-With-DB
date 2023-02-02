const dotenv = require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").MongoURI;

//EJS
app.set("view engine", "ejs");

app.use(express.static("public"));

//connect to mongo
mongoose.set("strictQuery", false);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected...."))
  .catch((err) => console.log(err));

//Routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
