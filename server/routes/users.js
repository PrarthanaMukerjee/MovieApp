var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.route("/add")//for one route path
.post(function(req,res){
  if(req.body)
  {
    console.log(req.body);
     var userVar = new User(req.body);
     userVar.save(function(err) {
       if(err)
       {
         res.send(err);
       }
       else
       {
         res.send("User Inserted");
       }
    })

  }
})
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.post('/msg/:name', function(req, res, next) {
//   res.send('hello '+req.params.name);
// });
//
//
// router.post('/name', function(req, res, next) {
//   res.send('Welcome '+req.query.fnm+' '+req.query.lnm);
// });

module.exports = router;
