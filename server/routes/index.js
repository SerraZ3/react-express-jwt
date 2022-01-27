var express = require("express");
var router = express.Router();
var AuthController = require("../controllers/AuthController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/login", AuthController.login);
router.post("/check-login", AuthController.checkLogin);

module.exports = router;
