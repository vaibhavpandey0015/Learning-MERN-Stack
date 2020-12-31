import React from 'react';
import { Link } from 'react-router-dom';


const ulstyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    display: "flex",
    
  };
  const listyle = {
    padding: "10px",
    listStyleType: "none" 
  };

const NavBar = () => (

   

    <nav>
        <ul style={ulstyle}>
            <li style={listyle}>
                <Link to="/">Home</Link>
            </li>
            <li style={listyle}>
                <Link to="/about">About US</Link>
            </li>
            <li style={listyle}>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
);
export default NavBar;