/*global __dirname*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('../public/index.html');
});

router.get('/stylesheets/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

router.get('/javascripts/script.js', function(req, res) {
  res.sendFile(__dirname + "/" + "script.js");
});

router.get('/javascripts/info.json', function(req, res) {
  res.sendFile(__dirname + "/" + "info.json");
});


module.exports = router;
