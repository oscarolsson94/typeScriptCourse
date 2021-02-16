"use strict";
// const character = 'superman';
const me = {
    // as stated in the interface. The properties could have different values,
    // and the methods could do different things but have to return the same type.
    name: 'oscar',
    age: 26,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
let someone; // this will force the variable "someone" to comply to the interface IsPerson in the future
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
