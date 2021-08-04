import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App!</h1>
    //   </div>
    // );   
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'mahdi'),<Person name="mahdi" age="21"></Person>);
  }
}

export default App;
