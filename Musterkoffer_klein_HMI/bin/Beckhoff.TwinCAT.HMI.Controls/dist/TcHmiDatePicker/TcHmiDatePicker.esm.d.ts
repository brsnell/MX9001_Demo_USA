declare global {
    namespace Intl {
        interface Locale {
            /**
             * Browser support is sparse as of 2025-07.
             */
            firstDay?: number;
            /**
             * Browser support is sparse as of 2025-07.
             */
            minimalDays?: number;
            /**
             * Browser support is sparse as of 2025-07.
             */
            getWeekInfo?: () => {
                weekend: number[];
            };
            /**
             * Support chromiums from 2022-2025
             */
            weekInfo?: {
                weekend: number[];
            };
        }
    }
}
import { Controls, EventProvider, Locale, Localization, TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiTextblock } from '../TcHmiTextblock/TcHmiTextblock.esm.js';
declare class TcHmiDatePicker extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /** member variables */
    /** Reference to the root dom element of the current control template. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the popup container (calendar + buttons), moves between templateRoot and TopMostLayer. */
    protected __elementDPTemplate: JQuery;
    /** Reference to the calendar div. */
    protected __elementCalendarTemplate: JQuery;
    /** Reference to the button area container. */
    protected __elementButtonAreaTemplate: HTMLElement;
    /** Reference to the div element used as error display (top most layer). */
    protected __elementInvalidNotification: HTMLElement;
    /**
     * Internal reference to the attribute "data-tchmi-value" (ISO date string YYYY-MM-DD)
     */
    protected __value: string | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-min-value" (ISO date string YYYY-MM-DD)
     */
    protected __minValue: string | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-max-value" (ISO date string YYYY-MM-DD)
     */
    protected __maxValue: string | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-direct-display"
     */
    protected __directDisplay: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-ignore-invalid-values' */
    protected __ignoreInvalidValues: boolean | undefined;
    /**
     * Internal reference to the attribute "data-tchmi-show-confirmation-buttons"
     */
    protected __showConfirmationButtons: boolean | undefined;
    /**
     * ReadOnly state of the control.
     */
    protected __isReadOnly: boolean | undefined;
    /** Stores the sub-controls */
    protected __baseControls: {
        dateValueTextblock?: TcHmiTextblock;
        okButton?: TcHmiButton;
        cancelButton?: TcHmiButton;
    };
    protected __localizationReader: Locale.LocalizationReader | undefined;
    /** Internal zero date (default) */
    protected defaultDate: Localization.DateParts;
    /** Holds the data of the date of this.__value. */
    protected __internalDateObject: Localization.DateParts;
    /** Holds the volatile data of the current calendar selection. */
    protected __dateSelectionObject: Localization.DateParts;
    protected __internalMinDateObject: Localization.DateParts | null;
    protected __internalMaxDateObject: Localization.DateParts | null;
    /** Saved if the calendar is pressed */
    protected __isPressedCalendar: boolean;
    /** The interval timer for calendar interaction buttons */
    protected __intervalTimerCalendar: number;
    /** Regex to validate a YYYY-MM-DD date string (ISO 8601 date-only). */
    protected readonly __REGEX_ISO_DATE: RegExp;
    /** The interval timer for updateInvalidNotification */
    protected __updateInvalidNotificationTimer: number;
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
     * Is called if onResized event of control has raised.
     */
    protected __onResized(): void;
    /**
     * Update the invalid notification icon and adjusts OK button state.
     */
    protected __updateInvalidNotification(): void;
    /**
     * Formats DateParts as a YYYY-MM-DD string.
     */
    protected __formatDate(parts: Localization.DateParts): string;
    /**
     * Parses a YYYY-MM-DD string into DateParts. Returns null if the string is not a valid date.
     */
    protected __parseDateString(value: string): Localization.DateParts | null;
    /**
     * Compares two YYYY-MM-DD date strings lexicographically (which equals chronological order).
     * Returns -1 if a < b, 1 if a > b, 0 if equal.
     */
    __compareDates(a: string, b: string): -1 | 0 | 1;
    /**
     * Returns an event handler for the mousedown event.
     */
    protected __onMousedown(event: MouseEvent): void;
    /**
     * Returns an event handler for the mousedown event of the calendar element.
     */
    protected __onMousedownCalendar(event: MouseEvent): void;
    protected __updateHeaderDate(process?: boolean): void;
    /**
     * Is called if onMouseup event has raised.
     */
    protected __onMouseup(event: MouseEvent): void;
    /**
     * Is called if onPressed event of buttons (ok and cancel) has raised.
     */
    protected __onPressed(event: EventProvider.Event): void;
    /**
     * Is called if focusout event has raised.
     */
    protected __onFocusOut(_event: FocusEvent): void;
    /**
     * Is called if keypress event has raised.
     */
    protected __onKeyPress(event: KeyboardEvent): void;
    /**
     * Open the datePicker (in TopMostLayer).
     */
    openDatePicker(): void;
    /**
     * Close the datePicker without changes (remove from TopMostLayer).
     */
    closeDatePicker(): void;
    /**
     * Creates a calendar for a given year and month.
     */
    protected createCalendar(year: number, month: number, day: number): DocumentFragment;
    /**
     * Sets __internalValue and updates the calendar.
     */
    protected __setInternalValue(value: string | null | undefined): void;
    /**
     * Checks if dateSelection is in the value range and sets it to internalDateObject or not.
     */
    protected __checkDateSelection(update?: boolean): void;
    /**
     * Checks if a YYYY-MM-DD value is valid (within optional min/max range).
     */
    isValid(value: string): boolean;
    /**
     * Sets the value of Value.
     * @param valueNew The new value in YYYY-MM-DD format.
     */
    setValue(valueNew: string | null): void;
    protected __setValue(valueNew: string | null, process?: boolean): void;
    /**
     * Gets the current date value as a YYYY-MM-DD string.
     */
    getValue(): string | undefined;
    /**
     * Processes value.
     */
    protected __processValue(): void;
    /**
     * Sets the value of MinValue.
     * @param valueNew The new minimum date value in YYYY-MM-DD format.
     */
    setMinValue(valueNew: string | null): void;
    /**
     * Gets the value of MinValue.
     */
    getMinValue(): string | undefined;
    /**
     * Processes the value of MinValue.
     */
    protected __processMinValue(): void;
    /**
     * Sets the value of MaxValue.
     * @param valueNew The new maximum date value in YYYY-MM-DD format.
     */
    setMaxValue(valueNew: string | null): void;
    /**
     * Gets the value of MaxValue.
     */
    getMaxValue(): string | undefined;
    /**
     * Processes the value of MaxValue.
     */
    protected __processMaxValue(): void;
    /**
     * Sets the ignoreInvalidValues attribute.
     */
    setIgnoreInvalidValues(valueNew: boolean | null): void;
    /**
     * Returns the current value of ignoreInvalidValues.
     */
    getIgnoreInvalidValues(): boolean | undefined;
    /**
     * Processes the current value of attribute ignoreInvalidValues.
     */
    protected __processIgnoreInvalidValues(): void;
    /**
     * Sets the value of DirectDisplay.
     */
    setDirectDisplay(valueNew: boolean | null): void;
    /**
     * Gets the value of DirectDisplay.
     */
    getDirectDisplay(): boolean | undefined;
    /**
     * Process the value of DirectDisplay.
     */
    protected __processDirectDisplay(): void;
    /**
     * Sets the value of ShowConfirmationButtons.
     */
    setShowConfirmationButtons(valueNew: boolean | null): void;
    /**
     * Gets the value of ShowConfirmationButtons.
     */
    getShowConfirmationButtons(): boolean | undefined;
    /**
     * Process the value of ShowConfirmationButtons.
     */
    protected __processShowConfirmationButtons(): void;
    /**
     * Processes the current enabled state.
     */
    __processIsEnabled(): void;
    /**
     * Sets the isReadOnly attribute.
     * @preserve (Part of the public API)
     */
    setIsReadOnly(valueNew: boolean | null): void;
    /**
     * Returns the current value of isReadOnly.
     */
    getIsReadOnly(): boolean | undefined;
    /**
     * Process IsReadOnly.
     */
    protected __processIsReadOnly(): void;
}
export { TcHmiDatePicker as Control };
declare const _TcHmiDatePicker: typeof TcHmiDatePicker;
type tTcHmiDatePicker = TcHmiDatePicker;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiDatePicker: typeof _TcHmiDatePicker;
        type TcHmiDatePicker = tTcHmiDatePicker;
    }
}
//# sourceMappingURL=TcHmiDatePicker.esm.d.ts.map