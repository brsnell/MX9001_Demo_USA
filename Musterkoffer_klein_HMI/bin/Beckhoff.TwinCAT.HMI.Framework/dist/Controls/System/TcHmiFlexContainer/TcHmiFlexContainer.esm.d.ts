import * as Controls from '../../../API/Controls.js';
import type { baseTcHmiControl } from '../baseTcHmiControl.js';
import { Control as TcHmiContainerControl } from '../TcHmiContainerControl/TcHmiContainerControl.esm.js';
import { ObjectResolver } from '../../../API/ObjectResolver.js';
import type { DimensionUnit } from '../../../API/_Types.js';
declare class TcHmiFlexContainer extends TcHmiContainerControl {
    #private;
    /** Constructor */
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /**
     * Internal reference to the attribute 'data-tchmi-flex-layout'
     */
    protected __flexLayout: FlexLayout | undefined | null;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by the system after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by the system after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
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
     * Returns the current flex layout value.
     * @returns The current flex layout value.
     */
    getFlexLayout(): FlexLayout | null | undefined;
    /**
     * Sets new flex layout
     * @param valueNew
     */
    setFlexLayout(valueNew: FlexLayout | null): void;
    /**
     * The watch callback for the flexLayout object resolver.
     */
    protected __onResolverForFlexLayoutWatchCallback(data: ObjectResolver.IWatchResultObject<FlexLayout | null>): void;
    /**
     * Processes flex layout
     */
    protected __processFlexLayout(): void;
}
/**
 * Interface for the flex layout
 */
export interface FlexLayout {
    /** flex direction (e.g. "Row" or "Column") */
    flexDirection?: 'Row' | 'Column' | 'Row-Reverse' | 'Column-Reverse' | null;
    /** flex wrap (e.g. "NoWrap", "Wrap") */
    flexWrap?: 'NoWrap' | 'Wrap' | 'Wrap-Reverse' | null;
    /** justify content (e.g. "Flex-Start", "Flex-End", "Center", "Space-Between", "Space-Around", "Space-Evenly") */
    justifyContent?: 'Flex-Start' | 'Flex-End' | 'Center' | 'Space-Between' | 'Space-Around' | 'Space-Evenly' | null;
    /** align items (e.g. "Flex-Start", "Flex-End", "Center", "Baseline") */
    alignItems?: 'Flex-Start' | 'Flex-End' | 'Center' | 'Baseline' | 'Stretch' | null;
    /** align content (e.g. "Flex-Start", "Flex-End", "Center", "Space-Between", "Space-Around") */
    alignContent?: 'Flex-Start' | 'Flex-End' | 'Center' | 'Space-Between' | 'Space-Around' | 'Stretch' | null;
    /** gap between columns */
    columnGap?: number | null;
    /** unit for column gap (e.g. "px" or "%") */
    columnGapUnit?: DimensionUnit | null;
    /** gap between rows */
    rowGap?: number | null;
    /** unit for row gap (e.g. "px" or "%") */
    rowGapUnit?: DimensionUnit | null;
    /** overflow behavior along the horizontal axis */
    overflowX?: 'Visible' | 'Hidden' | 'Scroll' | 'Auto' | null;
    /** overflow behavior along the vertical axis */
    overflowY?: 'Visible' | 'Hidden' | 'Scroll' | 'Auto' | null;
}
export { TcHmiFlexContainer as Control };
//# sourceMappingURL=TcHmiFlexContainer.esm.d.ts.map