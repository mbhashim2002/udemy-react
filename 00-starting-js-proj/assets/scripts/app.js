// // import { apiKey, foo as bar } from "./util.js";
// // import defaultVal from "./util.js";

// import * as util from "./util.js";

// console.log(`The biggest API key: ${util.apiKey}\n${util.default}`);
// util.foo();

// console.log(`Adding numbers: ${10+5}`);
// console.log(`String concat: ${'hello'+'world'}`);
// console.log(`=== comparison: ${1 === 1}`);
// console.log(`Other bool operators: < > <= >=`);

function greet(name = "Car", msg = "Meow") {
    console.log(`Hello ${name}. ${msg}.`);
    return `This is a message by the anti-${name} movement.`
}

greet();
greet("Jane", "Big chungus");
greet("Buh", "Guh");
console.log(greet())