var React = require('react');
var Footer = require('./Footer');

var Footer = React.createClass({

  render : function(){
 return(
     <footer style={{backgroundColor : '#191a1c '}} className="footer navbar-fixed-bottom">
       <div style={{color:'#ffffff '}} className="container">
         <div className="row">
           <div className="col-sm-2">
             <h6>Copyright &copy 2016</h6>
             <h6>Movie Search Coorporation</h6>
           </div>
           <div className="col-sm-4">
             <h6>About Us</h6>
             <p>Find Movie of your choice </p>
             <p>in Cinematic History. COME.. SEARCH.. ENJOY..!!</p>
             </div>
             <div className="col-sm-2">
               <h6>Navigation</h6>
               <ul className="unstyled">
                 <li><a href="">Home</a></li>
                 <li><a href="">Servive</a></li>
                 <li><a href="">Links</a></li>
                 <li><a href="">Contact Us</a></li>
               </ul>
             </div>
             <div className="col-sm-2">
               <h6>Foolow Us</h6>
               <ul className="unstyled">
                 <li><a href="" className="fa fa-facebook-official"></a></li>
                 <li><a href="" className="fa fa-twitter"></a></li>
                 <li><a href="" className="fa fa-instagram"></a></li>
                 <li><a href="" className="fa fa-youtube-play"></a></li>
               </ul>
             </div>
             <div className="col-sm-2">
               <h6>Movie Apps</h6>
             </div>
           </div>
         </div>
       </footer>
 );
}
});

    module.exports = Footer;
