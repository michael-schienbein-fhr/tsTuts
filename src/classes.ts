class Vehicle {
    // color: string;

    constructor(public color: string) {
        // this.color = color;
    }

    // public drive(): void {
    //     console.log('It just goes!');
    // }

    protected honk(): void {
        console.log('BEEP!');
    }


}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    public startDriving(): void {
        this.honk()
        this.drive();
    }

    private drive(): void {
        console.log('VROOM!');
    }
}

const vehicle = new Vehicle('orange');
const car = new Car(4, 'green');

// vehicle.drive();
// vehicle.honk();
car.startDriving();
console.log(car.wheels, car.color);
console.log(vehicle.color);
// car.honk();
// vehicle.honk()