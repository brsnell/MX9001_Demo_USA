import type { Dimensions, Position, ScopeLayoutAxis } from './Types.js';
export declare class Subgrid {
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
    protected __themeResourcesSubgridColor: string | null;
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null);
    /**
     * Draws the subgrid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the subgrid.
     * @param height The height of the subgrid.
     * @param numberOfLinesBetweenMainGridWidth The number of lines between maingrid in width.
     * @param widthBetweenMainGrid The width between two main grid lines.
     * @param numberOfLinesBetweenMainGridHeight The number of lines between maingrid in height.
     * @param heightBetweenMainGrid The height between two main grid lines.
     * @param numberOfMainGridWidthLines The number of main grid width lines.
     * @param numberOfMainGridHeightLines The number of main grid height lines.
     * @param gridLineWidth The line width of the grid.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(): void;
}
//# sourceMappingURL=Subgrid.d.ts.map