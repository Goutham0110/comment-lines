import React from "react"
import "./styles.css"
import Icon from "./Icon"

export default function Intro(){
  return (
    <div className="intro">
        <div className="intro-welcome"> 
            Welcome to the home page of,
        </div>
        <div className="intro-icon">
            <h2> <Icon/> </h2>    
        </div>
        <p>
        Comment lines is an open source community for developers to
        learn, colloborate and share their knowledge.
        In Comment lines people share their best way and resources to learn something in the world of computer science.
        Comment lines share their resource mainly in the format of blogs.
        </p>
    </div>
  )
};

