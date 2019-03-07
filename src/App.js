import React, { Component } from 'react';
import './App.css';

import DogeMeme from './doge-meme';

class App extends Component {
  render() {
    return (
      <div className="flex col align-items-center">
        <p>Doge Meme</p>
        <DogeMeme 
          topTxt='cuac'
          bottomTxt='cuac'
        />
      </div>
    );
  }
}

export default App;
