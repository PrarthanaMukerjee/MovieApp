var React = require('react');
var MovieDisplayBox = React.createClass({

  buildLinkHref: function(){
     return ('http://www.imdb.com/title/'+this.props.imdbID);
  },
  addMovie: function(e){
        e.preventDefault();
        var url="http://localhost:8090/movies/add";
        var AddObject=this.props.movieObj;

        $.ajax({
            url:url,
            type:'POST',
            data:AddObject,
            success:function(data){
              alert(data);
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
      <button onClick={this.addMovie} className="btn btn-Primary" > Add </button>
      <br/>
      <br/>
      <button  className="btn btn-Success"> View On Imdb </button>
    </div>
    </div>
    </div>
  </div>

  )
}
});

module.exports = MovieDisplayBox;
