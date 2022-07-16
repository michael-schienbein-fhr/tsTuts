let apples: number = 5;
apples = 10;

console.log(apples.valueOf());

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

console.log(now);

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {

}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// functions
// annotations on the variable
const returnNum: (i: number) => number = (i: number) => {
    return i;
}
const logNum: (i: number) => void = (i: number) => {
    console.log(i);
}

// annotations on the function itself
const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

// function keyword
function divide(a: number, b: number): number {
    return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
    return a * b;
}

// when to use annotations
// 1 Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);
// 2 When we declare variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3 When variable type can't be inferred
let numbersOne = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersOne.length; i++) {
    if (numbersOne[i] > 0) {
        numberAboveZero = numbersOne[i];
    }
}

//void and never
const logger = (message: string): void => {
    console.log(message);
    // can return null or undefined

}
// use never when function will never return something
const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

const logWeatherTwo = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);

}

logWeatherTwo(todaysWeather)