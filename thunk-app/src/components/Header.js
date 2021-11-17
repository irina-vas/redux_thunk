import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="wrapper_header">
      <ul className="nav">
          <li className="nav_item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav_item">
            <Link to="/users">USERS</Link>
          </li>
          <li className="nav_item">
            <Link to="/posts">POSTS</Link>
          </li>
        </ul>
    </div>
  );
}

export default Header;