import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Gaby", age: 27},
      {name: "Charlie", age: 30}
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Gaby", age: 27 },
        { name: event.target.value, age: 29 }
      ]
    } )
  }

  switchNameHandler = (newName) => {
    console.log("Was clicked!");
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: "Charlie", age: 30 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button onClick={() => this.switchNameHandler("Polly")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}   
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Gaby")}>My Hobbies: Reading</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
