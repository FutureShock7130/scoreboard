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

  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

  const storeVariables = () => {
    localStorage.setItem('scores', scores);
  }

  const handleScore = (keyName, dScore) => {
    let tempScores = scores;
    let keyScore = tempScores[keyName];
    
    tempScores[keyName] = keyScore + (dScore);
    
    setScores(tempScores);
    setRedScore(scores.redScore);
    setBlueScore(scores.blueScore);
  }

  useEffect(() => {
    document.title = TITLE;
    storeVariables();
  })

  useEffect(() => {
    console.log("App Update");
    console.log(scores);
  }, [scores.blueScore, scores.redScore])
    
  return (
    <Routes>
      <Route index path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard scores={scores} setScores={setScores} handleScore={handleScore} />} />
      <Route path="display" element={<Display scores={scores} />} />
    </Routes>
  )
}

export default App;
