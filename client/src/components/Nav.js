import React from 'react';
import '../styling/App.css';
import { Link, withRouter } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'

  }
  return (
    <div className="App">
     <nav>
     <Link to='/' style={navStyle}>
         <h3>PXLBeers</h3>
         </Link>
         <ul className="nav-links">
            <Link to='/breweries' style={navStyle}>
             <li>Breweries</li>
            </Link>
         </ul>
     </nav>
    </div>
  );
}

export default Nav;
