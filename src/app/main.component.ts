import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { BoxEditorComponent } from "./box-editor/box-editor.component";
import { SummaryStatsComponent } from "./summary-stats/summary-stats.component";

export class MainComponent extends EzComponent {
    private myText: string = "";
    private summarystats: SummaryStatsComponent = new SummaryStatsComponent();
    private boxEditor = new BoxEditorComponent();

    box: BoxEditorComponent;

    constructor() {
        super(html, css);
        this.addComponent(this.boxEditor, "box");
        this.box = this.boxEditor;
        this.addComponent(this.summarystats, "summarystats");
    }
}
