import React, { Component } from 'react';
import './App.css';

class DogeMeme extends Component {
  render() {
    return (
      <div className='doge-bg flex col justify-content-between align-items-center'>
      	<p className="txt">{this.props.topTxt}</p>
      	<p className="txt">{this.props.bottomTxt}</p>
      </div>
    );
  }
}

export default DogeMeme;
