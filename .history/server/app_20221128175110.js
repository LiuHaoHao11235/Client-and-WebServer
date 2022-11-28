var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myproject";
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// async function sent_loginForm_to_database(username, phonenumber) {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   const collection = db.collection("test");
//   const insertResult = await collection.insertOne({
//     username: username,
//     phonenumber: phonenumber,
//   });
//   console.log("Inserted documents =>", insertResult);
//   return "done.";
// }
// async function get_userdata_from_database(collect) {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection(collect);
//   const findResult = await collection.find({}).toArray();
//   return findResult;
// }
var app = express();
app.use(cors(corsOptions));
// app.get("/sendform", function (req, res, next) {
//   var username = req.query.username;
//   var phonenumber = req.query.phonenumber;
//   sent_loginForm_to_database(username, phonenumber)
//     .then(console.log("成功"))
//     .catch(console.error)
//     .finally(() => client.close());
//   res.end();
// });
// app.get("/commodity", function (req, res) {
//   var page = req.query.page;
//   console.log(page);
//   if (page) {
//     collect = "commodity" + page;
//   } else {
//     collect = "commodity";
//   }
//   get_userdata_from_database(collect)
//     .then((findResult) => {
//       res.json(findResult);
//     })
//     .catch(console.error)
//     .finally(() => {
//       console.log("finally");
//       client.close();
//       res.end();
//     });
// });
// app.get("/TOP_phones", function (req, res) {
//   get_userdata_from_database("TOP_phones")
//     .then((findResult) => {
//       res.json(findResult);
//     })
//     .catch(console.error)
//     .finally(() => {
//       console.log("finally");
//       client.close();
//       res.end();
//     });
// });
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
