import React, { useState, useEffect } from "react"
import "./styles.css"
import Article from "./Article"
import AddArticle from "./AddArticle";
import ArticlePage from "./ArticlePage";
import { Routes, Route,Link } from "react-router-dom";



export default function Articles(){
  const [art,setArt] = useState([{"title":"ABC","text":"Text"}]);
  const [err,setErrors]=useState([]);

  const url="http://localhost:5000/articles"

  async function fetchData() {
    const res = await fetch(url);
    res.json()
      .then(res => setArt(res.data))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="Articles-page">
      <div className="createArticle">
        <AddArticle />
      </div>

      <div className="articles">
        {art.map((d)=>{
          if(d.title)
          return (
          <Link to= {`/articles/${d.title}`}>
            <Article title={d.title}/>
          </Link>
        )})}
      </div>
    </div>
  )
};

