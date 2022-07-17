"use strict";
// class Sorter {
//     collection: number[];
//
//     constructor(public collection: number[]) {
//         this.collection = collection;
//     }
// }
// export class Sorter {
//     constructor(public collection: /* set type*/) {
//     }
//
//     sort(): void {
//         const {length} = this.collection;
//
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 if (this.collection instanceof Array) {
//                     // use instanceof for values created with constructor
//                     // type guard forces collection to be Array
//                     // all this only works if collection is number[]
//                     // if collection is array of numbers
//                     if (this.collection[j] > this.collection[j + 1]) {
//                         const leftEl = this.collection[j];
//                         this.collection[j] = this.collection[j + 1];
//                         this.collection[j + 1] = leftEl;
//                     }
//                 }
//                 if (typeof this.collection === 'string') {
//                     // use typeof for primitives
//                     // only works if collection: string
//                     // if collection is a string, do this instead:
//
//                 }
//             }
//         }
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
