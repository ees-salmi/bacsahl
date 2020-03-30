import React from 'react';

import './App.css';
import Saluer from './components/Saluer'

import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
        <Saluer name = "elmustapha" heroName = "Boss"></Saluer>
        <Saluer name = "es-salmi" heroName = "leader"></Saluer>
        <Saluer name = "abderzak" heroName = "lion"></Saluer>
        <Welcome></Welcome>
    </div>
  );
}

export default App;
