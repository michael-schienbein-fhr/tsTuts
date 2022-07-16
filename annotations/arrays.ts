const carMakers = ['ford', 'honda', 'toyota'];
const emptyStringArr: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['accord'],
    ['camry']
]

const cars: string[][] = []
// Help with inference when extracting values
const car = carMakers[0];
const poppedCar = carMakers.pop();

// prevents incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car): string => {
    return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2022-10-10'];
importantDates.push('2022-01-01');
importantDates.push(new Date());
// importantDates.push(100);