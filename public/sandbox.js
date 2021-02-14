"use strict";
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
// example 1
var greet; // the variable can hold a function which takes in 2 string parameters and returns void.
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
