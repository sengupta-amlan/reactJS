import React, {Component}  from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //declared inside 
  //state is a property only in component possible
  state= {
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Mike', age:30}
    ],
    otherState:'some other value'
  };

  switchNameHandler =(newName)=>{
    console.log('Was clicked!');
    //Don't do this this.state.persons[0].name='Maxiimilan';
    //it completely replace so no otherState property on click
    this.setState({persons:[
      {name:newName, age:28},
      {name:'Manu', age:29},
      {name:'Mike', age:40},
    ]});
  };

  nameChangeHandler=(event)=>{
    this.setState({persons:[
      {name:'Max', age:28},
      {name:event.target.value, age:29},
      {name:'Mike', age:30},
    ]});
  }


  //don't add parenthesis
  //just pass reference
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={ ()=> this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Max!')}
                changed={this.nameChangeHandler}>
                My hobbies is Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //we can also pass method also as props, so we can change state in another component
    //person can change the state in app component
    //this compiled to the code below
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'));
  }
}


export default App;
