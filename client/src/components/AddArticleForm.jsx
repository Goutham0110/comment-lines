import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"




export default function AddArticleForm(){
  const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [content, setContent]=useState("");
  const navigate = useNavigate();

  let handleSubmit=async(e)=>{
    e.preventDefault();
      let res = await fetch("http://localhost:5000/add",
        {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            "title":title,
            "author":author,
            "content":content
          })
        }
      );
      let resJson = await res.json();
      if(res.status===201){
        setTitle("");
        setAuthor("");
        setContent("");
      }
      navigate(`/articles`);
  }


  return (
    <div className="AddArticleForm">
      <div className="formHead">// create your article</div>
      
      <form  onSubmit={handleSubmit} action={"http://localhost:3000/articles"}>

        <div className="formElement">
          <label>#title {"->"}</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
        </div>
        <div className="formElement">
            <label>#author {"->"}</label>
            <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="formElement">
            <label>#content {"->"}</label>
            <textarea name="content" rows="10" value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        
        <div className="submit">
          <input type="submit" name="submit" />
        </div>
      </form>

    </div>
  )
};

