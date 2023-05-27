import React from "react"
import "./styles.css"

export default function Article({title}){
  return (
    <div className="article">
      <div className="article-thumbnail">
        <p></p>
      </div>
      <div className="article-title">
        {title}
      </div>
    </div>
  )
};

