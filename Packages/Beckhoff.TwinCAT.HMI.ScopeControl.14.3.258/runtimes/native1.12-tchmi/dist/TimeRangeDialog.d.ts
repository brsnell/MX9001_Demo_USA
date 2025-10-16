import type { Control as TcHmiScopeControl } from './TcHmiScopeControl.esm.js';
import type { AnalyticsData } from './Types.js';
/**
 * A basic dialog.
 */
export declare class TimeRangeDialog {
    /**
     * Creates a new Dialog.
     * @param element The HTML element that hosts the dialog.
     * @param control The control that has the dialog.
     */
    constructor(element: HTMLElement, control: TcHmiScopeControl);
    protected __parentControl: TcHmiScopeControl;
    protected __element: HTMLElement;
    protected __elementLoading: HTMLDivElement;
    protected __elementList: HTMLUListElement;
    protected __elementRecordTimespanControl: HTMLDivElement;
    protected __elementSliderTemplate: HTMLDivElement;
    protected __elementSliderValue: HTMLDivElement;
    protected __elementSliderValueText: HTMLDivElement;
    protected __elementSliderMin: HTMLDivElement;
    protected __elementSliderMax: HTMLDivElement;
    protected __elementNoDataText: HTMLDivElement;
    protected __elementLoadingOverlay: HTMLDivElement;
    protected __data: AnalyticsData[];
    protected __activeData: SelectedAnalyticsData | null;
    protected __isShowing: boolean;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __listElements: AnalyticsData[];
    protected __datetimeStart: TcHmi.Controls.Beckhoff.TcHmiDateTimeInput;
    protected __datetimeEnd: TcHmi.Controls.Beckhoff.TcHmiDateTimeInput;
    protected __intervalTime: TcHmi.Controls.Beckhoff.TcHmiTextblock;
    protected __applyButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __refreshButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __cancelButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __ignoreDateTimeInputEvents: boolean;
    protected __draggingInfo: {
        isDragging: boolean;
        draggingElem: HTMLDivElement | null;
        offsetLeft: number;
        startPositionX: number;
    };
    protected __textFontStyle: string;
    /** LoadingSpinner */
    protected __loadingSpinner: Element | null;
    /**
     * Shows the dialog.
     */
    show(): void;
    /**
     * Hides the dialog.
     */
    hide(): void;
    /**
     * Destroys the dialog and all its controls.
     */
    destroy(): void;
    /**
     * Return the isShowing value.
     * @returns The current value of isShowing.
     */
    isShowing(): boolean;
    /**
     * Add data to the dialog.
     */
    addData(data: AnalyticsData[]): void;
    /**
     * Function to calculate the slider and timespan from start value and end value.
     */
    private __calcValuesFromSlider;
    /**
     * Function to calculate the start value, end value and timespan when the user interacts with the slider.
     */
    private __calcSliderFromValues;
    private __getTextWidth;
    private __setRoundedValueText;
    private __calcRoundedValue;
    /**
     * Is called if onPressed event from cancel button has raised.
     */
    protected __onCancelPressed(_event: TcHmi.EventProvider.Event): void;
    /**
     * Is called if onPressed event from refresh button has raised.
     */
    protected __onRefreshPressed(_event: TcHmi.EventProvider.Event): void;
    /**
     * Is called if onPressed event from apply button has raised.
     */
    protected __onApplyPressed(_event: TcHmi.EventProvider.Event): void;
    /**
     * Is called if onValueChanged event from dateTimePickerStart has raised.
     */
    protected __onValueChangedStart(_event: TcHmi.EventProvider.Event): void;
    /**
     * Is called if onValueChanged event from dateTimePickerEnd has raised.
     */
    protected __onValueChangedEnd(_event: TcHmi.EventProvider.Event): void;
    /**
     * Is raised if mouseDown on slider.
     * @param e The event of mouseDown.
     */
    protected __onMouseDownList(event: MouseEvent): void;
    /**
     * Is raised if mouseDown on slider.
     * @param event The event of mouseDown.
     */
    protected __onMouseDown(event: MouseEvent): void;
    /**
     * Is raised if touchStart on slider.
     * @param event The event of touchStart.
     */
    protected __onTouchStart(event: TouchEvent): void;
    /**
     * Is raised if mouseMove on slider.
     * @param event The event of mouseDown.
     */
    protected __onMouseMove(event: MouseEvent): void;
    /**
     * Is raised if touchMove on slider.
     * @param event The event of touchMove.
     */
    protected __onTouchMove(event: TouchEvent): void;
    /**
     * Is raised if mouseUp on slider.
     * @param _event The event of mouseDown.
     */
    protected __onMouseUp(_event: MouseEvent): void;
    /**
     * Is raised if touchEnd on slider.
     * @param _event The event of touchEnd.
     */
    protected __onTouchEnd(_event: TouchEvent): void;
}
export interface SelectedAnalyticsData {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
    startTimeNow: string;
    endTimeNow: string;
}
//# sourceMappingURL=TimeRangeDialog.d.ts.map