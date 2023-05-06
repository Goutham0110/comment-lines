import React from "react"
import "./styles.css"
import Icon from "./Icon"

export default function Header(){
  return (
    <div className="header-container">
      <Icon/>
      <div className="header-navbar">
        <div className="navbar-element">
          Home
        </div>
        <div className="navbar-element">
          Articles
        </div>        
      </div>
    </div>
  )
};

