var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  var name = req.body.name;
  res.send('registered');
  console.log(name);
})

module.exports = router;
