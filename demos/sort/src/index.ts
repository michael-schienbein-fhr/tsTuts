import {Sorter} from './Sorter';
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const characterCollection = new CharactersCollection('ThisIsAString');
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 99, 69]);

const linkedList = new LinkedList()
linkedList.add(400);
linkedList.add(1);
linkedList.add(-5);
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(characterCollection);
// const sorter3 = new Sorter(linkedList);

// sorter.sort();
// sorter2.sort();
// sorter3.sort();
characterCollection.sort();
numbersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
linkedList.print()

