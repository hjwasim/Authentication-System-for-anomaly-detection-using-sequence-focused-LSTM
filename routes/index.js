var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Detecting Malign Requests using Hybrid Deep Learning Model with Sequence-based LSTM' });
});

module.exports = router;
