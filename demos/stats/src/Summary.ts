import {MatchData} from "./MatchData";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {HtmlReports} from "./reportTargets/HtmlReports";
import {ConsoleReport} from "./reportTargets/ConsoleReport";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {

    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget) {
    }

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReports()
        )
    }

    static winsAnalysisWithConsoleReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new ConsoleReport()
        )
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}