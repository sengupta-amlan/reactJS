import React from 'react';
import Person from './Person/Person';

// Note: Person is list and instead of div
//function for presentation
const persons=(props)=>props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.changed(event, person.id)}
          />
    });
export default persons;
