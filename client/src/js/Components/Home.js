var React = require('react');

var SearchComponent = require('./SearchComponent');
var DisplayComponent = require('./DisplayComponent');

var Home = React.createClass({
  getInitialState: function() {
     return {
       Mdata: [],
       Value: ""
     };
   },

   getMovieData: function(title)
   {
     $.ajax({
       url: "http://www.omdbapi.com/?s="+title,
       type: 'GET',
       datatype: 'JSON',

       success : function(data){
         this.setState({Mdata:data.Search});
         console.log(data);
       }.bind(this),

       error: function(err) {
        console.log(err);
       }.bind(this)
     });
   },

   changeHandler: function(data){
     this.setState({Value:data});
   },

   submitHandler: function(){
     var text=this.state.Value;
     this.getMovieData(text);
   },

  render:function(){
    return (
    <div>
    <SearchComponent SearchChange= {this.changeHandler} submitHandler= {this.submitHandler} />
    <DisplayComponent Movieobj={this.state.Mdata} />
    </div>
    )
  }
})

module.exports = Home;
