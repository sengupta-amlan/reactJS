import React, {Component}  from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  //declared inside 
  //state is a property only in component possible
  state= {
    persons:[
      {id:'asf1',name:'Max', age:28},
      {id:'vasdf1',name:'Manu', age:29},
      {id:'yqi12',name:'Mike', age:30}
    ],
    otherState:'some other value',
    showPerson:false
  };

  nameChangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    })

    const person={
      ...this.state.persons[personIndex]
    };
    console.log(person);
    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  // //this would create a problem
  // togglePersonHandler(){
  // }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPerson;
    this.setState({showPerson:!doesShow})
  }

  //don't add parenthesis
  //just pass reference
  //ternary operations instead of directive
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons=null;

    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
              click={()=>this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangeHandler(event,person.id)}/>  
          })}
        
        </div>
      );
    }
      
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggler</button>
        {persons}
      </div>
    );
    //we can also pass method also as props, so we can change state in another component
    //person can change the state in app component
    //this compiled to the code below
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'));
  }
}

export default App;


