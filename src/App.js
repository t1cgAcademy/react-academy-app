import React, {Component} from 'react';
import t1cgLogo from './t1cgLogo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={t1cgLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Academy App</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code> src/App.js </code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
