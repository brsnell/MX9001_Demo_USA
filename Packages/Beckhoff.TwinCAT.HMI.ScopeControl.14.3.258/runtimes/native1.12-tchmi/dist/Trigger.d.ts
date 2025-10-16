import { type TriggerData } from './Types.js';
export declare class Trigger {
    /** The axisNameFontFamily as string. */
    protected __fontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __fontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __fontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __fontWeight: TcHmi.FontWeight | null;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The positions for the marker */
    protected __triggerData: TriggerData | null;
    /**
     * Creates a new YAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param markerLayout The marker layout.
     */
    constructor(canvas: HTMLCanvasElement, triggerData: TriggerData | null);
    /**
     * Draws the marker to the canvas.
     */
    draw(): void;
    /**
     * Returns the calculated label.
     * @returns The calculated label.
     */
    private getCuttedString;
    /**
     * Returns the trigger data.
     * @returns The trigger data.
     */
    getTriggerData(): TriggerData | null;
    /**
     * Sets the triggerData.
     * @param triggerData The triggerData value.
     */
    setTriggerData(triggerData: TriggerData | null): void;
}
//# sourceMappingURL=Trigger.d.ts.map