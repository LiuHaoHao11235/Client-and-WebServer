var express = require("express");
var router = express.Router();
const controller = require("../controller/UserController");
router.get("/", controller.sentmeassge);
module.exports = router;
