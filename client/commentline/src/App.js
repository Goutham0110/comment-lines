import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Intro />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
