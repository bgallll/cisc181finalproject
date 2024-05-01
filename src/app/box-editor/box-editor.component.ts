import {
    BindStyle,
    BindStyleToNumberAppendPx,
    BindValue,
    BindValueToNumber,
    Change,
    EzComponent,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import html from "./box-editor.component.html";
import css from "./box-editor.component.css";

export class BoxEditorComponent extends EzComponent {
    @BindStyleToNumberAppendPx("image", "padding")
    @BindValueToNumber("padding-input")
    padding: number = 0;

    @BindStyleToNumberAppendPx("image", "margin")
    @BindValueToNumber("margin-input")
    margin: number = 0;

    @BindStyle("image", "backgroundColor")
    @BindValue("background-select")
    background: string = "red";

    constructor() {
        super(html, css);
    }

    @Input("padding-input")
    onPaddingChange(v: ValueEvent) {
        this.padding = +v.value;
    }
    @Input("margin-input")
    onMarginChange(v: ValueEvent) {
        this.margin = +v.value;
    }

    @Change("background-select")
    onBackgroundChange(v: ValueEvent) {
        this.background = v.value;
    }
}
