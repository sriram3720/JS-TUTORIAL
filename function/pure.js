
//pure function 
 
function greet(name){
    return `hi ${name}`
}

let result= greet("ram");
console.log(result);

//impure function

let message="good morning"
function sayHello(name){
    return `${message} ${name}`
}

let output = sayHello("prem");

console.log(output);