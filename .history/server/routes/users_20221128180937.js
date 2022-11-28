var express = require("express");
var router = express.Router();
const controller = require("../controller/UserController");
router.get("/", controller.sentmeassge);
router.get("/commodity", controller.get_commodity);
router.get("/TOP_phones", controller.get_topphone);
module.exports = router;
