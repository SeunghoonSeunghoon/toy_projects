import React from "react";
import OneToFifty from "./OneToFifty.js";
import Ranking from "./Ranking.js";
import Rank from "./rank.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OneToFifty />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/rank" element={<Rank />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
