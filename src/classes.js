var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // color: string;
    function Vehicle(color) {
        this.color = color;
        // this.color = color;
    }
    // public drive(): void {
    //     console.log('It just goes!');
    // }
    Vehicle.prototype.honk = function () {
        console.log('BEEP!');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.startDriving = function () {
        this.honk();
        this.drive();
    };
    Car.prototype.drive = function () {
        console.log('VROOM!');
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle('orange');
var car = new Car(4, 'green');
// vehicle.drive();
// vehicle.honk();
car.startDriving();
console.log(car.wheels, car.color);
console.log(vehicle.color);
// car.honk();
// vehicle.honk()
