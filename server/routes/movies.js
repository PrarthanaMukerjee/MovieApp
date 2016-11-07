var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

router.route("/add")//for one route path
.post(function(req,res){
  if(req.body)
  {
    var obj = {'imdbID':req.body.imdbID};
    req.body["Comment"]="No Comment added yet !!!";
    console.log(req.body);
    var movieVar = new Movie(req.body);
    Movie.findOne(obj,function(err,data){
   if(data){
        res.send("Movie cant be inserted as its Previously there");
    }
  else{
     movieVar.save(function(err) {
       if(err)
       {
         res.send(err);
       }
       else
       {
         res.send("Movie Inserted");
       }
    })
   }
  })
 }
})

// Get all data
.get(function(req,res){
  Movie.find({},function(err,data){
  if(err)
  {
    console.log('error occured');
  }
  else
  {
        res.send(data)
  }
  })
})


//Delete
router.delete('/delete/:imdbID',function(req,res){

    Movie.remove({imdbID:req.params.imdbID},function(err){
      if(err)
      {
        console.log('error occured');
      }
      else
      {
            res.send("Deleted successfully")
      }

    })
})

router.route("/update")
 .put(function(req, res) {
       Movie.update({imdbID:req.body.imdbID},{Comment:req.body.Comment},function(err){
         if(err){
            console.log('error occured');
         }
         else{
               res.send('Movie Updated Successfully');
         }
});
});

module.exports = router;
