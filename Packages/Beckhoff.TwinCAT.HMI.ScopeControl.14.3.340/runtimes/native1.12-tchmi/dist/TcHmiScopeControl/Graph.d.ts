import { type Dimensions, type Position, type LineSeries, type ScopeGraphLayout } from './Types.js';
export declare class LineGraph {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The points for the graph. */
    protected __points: Point[] | null;
    /** The point value from zero points for the graph. */
    protected __zeroPoint: Position | null;
    /** The point value from zero points for the graph. */
    protected __lineSeries: LineSeries[] | null;
    /** The layout for the graph. */
    protected __graphLayout: ScopeGraphLayout | null;
    /** The size for the grid. */
    protected __gridSizeLayout: {
        dimensions: Dimensions;
        position: Position;
    };
    /**
     * Creates a new LineGraph.
     * @param canvas The optional canvas element to drawing.
     */
    constructor(canvas: HTMLCanvasElement, graphLayout: ScopeGraphLayout | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    });
    /**
     * Draws the lineGraph to the canvas.
     */
    draw(): void;
    /**
     * Draws the line from start to end with the current lineState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderLineSegment;
    /**
     * Draws the mark from start to end with the current markState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderMarkSegment;
    /**
     * Draws the fill area from start to end with the current fillState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderFillSegment;
    /**
     * Sets the points.
     * @param points The new points.
     */
    setPoints(points: Point[]): void;
    /**
     * Sets the zeroPoint.
     * @param zeroPoint The new zeroPoint value.
     */
    setZeroPoint(zeroPoint: Position): void;
    /**
     * Sets the lineSeries.
     * @param lineSeries The new lineSeries value.
     */
    setLineSeries(lineSeries: LineSeries[]): void;
}
export interface Point {
    x: number;
    y: number;
}
//# sourceMappingURL=Graph.d.ts.map