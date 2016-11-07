var React = require('react');
var {Link} =require('react-router');
var NavBar = React.createClass({

  render:function(){
    return (
      <div className="container-fluid">
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
         <a className="navbar-brand" href="#">MovieApp</a>
        </div>
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/ListFav">List Favourite Movies</Link></li>
      </ul>
    </div>
    </div>
 )
}

});

module.exports = NavBar;
