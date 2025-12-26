//let generateName = require('sillyname'); // simple commonjs
import generateName from "SillyName"; //here we are using the echma script.
let SillyName = generateName();
console.log(`My name is ${SillyName}.`);
import {randomSuperhero} from "superheroes";
let supnames = randomSuperhero();
console.log(`i am a ${supnames}`);


// JavaScript string interpolation is a modern, clean way to create dynamic 
// strings by embedding variables and expressions directly into a string literal using template literals. 

// const name = 'Alice';
//  const age = 25;
//  Using string interpolation
//  const sentence = `My name is ${name} and I am ${age} years old.`;
// console.log(sentence);
//  Output: My name is Alice and I am 25 years old.
