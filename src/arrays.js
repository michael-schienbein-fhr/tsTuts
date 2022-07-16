var carMakers = ['ford', 'honda', 'toyota'];
var emptyStringArr = [];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['accord'],
    ['camry']
];
var cars = [];
// Help with inference when extracting values
var car = carMakers[0];
var poppedCar = carMakers.pop();
// prevents incompatible values
// carMakers.push(100);
// help with map
carMakers.map(function (car) {
    return car.toUpperCase();
});
// flexible types
var importantDates = [new Date(), '2022-10-10'];
importantDates.push('2022-01-01');
importantDates.push(new Date());
// importantDates.push(100);
