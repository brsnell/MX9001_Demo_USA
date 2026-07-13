import type { DimensionUnit } from '../../../API/_Types.js';
import * as Controls from '../../../API/Controls.js';
import type { baseTcHmiControl } from '../baseTcHmiControl.js';
import { Control as TcHmiContainerControl } from '../TcHmiContainerControl/TcHmiContainerControl.esm.js';
import { ObjectResolver } from '../../../API/ObjectResolver.js';
declare class TcHmiGridContainer extends TcHmiContainerControl {
    #private;
    /** Constructor */
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Internal reference to the attribute 'data-tchmi-grid-layout'
     */
    protected __gridLayout: GridLayout | undefined | null;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * Adds a child to this control and handles the hierarchical management layer.
     * This will also add child's DOM element to the container DOM.
     * @param control Class instance of the child.
     * @param pos Optional index of the position for the new child.
     */
    addChild(control: baseTcHmiControl | undefined | null, pos?: number | null): void;
    /**
     * Adds a child to this control and handles the hierarchical management layer.
     * This will also add child's DOM element to the container DOM.
     * @param control Class instance of the child.
     * @param pos Optional index of the position for the new child.
     */
    __addChild(control: baseTcHmiControl, pos?: number | null): void;
    /**
     * Removes a child from this control and handles the hierarchical management layer.
     * This will also remove child's DOM element from the container DOM.
     * @param control Class instance of the child.
     */
    removeChild(control: baseTcHmiControl | undefined | null): void;
    __removeChild(control: baseTcHmiControl): void;
    /**
     * Returns the current grid layout value.
     * @returns The current grid layout value.
     */
    getGridLayout(): GridLayout | null | undefined;
    /**
     * Sets new grid layout
     * @param valueNew
     */
    setGridLayout(valueNew: GridLayout | null): void;
    /**
     * The watch callback for the gridLayout object resolver.
     */
    protected __onResolverForGridLayoutWatchCallback(data: ObjectResolver.IWatchResultObject<GridLayout | null>): void;
    /**
     * Processes grid layout
     */
    protected __processGridLayout(): void;
}
/**
 * Interface for the grid layout
 */
export interface GridLayout {
    /** column layout as string (e.g. "120px max-content 1fr") */
    gridTemplateColumns?: string | null;
    /** row layout as string (e.g. "120px max-content 1fr") */
    gridTemplateRows?: string | null;
    /** grid auto flow (e.g. "Row" or "Column") */
    gridAutoFlow?: 'Row' | 'Column' | null;
    /** gap between columns */
    columnGap?: number | null;
    /** unit for column gap (e.g. "px" or "%") */
    columnGapUnit?: DimensionUnit | null;
    /** gap between rows */
    rowGap?: number | null;
    /** unit for row gap (e.g. "px" or "%") */
    rowGapUnit?: DimensionUnit | null;
    /** items horizontal alignment in the grid (e.g. "left", "center", "right") */
    justifyItems?: 'Left' | 'Center' | 'Right' | null;
    /** items vertical alignment in the grid (e.g. "start", "center", "end") */
    alignItems?: 'Start' | 'Center' | 'End' | null;
    /** overflow behavior for horizontal direction */
    overflowX?: 'Visible' | 'Hidden' | 'Scroll' | 'Auto' | null;
    /** overflow behavior for vertical direction */
    overflowY?: 'Visible' | 'Hidden' | 'Scroll' | 'Auto' | null;
}
export { TcHmiGridContainer as Control };
//# sourceMappingURL=TcHmiGridContainer.esm.d.ts.map