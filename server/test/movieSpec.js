var should = require("chai").should(),

supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");
var data={}

describe("Testing the get route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movies/add")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
         var myob= JSON.parse(res.text);
         myob[0].Title.should.be.equal('2012 Doomsday');
          done();
        });
  });
});

describe("Testing post route", function(err){
 it("should respond", function(done){
   url
   .post("/movies/add")
   .expect(200)
   .send({
     "Title":"Fukrey",
     "Year" :"2013",
     "imdbID":"tt2806788",
     "Type":"movie",
     "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_SX300.jpg"
   })
   .end(function(err,res){
     if(err){
       throw err;
     }
     res.text.should.be.equal("Movie Inserted");
     done();
   });

 });
});

describe("Testing Update route", function(err){
 it("should respond", function(done){
   url
   .put("/movies/update")
   .expect(200)
   .send({
     "imdbID":"tt2806788",
     "Comment":"Data updated"
   })
   .end(function(err,res){
     if(err){
       throw err;
     }
     res.text.should.be.equal("Movie Updated Successfully");
     done();
   });

 });
});

describe("Testing delete route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .delete("/movies/delete/tt2806788")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
         res.text.should.be.equal("Deleted successfully");
          done();
        });

  });
});
