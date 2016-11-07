var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory,Route,Router,IndexRoute} = require('react-router');
var NavBar = require('./Components/Navbar');
var Home = require('./Components/Home');
var ListFav = require('./Components/ListFavouriteMovies');

var Maincomponent = React.createClass({

  render:function(){
    return (
    <div>
    <NavBar />
    <br/><br/><br/>
    {this.props.children}
    </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={Maincomponent} >
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/ListFav" component={ListFav} />
        </Route>
  </Router>,
 document.getElementById('app'));
