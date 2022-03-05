import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <p>🏠</p>
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/order">
            <p>📝</p>
            <h3>Order</h3>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar