var express = require('express');
var router = express.Router();
var message =  process.env.MESSAGE;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: message });
});

module.exports = router;
