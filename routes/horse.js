var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('horse', { title: 'horse' });
});
var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET horses */
router.get('/', horse_controlers.horse_view_all_Page );

/* GET detail horse page */
router.get('/detail',secured, horse_controlers.horse_view_one_Page);

/* GET create horse page */
router.get('/create',secured, horse_controlers.horse_create_Page);

/* GET create update page */
router.get('/update',secured, horse_controlers.horse_update_Page);

/* GET delete horse page */
router.get('/delete',secured, horse_controlers.horse_delete_Page)


module.exports = router;