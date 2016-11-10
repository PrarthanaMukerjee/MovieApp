var should = require("chai").should(),
expect = require('chai').expect,
supertest = require("supertest"),
app = require("../bin/www");
var sinon = require('sinon');
var model = require('../models/movie.js');
var modelStub = sinon.stub(model,'find');

var url = supertest("http://localhost:8080");
var data={}


describe('Test my controller', function(){
 describe('Find items', function(){
   beforeEach(function(){
     modelStub.yields(null, [{'itemid': 1, 'itemname': 'goods'}]);
   });
   it('should attempt to find items', function(done){
     url
       .get('/movies/add')
       .expect(200)
       .expect('Content-Type', /json/)
       .end(function(err, res){
         if (err) return done(err);
         expect(res.body[0].itemname).to.be.equal("goods");
         done();
       });
   });
 });
});

describe("Testing the get route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movies/add")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          if (err) {
				        done(err);
			    }
         var myobj= JSON.parse(res.text);
         myobj[0].Title.should.be.equal('2012 Doomsday');

        });
        done();
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
