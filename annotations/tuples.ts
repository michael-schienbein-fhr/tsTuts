const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
// declaration creates tuple
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 60];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];