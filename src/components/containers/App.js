import React from 'react';
import './App.css';
import GamingField from '../Gamingfield';
import Counter from '../Counter';



const App = () => {

  return (
    <div className="App">
      <h1>Minesweeper</h1>
        <GamingField />
        <Counter />
    </div>
  );
};

export default App;
