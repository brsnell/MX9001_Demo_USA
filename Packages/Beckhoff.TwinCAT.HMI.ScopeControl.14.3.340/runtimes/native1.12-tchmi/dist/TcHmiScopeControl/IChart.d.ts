export declare class IChart {
    /** The elementRoot as jquery object. */
    protected __elementRoot: JQuery;
    /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
    protected __canvasFrame: HTMLCanvasElement | undefined;
    /** The canvas to drawing the lines as HTMLCanvasElement. */
    protected __canvasDrawing: HTMLCanvasElement | undefined;
    /** The canvas to drawing the lines as HTMLCanvasElement. */
    protected __canvasZooming: HTMLCanvasElement | undefined;
    /** The canvas to drawing the marker as HTMLCanvasElement. */
    protected __canvasMarker: HTMLCanvasElement | undefined;
    /** The canvas frame context as CanvasRenderingContext2D. */
    protected __contextFrame: CanvasRenderingContext2D | null | undefined;
    /** The canvas context drawing as CanvasRenderingContext2D. */
    protected __contextDrawing: CanvasRenderingContext2D | null | undefined;
    /** The canvas context drawing as CanvasRenderingContext2D. */
    protected __contextZooming: CanvasRenderingContext2D | null | undefined;
    /** The canvas context marker as CanvasRenderingContext2D. */
    protected __contextMarker: CanvasRenderingContext2D | null | undefined;
    /**
     * Creates a new IChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Removes all canvas elements.
     */
    remove(): void;
    /**
     * Clears all canvas elements.
     */
    clear(width: number, height: number): void;
    /**
     * Returns the root element.
     * @returns The root element.
     */
    getRootElement(): JQuery<HTMLElement>;
    /**
     * Returns the canvas object where the graphs are drawing.
     * @returns The canvas where drawing the graphs.
     */
    getCanvasDrawing(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where the axis, grid and subgrid are drawing.
     * @returns The canvas where drawing axis, grid and subgrid.
     */
    getCanvasFrame(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where you can make interactions.
     * @returns The canvas for interactions.
     */
    getCanvasZooming(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where the marker are drawing.
     * @returns The canvas where drawing marker.
     */
    getCanvasMarker(): HTMLCanvasElement | undefined;
    /**
     * Creates the canvas where axis, grid and subgrid are drawing.
     */
    __initCanvas(canvasWidth: number, canvasHeight: number): void;
}
//# sourceMappingURL=IChart.d.ts.map