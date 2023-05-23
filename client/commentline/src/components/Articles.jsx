import React, { useState, useEffect } from "react"
import "./styles.css"
import Article from "./Article"
import AddArticle from "./AddArticle";


export default function Articles(){
  const [art,setArt] = useState([]);
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
    console.log(art.map((e)=>{
      return e.title
    }))
  }, []);
  return (
    <div className="Articles-page">
      <div className="createArticle">
        <AddArticle />
      </div>
      <div className="articles">
        
        {art.map((d)=>{
          if(d.title)
          return <Article title={d.title}/>
        })}
      
      </div>
    </div>
  )
};

