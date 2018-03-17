import React, { Component } from 'react';
import logo from './logo.svg';
import RsvpList from './rsvps/RsvpList';
import TopicsList from './topics/TopicsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <TopicsList />

        <RsvpList />

      </div>
    );
  }
}

export default App;
