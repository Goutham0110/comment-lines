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
          Comment Lines is an exceptional open-source platform that revolves around a passionate community of students, 
          all driven by a common purpose: to learn, collaborate, and share knowledge with one another. Designed with students in mind, 
          it offers an interactive and dynamic space where individuals can actively engage, exchange ideas, and provide 
          support throughout their educational journeys. We share our resources, notes and best way to learn something.
        </p>
        <p>
          You can upload and share a wide range of educational resources, including lecture notes, study guides, reference materials, and even personal projects or research papers. This collaborative approach allows learners to access a wealth of diverse materials, enabling them to explore various subjects and enhance their understanding.
        </p>
        <p>
          By fostering a supportive community, it becomes a space where students can thrive, learn from one another, and achieve success in their educational pursuits. With Comment Lines, students have the opportunity to connect, expand their horizons, and create a robust foundation for their academic endeavors.
        </p>
    </div>
  )
};

