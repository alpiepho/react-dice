import React from 'react';
import './App.css';

function App() {

  const firstDieImage = require(`./assets/1.png`);
  const secondDieImage = require(`./assets/2.png`);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>8</span>
        <button className="button">Roll</button>
      </header>
    </div>
  );
}

export default App;