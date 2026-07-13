import type { ScopeLayoutAxis } from './Types.js';
export declare class XAxis {
    /** The labelFontFamily as string. */
    protected __labelFontFamily: TcHmi.FontFamily | null;
    /** The labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The labelFontSizeUnit as string. */
    protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The labelFontWeight as string. */
    protected __labelFontWeight: TcHmi.FontWeight | null;
    /** The axisNameFontFamily as string. */
    protected __axisNameFontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __axisNameFontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __axisNameFontWeight: TcHmi.FontWeight | null;
    /** The layout for the axis. */
    protected __xAxisLayout: ScopeLayoutAxis | null;
    /** The id as number. */
    protected __id: number;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The themeResourcesHeadlineColor as string. */
    protected __themeResourcesHeadlineColor: string | null;
    /** The themeResourcesAxisColor as string. */
    protected __themeResourcesAxisColor: string | null;
    /**
     * Creates a new YAxis.
     * @param id The number of yAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param xAxisLayout The xAxis layout.
     */
    constructor(id: number, canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
    /**
     * Draws the xAxis to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param endPoint The endpoint to drawing (top/right).
     */
    drawAxis(): void;
    /**
     * Returns the id.
     * @returns The id of the axis.
     */
    getId(): number;
}
//# sourceMappingURL=XAxis.d.ts.map