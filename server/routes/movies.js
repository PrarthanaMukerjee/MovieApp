var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

router.route("/add")//for one route path
.post(function(req,res){
  if(req.body)
  {
    var obj = {'imdbID':req.body.imdbID};
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
router.delete('/delete',function(req,res){
  if(req.body)
  {
    Movie.remove({_id:req.body._id},function(err){
      if(err)
      {
        console.log('error occured');
      }
      else
      {
            res.send("Deleted successfully")
      }

    })
  }
})

router.route("/update/:title")
 .put(function(req, res) {
       Movie.update({Title:req.params.title},{Year:req.body.Year},function(err){
         if(err){
            console.log('error occured');
         }
         else{
               res.send('Movie Updated Successfully');
         }
});
});

module.exports = router;
