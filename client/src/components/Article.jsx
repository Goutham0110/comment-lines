import React from "react"
import "./styles.css"

export default function Article({title,author}){
  return (
    <div className="article">
      <div className="article-thumbnail">
        <p>{title}</p>
      </div>
      <div className="article-author">
         {'{'}{author}{'}'}
      </div>
    </div>
  )
};

