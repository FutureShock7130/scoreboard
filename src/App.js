import './App.css';

import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Display from './pages/Display';
import Home from './pages/Home';

const TITLE = "Scoreboard | 7130";

function App() {
  const [scores, setScores] = useState({
    redScore: 0,
    blueScore: 0
  });

  const storeVariables = () => {
    localStorage.setItem('scores', scores);
  }

  useEffect(() => {
    document.title = TITLE;
    storeVariables();
  })

  useEffect(() => {
    console.log("App Update");
  }, [scores])
    
  return (
    <Routes>
      <Route index path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard scores={scores} setScores={setScores} />} />
      <Route path="display" element={<Display />} />
    </Routes>
  )
}

export default App;
