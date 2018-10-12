import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logeo from './componentes/Logeo';


class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={logo} className="App-logo" alt="logo" />
          <Logeo/>
      </div>
    );
  }
}

export default App;
