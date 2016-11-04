var React = require('react');
var MovieDisplayBox = require('./MovieDisplayBox');

var DisplayComponent = React.createClass({

   render:function(){
      var movieObjectArr = this.props.Movieobj.map(function(movie){
       return (<MovieDisplayBox movieObj={movie} year={movie.Year} imdbID={movie.imdbID} title={movie.Title} poster={movie.Poster} ></MovieDisplayBox>);
      });

     return (
       <div>
       {movieObjectArr}
       </div>
     );
   }
   });

module.exports = DisplayComponent;
