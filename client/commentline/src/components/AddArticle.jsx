import React from "react"
import "./styles.css"
import Popup from 'reactjs-popup';
import AddArticleForm from "./AddArticleForm";


export default function AddArticle(){
  
  return (
    <div className="Articles-header">
    <div className="Articleshead">
       """ All articles... """
    </div>

    <Popup 
    trigger={
      <button className="addArticleButton">
        <p>// Create Article</p>
      </button>
    } 
    modal nested>
      <AddArticleForm/>
    </Popup>

    
    </div>
  )
};
