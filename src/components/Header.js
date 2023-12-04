// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>GlobeTrotter Getaways</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li className="dropdown">
            <span>Tours</span>
            <div className="dropdown-content">
              <Link to="/tours/all">All Tours</Link>
              <Link to="/tours/adventure">Adventure</Link>
              <Link to="/tours/cultural">Cultural</Link>
              {/* Add more tour categories as needed */}
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li> {/* Corrected the link */}
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;
