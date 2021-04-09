const express = require('express');
const router = express.Router();

/* GET env. */
router.get('/', function (req, res, next) {
  res.send(process.env.NODE_ENV);
});

module.exports = router;
