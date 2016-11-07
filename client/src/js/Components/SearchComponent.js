var React = require('react');

var SearchComponent = React.createClass({

   changeHandler: function(event){
     this.props.SearchChange(event.target.value)
   },

   render:function(){
     return (

       <div style={{backgroundColor:'#B2BABB '}} className="jumbotron text-center" >
       <h1>Search Your Movie</h1>
       <p>Enter movie name</p>
       < input type="text"   size="50"  placeholder="Search a movie..."  onChange={this.changeHandler} />  &nbsp; &nbsp;
        <button onClick={this.props.submitHandler} className="btn btn-large btn-Warning "> Submit </button>
       </div>

     )
   }
});
module.exports = SearchComponent;
