import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Intro />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/test" element={<Test />} />
        <Route path="/articles/:title" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
