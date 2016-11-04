var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./Components/SearchComponent');
var DisplayComponent = require('./Components/DisplayComponent');
var NavBar = require('./Components/Navbar');

var Maincomponent = React.createClass({
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
    <NavBar />
    <SearchComponent SearchChange= {this.changeHandler} submitHandler= {this.submitHandler} />
    <DisplayComponent Movieobj={this.state.Mdata} />
    </div>
    )
  }
})

ReactDOM.render(<Maincomponent/>,
 document.getElementById('app'));
