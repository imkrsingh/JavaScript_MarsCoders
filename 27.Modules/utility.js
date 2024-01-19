//Example.1
//Rename export methods

/*export function multiply(a, b, c){
    return a*b*c;
}*/


//Example.2
//Rename import & export methods
/*
function multiply(a, b, c) {
    return a * b * c;
}

function addition(a, b, c) {
    return a + b + c;
}
export { multiply, addition };
*/


// Example.3 ||Rename export methods
/*function multiply(a, b, c){
    return a*b*c;
}

export function addition(a, b, c){
    return a+b+c;
}

export{
    multiply as mul,
    addition as add
}*/


// Example.4 | 
/*function multiply(a, b, c){
    return a*b*c;
}

function addition(a, b, c){
    return a+b+c;
}


export const Student_Count = 26+" Students";

export{
    multiply as mul,
    addition as add
}*/


//Example.5 |Default export

export default function addition(a, b, c){
    return a+b+c;
}

