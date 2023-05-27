import React from "react"
import { useParams } from "react-router-dom";
import CloseButton from "./CloseButton"
import "./styles.css"

export default function ArticlePage(){
  let { title } = useParams();
  return (
    <div className="ArticlePage">
      <div className="content-title">
        <h1>"""{title}"""</h1>
      </div>
      <div className="content-text"> 
        <p></p>
      </div>
    </div>
  )
};

