import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import New from "./components/New";
import Game from "./components/Game";

function App() {
  return (
      <Router>
        {/*
            <div className="nav-bar">
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/lancer-partie">Lancer une Partie</Link>
              <Link to="/jeu">Jeu</Link>
            </div>
        */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lancer-partie" element={<New />} />
          <Route path="/jeu" element={<Game />} />
        </Routes>
      </Router>
  );
}

export default App;