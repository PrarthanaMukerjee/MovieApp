var React = require('react');
var FavouriteDisplay= React.createClass({


  updateMovie:function(obj){
    var updateReRender = this.props.updateRenderRef.bind(null,obj);
    $.ajax({
        url:"http://localhost:8090/movies/update",
        type:'PUT',
        data:obj,
        success:function(data){
            updateReRender();
            console.log(data);
        }.bind(this),
        error:function(err){
            console.log(err);
        }.bind(this)
    });
  },
  updateRender:function(){
    var com = prompt("Enter the Comment",this.props.Comment);
    if(com!=null){
      if(com!=this.props.Comment){
      var Obj = {imdbID:this.props.imdbID,Comment:com};
      this.updateMovie(Obj);
    }
    }
  },
  deleteMovie: function(){
    var deleteNrerender=this.props.fun.bind(null,this.props.imdbID);
    $.ajax({
        url:"http://localhost:8090/movies/delete/"+this.props.imdbID,
        type:'DELETE',
        success:function(data){
            deleteNrerender();
            console.log(data);
        }.bind(this),
        error:function(err){
            console.log(err);
        }.bind(this)
    });
  },

  render: function(){
  return (

  <div className="container-fluid" style={{paddingTop:80}}>
    <div className="row">
    <div className="col-md-3">
       <img src={this.props.poster} alt={this.props.title} width="260px"/>
    </div>
    <div className="col-md-9">
     <div className="jumbotron">
      <h1>{this.props.title}</h1>
      <p>IMDB Id= {this.props.imdbID}</p>
      <p>Year = {this.props.year}</p>
      <p>Comment = {this.props.Comment}</p>
      <button onClick={this.deleteMovie} className="btn btn-danger" > Delete </button>
      <br/>
      <br/>
      <button  className="btn btn-Success" onClick={this.updateRender}> Update </button>
    </div>
    </div>
    </div>
  </div>

  )
}
});

module.exports = FavouriteDisplay;
