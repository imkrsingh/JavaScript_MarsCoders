//Example.1
/*
import { multiply } from "./utility.js";

const result = multiply(2, 3, 5);
console.log(result)

// Display the result on the webpage
const resultElement = document.getElementById("result");

resultElement.textContent = "Result: " + result;
*/


//Example.2 ||Rename import methods
/*
import { multiply as mul, addition as add} from "./utility.js";

const result = mul(2, 3, 5);
console.log(result)

const result1 = add(5,6,7);
console.log(result1)
*/


//Example.3
/*import { mul,add } from "./utility.js";

const result = mul(2, 3, 5);
const result1 = add(2, 3, 5);
console.log(result)
console.log(result1)*/


//Example.4 | whole import use * notation
/*import * as utility from "./utility.js";

const result = utility.mul(2, 3, 5);
const result1 = utility.add(2, 3, 5);
console.log(result)
console.log(result1)

console.log(utility.Student_Count)*/


//Example.5 | default export without using {}.

import add from "./utility.js";

const result1 =add(2, 3, 5);
console.log(result1)

// console.log(utility.Student_Count)