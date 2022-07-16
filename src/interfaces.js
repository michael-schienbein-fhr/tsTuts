var oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var printVehicle = function (vehicle) {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
var oldAccord = {
    name: 'Accord',
    year: new Date(),
    broken: false,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var drink = {
    color: 'brown',
    carbonated: 'true',
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar.");
    }
};
var printSummary = function (item) {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(item.summary());
};
printSummary(oldAccord);
printSummary(drink);
