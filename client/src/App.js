import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Test from "./components/Test";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import AddArticleForm from "./components/AddArticleForm";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log("articles", articles);
  }, [articles]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Intro />} />
        <Route
          path="/articles"
          element={<Articles setArticles={setArticles} articles={articles} />}
        />
        <Route path="/articles/add" element={<AddArticleForm />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/articles/:title"
          element={<ArticlePage art={articles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
