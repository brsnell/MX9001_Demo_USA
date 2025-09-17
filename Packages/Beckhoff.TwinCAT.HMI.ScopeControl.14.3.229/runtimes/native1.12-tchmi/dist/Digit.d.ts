import type { Digit as DigitType } from './Types.js';
export declare class Digit {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new LineGraph.
     * @param canvas The optional canvas element to drawing.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the lineGraph to the canvas.
     */
    draw(digit: DigitType): void;
}
//# sourceMappingURL=Digit.d.ts.map