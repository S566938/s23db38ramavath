var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('horse', { title: 'horse' });
});
var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET horses */
router.get('/', horse_controlers.horse_view_all_Page );
module.exports = router;