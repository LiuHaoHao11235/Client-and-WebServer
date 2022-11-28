var express = require("express");
var router = express.Router();
const controller = require("../controller/UserController");
router.get("/", controller.sentmeassge);
router.get("/commodity", controller.get_commodity);
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
