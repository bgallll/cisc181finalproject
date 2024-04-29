import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue } from "@gsilber/webez";

export class MainComponent extends EzComponent {
    data: string = "";
    selectedGraph: string = "";
    summaryStatistics: any = {};

    calculateStatistics() {
        this.summaryStatistics.mean = 0; 
        this.summaryStatistics.median = 0;
        this.summaryStatistics.standardDeviation = 0;
        
    }

    generateGraph() {
        
    }

    @BindValue("example-target")
    private myText: string = "Hello from the TypeScript side!";

    constructor() {
        super(html, css); 
    }
}