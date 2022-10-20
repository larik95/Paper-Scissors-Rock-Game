import Header from "./components/Header";
import Game from "./components/Game";
import Play from "./components/Play";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles.scss";

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setChoice={setChoice} />} />
          <Route
            exact
            path="/game"
            element={<Game choice={choice} score={score} setScore={setScore} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
