import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent, BindValue } from "@gsilber/webez";
import { BoxEditorComponent } from "./box-editor/box-editor.component";

export class MainComponent extends EzComponent {
    @BindValue("example-target")
    private myText: string = "";

    private boxEditor = new BoxEditorComponent();

    box: BoxEditorComponent;

    constructor() {
        super(html, css);
        this.addComponent(this.boxEditor, "box");
        this.box = this.boxEditor;
    }
}
