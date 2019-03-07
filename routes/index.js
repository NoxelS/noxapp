var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { layout: false});
});

router.get("/datenschutz", function(req, res, next) {
  res.render("datenschutz", { layout: false});
});

module.exports = router;
