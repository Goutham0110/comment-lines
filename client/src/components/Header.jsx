import React from "react"
import { Link } from 'react-router-dom';
import "./styles.css"
import Icon from "./Icon"

export default function Header(){
  return (
    <div className="header-container">
      <Link to="" className="header-icon"><Icon/></Link> 
      
      <div className="header-navbar">
        <Link to="" className="navbar-element">#Home</Link>
        <Link to="/articles" className="navbar-element">#Articles</Link>
      </div>
    </div>
  )
};

