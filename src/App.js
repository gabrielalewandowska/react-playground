import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Gaby", age: 27},
      {name: "Charlie", age: 30}
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Gaby", age: 27 },
        { name: event.target.value, age: 29 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 28 },
      { name: "Charlie", age: 30 }
    ]})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
