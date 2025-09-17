import type { Dimensions, Position, ScopeLayoutAxis } from './Types.js';
export declare class Grid {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The layout for the xAxis. */
    protected __xAxisLayout: ScopeLayoutAxis | null;
    /** The layout for the yAxis. */
    protected __yAxisLayout: ScopeLayoutAxis | null;
    /** The gridSize. */
    protected __gridSize: {
        dimensions: Dimensions;
        position: Position;
    } | null;
    /** The themeResourcesSubgridColor as string. */
    protected __themeResourcesGridColor: string | null;
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null);
    /**
     * Draws the grid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the grid.
     * @param height The height of the grid.
     * @param numberOfWidthLines The number of width lines.
     * @param numberOfHeightLines The number of height lines.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(): void;
}
//# sourceMappingURL=Grid.d.ts.map