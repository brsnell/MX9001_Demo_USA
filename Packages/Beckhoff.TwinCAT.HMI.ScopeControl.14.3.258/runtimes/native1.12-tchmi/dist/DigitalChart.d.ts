import { IChart } from './IChart.js';
import type { Point, ScopeLayoutDigitalChart, DigitalChart as DigitalChartType } from './Types.js';
export declare class DigitalChart extends IChart {
    /**
     * Creates a new ScopeChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Draws the lineChart if anything is changed.
     */
    draw(layout: ScopeLayoutDigitalChart, data: DigitalChartType | null): void;
}
export interface DigitColors {
    top: string;
    topLeft: string;
    topRight: string;
    middle: string;
    bottomLeft: string;
    bottomRight: string;
    bottom: string;
}
export interface DigitLayout {
    top: Point[];
    topLeft: Point[];
    topRight: Point[];
    middle: Point[];
    bottomLeft: Point[];
    bottomRight: Point[];
    bottom: Point[];
}
//# sourceMappingURL=DigitalChart.d.ts.map