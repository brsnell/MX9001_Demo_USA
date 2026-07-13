import type { XYTriggerData } from './Types.js';
export declare class XYTrigger {
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
    protected __xyTriggerData: XYTriggerData | null;
    /**
     * Creates a new YAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param markerLayout The marker layout.
     */
    constructor(canvas: HTMLCanvasElement, triggerData: XYTriggerData | null);
    /**
     * Draws the marker to the canvas.
     */
    draw(): void;
}
//# sourceMappingURL=XYTrigger.d.ts.map