import {CsvFileReader} from "./CsvFileReader";
import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";

// import fs from 'fs';
//
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
// })
//     .split('\n')
//     .map((row: string): string[] => {
//         return row.split(',');
//     });

const reader = new CsvFileReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
console.log(reader.data[0]);
console.log(dateOfFirstMatch);
// enum MatchResult {
//     HomeWin = "H",
//     AwayWin = "A",
//     Draw = "D"
// }

// const printMatchResult = (): MatchResult => {
//     if (match[5] === 'H') {
//         return MatchResult.HomeWin;
//     }
//     return MatchResult.AwayWin;
// }

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);