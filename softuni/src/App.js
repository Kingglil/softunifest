import React, { Component } from 'react';
import './App.css';
import MainView from './components/MainView';
import NewEventView from "./components/NewEventView";


class App extends Component {
  render() {
    return (
      <NewEventView/>
    );
  }
}

export default App;
