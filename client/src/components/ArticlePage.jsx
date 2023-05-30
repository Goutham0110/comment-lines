import React from "react"
import { useParams } from "react-router-dom";
import "./styles.css"

export default function ArticlePage({art}){
  let { title } = useParams();
  let content="";
  art.forEach((element)=>{
    if(title===element.title){
      content=element.content;
    }
  })

  return (
    <div className="ArticlePage">
      <div className="content-title">
        <p>//</p>
        <h1>{title}</h1>
      </div>
      <div className="content-text"> 
        <p>{content}</p>
      </div>
    </div>
  )
};

