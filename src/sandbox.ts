// const character = 'superman';

// console.log(character);

// const inputs = document.querySelectorAll('input'); //grabs all input tags

// console.log(inputs); //nodelist

// to compile this to javaScript:
// tsc sandbox.ts sandbox.js      <------ in terminal
// tsc sandbox.ts      <----- if both files have the same name, this is enough
// if the javaScript-file doesn't exist, it will be created upon compiling

// inputs.forEach(input => {
//     console.log(input);
// });

// for automatic compilation on save:
// tsc sandbox.ts -w         <----------- terminal

// Type Basics: --------------------------------------------
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;

//We can change the variable value, bot NOT the type of the variable.

// const circ = (diameter: number) => { //add type of the argument
//     return diameter * Math.PI
// };

// console.log(circ('hello')); //does not make sense. Logs "NaN" to the console
// console.log(circ(7.5)); // alows us to type check be fore compiling our code.

// arrays: -------------------------------------------------
// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad'); // fine
// names.push(3); // does not work, you can only add the variable types used while initializing the array

// let mixed = ['ken', 4, 'chun-li', 8, true];
// this array can contain strings, numbers and booleans

// objects: ------------------------------------------------
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }

// ninja.age = 40; // works fine
// ninja.name = 'ryu'; // fine
// ninja.age = '30'; // does NOT work, cannot change the type of age to string

// ninja.skills = ['fighting', 'sneaking']; // can NOT add new properties

// ninja = { // can assign it to a new object, but the properties MUST match

//     name: 'yoshi',
//     belt: 'orange',
//     age: 40

// }

// explicit types ------------------------------------------------------------------------
// let character: string; // initialize a variable but dont assign it a value
// let age: number;
// let isLoggedIn: boolean;

// arrays -----------------
// let ninjas: string[] = []; // can only be an array of strings. Initialized as an empty array.

// union types -----------------
// let mixed: (string|number)[] = []; // can now store strings and numbers in the array

// let uid: string | number; // uid can now be a string or a number

// objects -----------------
// let ninjaOne: object; // it can now be any type of object. Ex and array. Can also have any properties.
// ninjaOne = { name: 'yoshi', age: 30 };

// let ninjaTwo: { // more specific, must be an object with ALL of the following properties
//     name: string,
//     age: number,
//     beltColour:string
// }

// ninjaTwo = {name:'mario', age:20, beltColour:'black', skills:[]} // does NOT work, can't add "skills"-property.

// dynamic types  ---------------------------------------------------------------------------------
// let age: any; // can later be changed to any other type

// age = 25; // works
// age = 'hello'; // also works

// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false); // also fine

// let ninja: { name: any, age: any }; // must be an object with name and age properties, but the properties can have any types.

// ninja = { name: 'yoshi', age: 25 };

// should not really be used in typeScript, defeats the purpose of the language.

// How to setup dev environment --------------------------------------------------------------------

// make public-folder for html/css/js files. Make src-folder for other stuff, ex typeScript file

// tsc --init             -> gives tsconfig.json

// un-comment "rootDir": "./" and change it to: "rootDir": "./src"

// un-comment "outDir": "./" and change it to: "outDir": "./public"

// tsc -w            -> will now watch ALL the files in the /src-file

// last step: to avoid stuff outside of /src-folder to be compiled:
// ,"include":["src"] before the closing of the object in tsconfig.json

// Functions -----------------------------------------------------------------------------

// let greet: Function; // greet can only be a function

// greet = () => {
//     console.log('Hello, world');
// }

// Use one of the following if you want an optional parameter in your function:
// Put your optional parameters at the end

// const add = (a:number, b:number, c?: number|string) => { // c is now an OPTIONAL parameter (cus of the "?") that can be either of type number or string, defaults to undefined
//     console.log(a + b);
// }

// const add = (a:number, b:number, c: number|string = 10) => { // c is now an OPTIONAL parameter that defaults to 10.
//     console.log(a + b);
// }

// add(5, 10);

// const minus = (a: number, b: number) => {
//     return a - b;
// }

// let result = minus(10, 7); // result will be a number, assigned by the return statement from the function

// const minus = (a: number, b: number): number => { // here we manuallly force the return type to be a number
//     return a - b;
// }

// Type Aliases ----------------------------------------------------------------------------------

// type StringOrNum = string | number;

// type userStringId = { name: string, uid: StringOrNum }

// const greet = (user: userStringId) => {
//     console.log(`${user.name} says hello`)
// }

// Function signatures
// let greet: Function;

// // example 1
// let greet: (a: string, b: string) => void; // the variable can hold a function which takes in 2 string parameters and returns void.
// greet = (name: string, greeting: string) => { //example 
//     console.log(`${name} says ${greeting}`);
// }
// // example 2
// let calc: (a: number, b: number, c: string) => number;

// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo; //in both cases we are returning a number
//     } else {
//         return numOne - numTwo;
//     }
// }

// // example 3
// let logDetails: (obj: { name: string, age: number }) => void;

// type person = { name: string, age: number }; // using types

// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }

// DOM ----------------------------------------

// const anchor = document.querySelector('a')!; //<---- add ! if you are sure there is an <a>-tag in the DOM

// console.log(anchor.href) // typeScript doesnt know if there is an <a>-tag in the dom or not

// const form = document.querySelector('form')!; // typescript knows what kind of element it is, and what methods it has available

// const form = document.querySelector('.new-item-form'); //typescript doesnt know what kind of element it is, only that it has a class
// const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type cast it into a Form-element

// classes -----------------------------------
// class Invoice{

    // client: string; // can be private, public and readonly
    // details: string;
    // amount: number;

    // constructor(c:string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

// ----->
//     constructor( // declare and assign in one step, inside the constructor parantesis
//         readonly client: string, // to do this you must use access modifiers
//         private details: string,
//         public amount:number
//     ){}

//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = []; // only allowing Invoice objects in the array

// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices);

// invoices.forEach(invoice => {
//     console.log(invoice.client, invoice.amount, invoice.format());
// });


// // inputs --------------------------
// const type = document.querySelector('#type')! as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
// const details = document.querySelector('#details')! as HTMLInputElement;
// const amount = document.querySelector('#amount')! as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault(); // prevents browser from refreshing on submit

//     console.log( // grab values from the input fields (as strings)
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber // grab the value as a number instead of a string
//     )

// })

// To use Modules -----------------------------------------------
// in tsconfig.json - change to: "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
//                               "module": "es2015"
// add: type="module" to the script tag in html that connects your js-file.
// export from one file: "export class Invoice"
// import from other file: "import { Invoice } from './classes/Invoice.js'"
// Always use .js-extension even when importing in typescript

// Interfaces ---------------------------------------------------------

interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = { // an instance of the interface must have the same properties and methods
                       // as stated in the interface. The properties could have different values,
                       // and the methods could do different things but have to return the same type.
    name:'oscar',
    age: 26,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount);
        return amount;
    }    
}

let someone: IsPerson; // this will force the variable "someone" to comply to the interface IsPerson in the future

const greetPerson = (person: IsPerson) => { // this method can only take in an object that complies to the IsPerson interface
    console.log('hello ', person.name);
}

greetPerson(me);
        