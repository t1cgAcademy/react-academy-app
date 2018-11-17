import React, { Component } from 'react';
import PlayerCard from './PlayerCard.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PlayerCard />
      </div>
    );
  }
}

export default App;
