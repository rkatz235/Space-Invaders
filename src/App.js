import React from 'react';
import AlienBlock from './aliens/Alien.js';
import Shooter from './shooter/Shooter.js';
import Bunker from './shooter/Bunker.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <AlienBlock />
      <Shooter />
      <div className="bunkers">
        <Bunker />
        <Bunker />
        <Bunker />
      </div>
    </div>
  );
}

export default App;
