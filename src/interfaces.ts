interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;

    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }


}

const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
}

printVehicle(oldCivic);

interface Reportable {
    summary(): string;
}

const oldAccord = {
    name: 'Accord',
    year: new Date(),
    broken: false,
    summary(): string {
        return `Name: ${this.name}`;
    }


}

const drink = {
    color: 'brown',
    carbonated: 'true',
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`
    }
}
const printSummary = (item: Reportable): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(item.summary());
}

printSummary(oldAccord);
printSummary(drink);