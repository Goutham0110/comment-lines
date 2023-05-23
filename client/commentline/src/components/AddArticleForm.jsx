import React from "react"
import "./styles.css"

export default function AddArticleForm(){
  return (
    <div className="AddArticleForm">
      <div className="formHead">// create your article</div>
      
      <form method="post" action="http://localhost:5000/add">

        <div className="formElement">
          <label>#title -></label>
          <input type="text" name="title" autofocus/>
        </div>
        <div className="formElement">
            <label>#author -></label>
            <input type="text" name="author"/>
        </div>
        <div className="formElement">
            <label>#content -></label>
            <textarea name="content" rows="5"/>
        </div>
        
        <div className="submit">
          <input type="submit" name="submit" />
        </div>
      </form>

    </div>
  )
};

