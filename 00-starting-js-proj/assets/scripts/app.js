// // import { apiKey, foo as bar } from "./util.js";
// // import defaultVal from "./util.js";

// import * as util from "./util.js";

// console.log(`The biggest API key: ${util.apiKey}\n${util.default}`);
// util.foo();

// console.log(`Adding numbers: ${10+5}`);
// console.log(`String concat: ${'hello'+'world'}`);
// console.log(`=== comparison: ${1 === 1}`);
// console.log(`Other bool operators: < > <= >=`);

// function greet(name = "Car", msg = "Meow") {
//     console.log(`Hello ${name}. ${msg}.`);
//     return `This is a message by the anti-${name} movement.`
// }

// greet();
// greet("Jane", "Big chungus");
// greet("Buh", "Guh");
// console.log(greet())

// const anonymous_func = function() {
//     console.log('Anonymous function with function keyword');
// }

// const anonymous_func2 = () => {
//     console.log('Arrow function')
// }

// // export default function() {
// //     console.lo('Exporting default anonymous function')
// // }

// export default (x) => {
//     return x*x;
// }

// const user = {
//     name: "Magnus the Red",
//     age: 12,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hii you are ${this.age} years old!`);
//     }
// }

// const user1 = new User("Guh", 142);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex(item => item === "Cooking");

// const index2 = hobbies.findIndex((item) => {
//     return item === "Cooking";
// })

// console.log(index);
// console.log(index2);

// //have to put object in () because otherwise the curly brackets will be interprested as function definers
// const editedHobbies = hobbies.map(item => ({text: item}));

// console.log(editedHobbies);

// const [firstName, lastName] = ["Big", "Chungus"];
const userNameData = ["Big", "Chungus"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = userNameData;
console.log(`${firstName} ${lastName}`);

const { name: userName, age } = {
    name: "Max",
    age: 34,
};

console.log(`${userName} who is ${age} years old.`);

function storeOrder(order) {
    localStorage.setItem("id", order.id);
    localStorage.setItem("currency", order.currency);
}
//can destructure function params above like so:
function storeOrderDestructure({id, currency}){
    localStorage.setItem("id", order.id);
    localStorage.setItem("currency", order.currency);
}

storeOrder({id: 5, currency: 'USD', amount: 15.99});