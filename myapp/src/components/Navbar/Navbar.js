import React from 'react';
import {Lonks, NavLink, Link, withRouter} from 'react-router-dom'
// import './App.css';

function Navbar(props) {
  // setTimeout(() => { props.history.push('/') }, 5000)

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href="" className="brand-logo">Reham</a>
        <ul className="right">
        {/* <li><a href="/"> Home</a></li>
        <li><a href="/about"> About</a></li>
        <li><a href="/contact"> Contact</a></li> */}
{/* m4 hy7sl refresh */}
{/* navilink 3l4an active links */}
        <li><Link to="/"> Home </Link></li>
        <li><NavLink to="/about"> About</NavLink></li>
        <li><NavLink to="/contact"> Contact</NavLink></li>

        </ul>
      </div>
    </nav>
  );
}
//hight order component
export default withRouter(Navbar);
