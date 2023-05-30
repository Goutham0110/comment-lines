import React, { useState, useEffect } from "react"
import "./styles.css"
import Article from "./Article"
import AddArticle from "./AddArticle";
import {Link } from "react-router-dom";



export default function Articles({setArticles,articles}){

  const [art, setArt] = useState([]);
  const [err, setErrors] = useState([]);

  const url = "http://localhost:5000/articles";

  useEffect(() => {
    let isMounted=true;
    fetch(url).then((res)=>res.json())
    .then((res) => {
      if(isMounted){
        setArt(res.data); 
        setArticles(res.data);
      }
    })
    .catch((err) => setErrors(err))

    return ()=> isMounted=false;
  },[]);

  return (
    <div className="Articles-page">
      <div className="createArticle">
        <AddArticle />
      </div>

      <div className="articles">
        {art.map((d)=>{
          if(d.title)
          return (
          <Link to= {`/articles/${d.title}`} className="articlesLink">
            <Article title={d.title} author={d.author} />
          </Link>
        )})}
      </div>
    </div>
  )
};

