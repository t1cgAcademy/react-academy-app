import React, {Component} from 'react';
import t1cgLogo from './t1cgLogo.png';
import style from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.App}>
        <header className={style.App_header}>
          <img src={t1cgLogo} className={style.App_logo} alt="logo" />
          <h1 className={style.App_title}>Welcome to React Academy App</h1>
        </header>
        <p className={style.App_intro}>
          To get started, edit
          <code> src/App.js </code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
