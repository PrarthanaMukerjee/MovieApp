var React = require('react');
var FavouriteDisplay = require('./FavouriteDisplay');

var ListFav = React.createClass({

  getInitialState:function()
  {
    return{
      Mdata:[]
    }
  },
updateRender:function(obj){
  var temp = this.state.Mdata;
  var com = obj.Comment;
  var id = obj.imdbID;
  for (var i = 0; i < temp.length; i++) {
    if(temp[i].imdbID==id){
      temp[i].Comment = com;
      this.setState({Mdata:temp});
      break;
    }
  }

},
  deleteMovieStateChange:function(imdbID){
    var temp = this.state.Mdata;
    var j=-1;
   for(var i=0;i<temp.length;i++){
     if(temp[i].imdbID==imdbID)
       {
          j=i;
          break;
       }
    }
     if(j>-1){
     temp.splice(j,1);
   }
   this.setState({Mdata:temp});
 },
  getMovie: function(){
        $.ajax({
            url:"http://localhost:8090/movies/add",
            type:'GET',
            dataType: 'JSON',
            success: function(data) {
             this.setState({Mdata:data});
           }.bind(this),
             error:function(err){
                 console.log(err);
             }.bind(this)
        });
    },
  componentDidMount:function() {
    this.getMovie();
  },
   render:function(){
     if(this.state.Mdata.length==0)
     {
       return (
         <h1>No favourite movies added</h1>
       )
     }
     else {
       var temp = this.deleteMovieStateChange;
       var tempupdate = this.updateRender;
       var Movies = this.state.Mdata.map(function(movie) {
         return (<FavouriteDisplay updateRenderRef={tempupdate} fun={temp} movieObj={movie} Comment={movie.Comment} year={movie.Year} imdbID={movie.imdbID} title={movie.Title} poster={movie.Poster} ></FavouriteDisplay>
         );
        });
     }

     return(
       <div>
        {Movies}
       </div>
       )
   }
   });

module.exports = ListFav;
