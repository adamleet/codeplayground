const myName = 'adams';
let mySurname = 'ibrahim';
var myNewName = 'abiola';

let myAge = 24;

let myBirthYear = 2019 - myAge;

const myArray = [['adams', 'ibrahim'], ['taqwa', 'adeduntan'], ['nimah', 'nojimudeen']];

for(const [name,surname] of myArray){
    name === 'adams' ? console.log(name,surname) : console.log('your name is not adams');
}

const newMap = new Map ();
newMap.set('firstName', 'Adams').set('lastName', 'Ibrahim').set('age', 24).set('gender', 'male');

for (const [key,value] of newMap.entries()){
    console.log(`${key} is ${value}`);
}


function goodMorning(greet){

}

const goodMorning = function (){
    console.log('goodbye world');
}

const goodBye = function bye(){
    console.log('good bye and see you again');
}

for(let i = 0; i < 13; i++){
    for(let j = 0; j < 13; j++){
        console.log(`${i} multiplied by ${j} is ${j * i}`);
    }
}

function mean(...values){
    let total = 0;
    for(const value of values){
        total += value;   
    }
    let average = total/values.length;
    return average;
}

let peopleAges = [1994,1993,1994,1990,1993,1992,1991,1995,1996,2000,1989];
/*
for(let value of peopleAges){
    console.log(2019 - value);
}
*/
function calculateAges(...input){
    for(let age of input){
        console.log(2019 - age);
    }
}

function discount(price, amount=10){
    return price * (100 - amount) / 100;
}

const arrowFunction = x => x * x;
 
const discount = (price, amount=10) => price * (100 - amount) / 100;

const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    const taxables = taxable - 20000;
    const higherRate = 0.4 * taxables;
    return lowerRate + higherRate;
}

const 