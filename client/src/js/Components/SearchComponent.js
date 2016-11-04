var React = require('react');

var SearchComponent = React.createClass({

   changeHandler: function(event){
     this.props.SearchChange(event.target.value)
   },

   render:function(){
     return (
       <div style={{paddingTop:60}}>
       <div className="row" id="search">
       <div className="col-md-8">
         <input type="text" className="col-md-12 " id="searchmv" placeholder="Search a movie..."  onChange={this.changeHandler}/>
       </div>
       <div className="col-md-4">
         <button onClick={this.props.submitHandler} className="btn btn-Warning"> Submit </button>
       </div>
       </div>
       </div>
     )
   }
});
module.exports = SearchComponent;
