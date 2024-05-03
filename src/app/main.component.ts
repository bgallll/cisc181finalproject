import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { SummaryStatsComponent } from "./summary-stats/summary-stats.component";

export class MainComponent extends EzComponent {
    private myText: string = "";
    private summarystats: SummaryStatsComponent = new SummaryStatsComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.summarystats, "summarystats");
    }
}
