var express = require('express');
var router = express.Router();
var EventUser = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/', function (req, res) {
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.email;
  var branch = req.body.branch;
  var dob = req.body.dob;
  var eventName = req.body.eventName;

  var newEventUser = new EventUser({
    name: name,
    phone: phone,
    email: email,
    branch: branch,
    dob: dob,
    eventName: eventName
  });

  EventUser.create(newEventUser, (err, savedForm) => {
    if(err){
      res.send(err);
    }else{
      res.send('registered..');
      console.log(savedForm);
    }
  })
  //res.send('registered');
  console.log(name);
})

module.exports = router;