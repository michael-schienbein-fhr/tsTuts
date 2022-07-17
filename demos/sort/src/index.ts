import {Sorter} from './Sorter';
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";

const characterCollection = new CharactersCollection('ThisIsAString');
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 99, 69]);
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(characterCollection);
sorter.sort();
sorter2.sort();
console.log(numbersCollection.data);
console.log(characterCollection.data);