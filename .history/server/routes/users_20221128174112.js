var express = require("express");
var router = express.Router();
const controller = require("../controller/UserController");
router.get("/", controller.sentmeassge);

router.get("/hello", controller.sentmeassgehello);
router.get("/hello/hello2", controller.sentmeassgehello);
// router.get("/commodity", function (req, res) {
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
// router.get("/TOP_phones", function (req, res) {
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
module.exports = router;
