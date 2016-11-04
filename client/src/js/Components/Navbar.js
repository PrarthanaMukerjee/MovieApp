var React = require('react');
var NavBar = React.createClass({

  render:function(){
    return (
      <div className="container-fluid">
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
         <a className="navbar-brand" href="#">MovieApp</a>
        </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>
    </div>
 )
}

});
module.exports = NavBar;
