import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Tasks from './components/Tasks';


class App extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <Tasks></Tasks>
      </div>
    );
  }
}

export default App;
