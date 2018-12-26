import React, { Component } from 'react';
import './App.css';
import FoticosApi from './components/FoticosApi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FoticosApi/>
        </header>
      </div>
    );
  }
}

export default App;
