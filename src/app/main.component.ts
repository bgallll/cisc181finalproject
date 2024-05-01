import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue } from "@gsilber/webez";

interface SummaryStatistics {
    mean: number;
    median: number;
    mode: number;
    range: number;
    dataSetSize: number;
    standardDeviation: number;
    variance: number;
    iqr: number;
}

export class MainComponent extends EzComponent {
    numberList: string = "";
    summaryStatistics: SummaryStatistics = {
        mean: 0,
        median: 0,
        mode: 0,
        range: 0,
        dataSetSize: 0,
        standardDeviation: 0,
        variance: 0,
        iqr: 0,
    };

    calculateStatistics() {
        const numbers: number[] = this.numberList.split(",").map(Number);
        this.summaryStatistics.mean = this.calculateMean(numbers);
        this.summaryStatistics.median = this.calculateMedian(numbers);
        this.summaryStatistics.range = this.calculateRange(numbers);
        this.summaryStatistics.dataSetSize = numbers.length;
        this.summaryStatistics.standardDeviation =
            this.calculateStandardDeviation(numbers);
        this.summaryStatistics.variance = this.calculateVariance(numbers);
        this.summaryStatistics.iqr = this.calculateIQR(numbers);
    }

    generateGraph() {}

    private calculateMean(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    }

    private calculateMedian(numbers: number[]): number {
        const sortedNumbers: number[] = numbers.sort((a, b) => a - b);
        const mid: number = Math.floor(sortedNumbers.length / 2);
        return sortedNumbers.length % 2 === 0 ?
                (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
            :   sortedNumbers[mid];
    }

    private calculateRange(numbers: number[]): number {
        // Calculate the range (max - min)
        return Math.max(...numbers) - Math.min(...numbers);
    }

    private calculateStandardDeviation(numbers: number[]): number {
        const variance: number = this.calculateVariance(numbers);
        return Math.sqrt(variance);
    }

    private calculateVariance(numbers: number[]): number {
        const mean: number = this.calculateMean(numbers);
        return this.calculateMean(
            numbers.map((num) => Math.pow(num - mean, 2)),
        );
    }

    private calculateIQR(numbers: number[]): number {
        const sortedNumbers: number[] = numbers.sort((a, b) => a - b);
        const mid: number = Math.floor(sortedNumbers.length / 2);
        const q1: number = this.calculateMedian(sortedNumbers.slice(0, mid));
        const q3: number = this.calculateMedian(sortedNumbers.slice(mid + 1));
        return q3 - q1;
    }

    @BindValue("example-target")
    private myText: string = "";

    constructor() {
        super(html, css);
    }
}
