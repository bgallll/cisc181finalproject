import {
    EzComponent,
    BindValue,
    Click,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import html from "./summary-stats.component.html";
import css from "./summary-stats.component.css";

export class SummaryStatsComponent extends EzComponent {
    @BindValue("number-list")
    private numberList: string = "";

    @BindValue("mean-data")
    private mean: string = "";

    @BindValue("median-data")
    private median: string = "";

    @BindValue("range-data")
    private range: string = "";

    @BindValue("data-set-size")
    private dataSetSize: string = "";

    @BindValue("standard-deviation-data")
    private standardDeviation: string = "";

    @BindValue("variance-data")
    private variance: string = "";

    @BindValue("iqr-data")
    private iqr: string = "";

    constructor() {
        super(html, css);
    }

    @Click("calculate-statistics-button")
    calculateStatistics() {
        console.log(this.numberList);
        const numbers: number[] = this.numberList.split(",").map(Number);
        console.log(numbers);
        this.mean = this.calculateMean(numbers).toString();
        this.median = this.calculateMedian(numbers).toString();
        this.range = this.calculateRange(numbers).toString();
        this.dataSetSize = numbers.length.toString();
        this.standardDeviation =
            this.calculateStandardDeviation(numbers).toString();
        this.variance = this.calculateVariance(numbers).toString();
        this.iqr = this.calculateIQR(numbers).toString();
    }

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

    @Input("number-list")
    onNumberListChange(event: ValueEvent) {
        this.numberList = event.value;
        console.log(this.numberList);
    }
}
