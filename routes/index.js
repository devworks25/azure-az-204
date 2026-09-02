var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('========== ENV TEST ==========');
  console.log('MESSAGE:', process.env.MESSAGE);
  console.log('PORT:', process.env.PORT);
  console.log('==============================');

  res.send(`
    <h1>Environment Test</h1>
    <p>MESSAGE: ${process.env.MESSAGE || 'UNDEFINED'}</p>
    <p>PORT: ${process.env.PORT || 'UNDEFINED'}</p>
  `);
});

module.exports = router;
