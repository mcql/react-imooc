import React, { Component } from 'react';
import './App.css';
import Header from './component/public/Header'
import Home from './component/public/Home'

class App extends Component {
  render() {
    const user = {
      name : 'Anna',
      hobbies: ['Sports', 'Reading']
    }
    return (
      <div>
        <Header />
        <Home name = { "Max" } age = { 12 }  user = { user }>
          <p>I am  child</p>
        </Home>
      </div>
    );
  }
}

export default App;
