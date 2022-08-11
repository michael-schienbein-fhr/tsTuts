import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";


// import fs from 'fs';
//
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
// })
//     .split('\n')
//     .map((row: string): string[] => {
//         return row.split(',');
//     });

// const reader = new MatchReader('football.csv');
// reader.read();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(reader.data[0]);
// console.log(dateOfFirstMatch);
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

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithConsoleReport('Man United');
const summary2 = Summary.winsAnalysisWithConsoleReport('Liverpool');
const summary3 = Summary.winsAnalysisWithHtmlReport('Newcastle');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
summary3.buildAndPrintReport(matchReader.matches);
