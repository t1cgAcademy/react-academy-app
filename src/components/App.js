import React, {Component} from 'react';
import t1cgLogo from './t1cgLogo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <img src={t1cgLogo} className="App_logo" alt="logo" />
          <h1 className="App_title">Welcome to React Academy App</h1>
        </header>
        <p className="App_intro">
          To get started, edit
          <code> src/App.js </code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
