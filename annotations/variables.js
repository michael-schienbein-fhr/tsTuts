var apples = 5;
apples = 10;
console.log(apples.valueOf());
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
console.log(now);
// arrays
var colors = ['red', 'green', 'blue'];
var myNums = [1, 2, 3];
var truths = [true, true, false];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// object literal
var point = {
    x: 10,
    y: 20
};
// functions
// annotations on the variable
var returnNum = function (i) {
    return i;
};
var logNum = function (i) {
    console.log(i);
};
// annotations on the function itself
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
// function keyword
function divide(a, b) {
    return a / b;
}
// anonymous function
var multiply = function (a, b) {
    return a * b;
};
// when to use annotations
// 1 Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coords = JSON.parse(json);
console.log(coords);
// 2 When we declare variable on one line and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
// 3 When variable type can't be inferred
var numbersOne = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbersOne.length; i++) {
    if (numbersOne[i] > 0) {
        numberAboveZero = numbersOne[i];
    }
}
//void and never
var logger = function (message) {
    console.log(message);
    // can return null or undefined
};
// use never when function will never return something
var throwError = function (message) {
    throw new Error(message);
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
var logWeatherTwo = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeatherTwo(todaysWeather);
