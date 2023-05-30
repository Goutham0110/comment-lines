import React from "react"
import "./styles.css"
import Popup from 'reactjs-popup';
import AddArticleForm from "./AddArticleForm";
import { Link } from "react-router-dom";

export default function AddArticle(){
  
  return (
    <div className="Articles-header">
      <div className="Articleshead">
        """ All articles... """
      </div>

    <Link to= "/articles/add" className="addArticleButton">        
          // Create Article
    </Link>
    
    </div>
  )
};
