var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything(['a', 'b', 'c']);
// examples of generics with functions
function printStrings(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
}
function printNumbers(arr) {
    for (var i = 0; i < arr.length; i++)
        console.log(arr[i]);
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++)
        console.log(arr[i]);
}
printAnything(['a', 'b', 'c']);
printAnything([1, 2, 3]);
// Generic restraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car.');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house.');
    };
    return House;
}());
function printHousesOrCars(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new House, new House]);
printHousesOrCars([new Car, new Car]);
