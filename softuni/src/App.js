import React, { Component } from 'react';
import './App.css';
import MainView from './components/MainView';
import NewEventView from "./components/NewEventView";

import DayView from "./components/DayView";

import './components/Events';



class App extends Component {
  render() {
    return (
        <MainView/>
    );
  }
}

export default App;
