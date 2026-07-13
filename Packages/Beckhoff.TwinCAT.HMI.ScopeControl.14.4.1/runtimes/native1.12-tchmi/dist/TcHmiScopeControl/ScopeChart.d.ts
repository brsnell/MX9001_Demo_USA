import { LineGraph } from './Graph.js';
import { Grid } from './Grid.js';
import { IChart } from './IChart.js';
import { Subgrid } from './Subgrid.js';
import { Trigger } from './Trigger.js';
import type { Dimensions, Position, ScopeGraphLayout, ScopeLayoutAxis, ScopeLayoutChart, TriggerData, XYTriggerData } from './Types.js';
import { XAxis } from './XAxis.js';
import { XYTrigger } from './XYTrigger.js';
import { YAxis } from './YAxis.js';
export declare class ScopeChart extends IChart {
    /** The yAxis as YAxis[]. */
    protected __yAxis: YAxis[];
    /** The xAxis as XAxis object. */
    protected __xAxis: XAxis[];
    /** The grid as Grid object. */
    protected __grid: Grid[];
    /** The subgrid as Subgrid object. */
    protected __subgrid: Subgrid[];
    /** The trigger as Trigger object */
    protected __trigger: Trigger[];
    /** The xyTrigger as Trigger object */
    protected __xyTrigger: XYTrigger[];
    /** The xyTrigger as Trigger object */
    protected __axisGroupForegroundColor: string;
    /** The lineGraphs as LineGraph object. */
    protected __lineGraph: Map<string, LineGraph>;
    /** The hasChanged as boolean. */
    private __hasChanged;
    /** The lineChanged as boolean. */
    protected __lineChanged: boolean;
    /**
     * Creates a new ScopeChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Adds a xAxis (only one xAxis are exists).
     * @returns The hasChanged attribute.
     */
    addXAxis(xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): XAxis | null;
    /**
     * Adds a xAxis at index.
     * @param index The index where the new xAxis should added in array.
     */
    addXAxisAtPosition(index: number, xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Delete the xAxis at index.
     * @param index The index.
     */
    deleteXAxis(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllXAxis(): void;
    /**
     * Adds a yAxis.
     */
    addYAxis(yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Adds a yAxis at index.
     * @param index The index where the new yAxis should added in array.
     */
    addYAxisAtPosition(index: number, yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Delete the yAxis at index.
     * @param index The index.
     */
    deleteYAxis(index: number): void;
    /**
     * Delete all yAxis.
     */
    deleteAllYAxis(): void;
    /**
     * Adds a grid.
     */
    addGrid(xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null): void;
    /**
     * Adds a grid at index.
     * @param index The index where the new grid should added in array.
     */
    addGridAtPosition(index: number, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null): void;
    /**
     * Delete the grid at index.
     * @param index The index.
     */
    deleteGrid(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllGrids(): void;
    /**
     * Adds a subgrid.
     */
    addSubgrid(xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null): void;
    /**
     * Adds a subgrid at index.
     * @param index The index where the new subgrid should added in array.
     */
    addSubgridAtPosition(index: number, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null): void;
    /**
     * Delete the subgrid at index.
     * @param index The index.
     */
    deleteSubgrid(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllSubgrids(): void;
    /**
     * Adds a __trigger.
     */
    addTrigger(triggerData: TriggerData | null): void;
    /**
     * Adds a __trigger at index.
     * @param index The index where the new __trigger should added in array.
     */
    addTriggerAtPosition(index: number, triggerData: TriggerData | null): void;
    /**
     * Delete the __trigger at index.
     * @param index The index.
     */
    deleteTrigger(index: number): void;
    /**
     * Delete all trigger.
     */
    deleteAllTriggers(): void;
    /**
     * Adds a xyTrigger.
     */
    addXYTrigger(xyTriggerData: XYTriggerData | null): void;
    /**
     * Adds a xyTrigger at index.
     * @param index The index where the new __trigger should added in array.
     */
    addXYTriggerAtPosition(index: number, xyTriggerData: XYTriggerData | null): void;
    /**
     * Delete the xyTrigger at index.
     * @param index The index.
     */
    deleteXYTrigger(index: number): void;
    /**
     * Delete all xyTrigger.
     */
    deleteAllXYTriggers(): void;
    /**
     * Adds a linegraph.
     */
    addLineGraph(graphLayout: ScopeGraphLayout | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }): void;
    /**
     * Delete all linegtaphs.
     */
    deleteAllLineGraphs(): void;
    /**
     * Removes all canvas elements.
     */
    remove(): void;
    /**
     * Clears all canvas elements.
     */
    clear(width: number, height: number): void;
    /**
     * Returns all yAxis.
     * @returns The yAxis.
     */
    getYAxis(): YAxis[];
    /**
     * Returns the specific yAxis.
     * @param index The index.
     * @returns The yAxis at index.
     */
    getYAxisAtPosition(index: number): YAxis;
    /**
     * Returns all xAxis.
     * @returns The xAxis.
     */
    getXAxis(): XAxis[];
    /**
     * Returns the specific xAxis.
     * @param index The index.
     * @returns The xAxis at index.
     */
    getXAxisAtPosition(index: number): XAxis;
    /**
     * Returns the grid.
     * @returns The grid.
     */
    getGrid(): Grid[];
    /**
     * Returns the specific grid.
     * @param index The index.
     * @returns The grid at index.
     */
    getGridAtPosition(index: number): Grid;
    /**
     * Returns the subgrid.
     * @returns The subgrid.
     */
    getSubgrid(): Subgrid[];
    /**
     * Returns the specific subgrid.
     * @param index The index.
     * @returns The subgrid at index.
     */
    getSubgridAtPosition(index: number): Subgrid;
    /**
     * Returns the specific trigger.
     * @param index The index.
     * @returns The trigger at index.
     */
    getTriggerAtPosition(index: number): Trigger;
    /**
     * Returns the trigger.
     * @returns The trigger.
     */
    getTrigger(): Trigger[];
    /**
     * Returns the specific xyTrigger.
     * @param index The index.
     * @returns The xyTrigger at index.
     */
    getXYTriggerAtPosition(index: number): XYTrigger;
    /**
     * Returns all xyTrigger.
     * @returns The xyTrigger.
     */
    getXYTrigger(): XYTrigger[];
    /**
     * Returns the linegraph.
     * @returns The linegraph.
     */
    getLineGraph(): Map<string, LineGraph>;
    /**
     * Returns the specific lineGraph.
     * @param index The index.
     * @returns The linegraph at index.
     */
    getLineGraphWithName(name: string): LineGraph | undefined;
    /**
     * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
     * @returns The hasChanged attribute.
     */
    getHasChanged(): boolean;
    /**
     * Sets the hasChanged.
     * @param hasChanged The hasChanged attribute.
     */
    setHasChanged(hasChanged: boolean): void;
    /**
     * Sets the lineChanged which saved if graphs must be redrawing.
     * @param lineChanged The lineChanged attribute.
     */
    setLineChanged(lineChanged: boolean): void;
    /**
     * Sets the axisGroupForegroundColor.
     * @param axisGroupForegroundColor The axisGroupForegroundColor attribute.
     */
    setAxisGroupForegroundColor(axisGroupForegroundColor: string): void;
    /**
     * Draws the lineChart if anything is changed.
     */
    draw(layout: ScopeLayoutChart, themeResourcesCanvasColor: string | null): void;
    /**
     * Draws only all trigger (not xyTrigger).
     */
    drawTrigger(): void;
}
export declare enum LineStyle {
    Dotted = 0,
    Dashed = 1,
    Solid = 2
}
//# sourceMappingURL=ScopeChart.d.ts.map