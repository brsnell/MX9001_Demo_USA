import { TcHmiControl, Controls, type Locale, EventProvider, type ObjectResolver, type HorizontalAlignment, type FourSidedCss, type FontSizeUnit, type FontFamily, type FontStyle, type FontWeight, type SolidColor } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiDatePicker } from '../TcHmiDatePicker/TcHmiDatePicker.esm.js';
import { ValueBuffer, InputProcessingPoint } from '../Helpers/TcHmiValueBuffer/ValueBuffer.js';
declare class TcHmiDateInput extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template as html element. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the underlying html input element. */
    protected __elementInput: HTMLInputElement;
    /** Reference to the underlying button element. */
    protected __elementButton: HTMLElement;
    /** Reference to the DatePicker child control. */
    protected __datePicker: TcHmiDatePicker;
    /** Reference to the invalid notification label element. */
    protected __elementInvalidNotificationLabel: HTMLLabelElement;
    /**
     * Is set to true if the control is locked and to false if the control is unlocked.
     * When the control is locked, calls to setValue are ignored.
     */
    protected __locked: boolean;
    /** Internal reference to the attribute "data-tchmi-value" (ISO 8601 date string YYYY-MM-DD) */
    protected __value: string | null | undefined;
    /** Internal reference to the attribute "data-tchmi-min-value" (ISO date string YYYY-MM-DD) */
    protected __minValue: string | undefined;
    /** Internal reference to the attribute "data-tchmi-max-value" (ISO date string YYYY-MM-DD) */
    protected __maxValue: string | undefined;
    /** Internal reference to the attribute 'data-tchmi-ignore-invalid-values' */
    protected __ignoreInvalidValues: boolean | undefined;
    protected __valueBuffer: ValueBuffer<string | null> | undefined;
    /** Value at focusin time */
    protected __oldValue: string | null | undefined;
    /** Last input string that corresponds to a valid date */
    protected __lastValidValue: string | undefined;
    /** Last input string */
    protected __lastInput: string | undefined;
    /** Internal reference to the attribute "data-tchmi-value-horizontal-alignment" */
    protected __valueHorizontalAlignment: HorizontalAlignment | null | undefined;
    /** Internal reference to the attribute "data-tchmi-content-padding" */
    protected __contentPadding: FourSidedCss | null | undefined;
    /** Internal reference to the attribute "data-tchmi-value-font-size" */
    protected __valueFontSize: number | undefined;
    /** Internal reference to the attribute "data-tchmi-value-font-size-unit" */
    protected __valueFontSizeUnit: FontSizeUnit | undefined;
    /** Internal reference to the attribute "data-tchmi-value-font-family" */
    protected __valueFontFamily: FontFamily | null | undefined;
    /** Internal reference to the attribute "data-tchmi-value-font-style" */
    protected __valueFontStyle: FontStyle | undefined;
    /** Internal reference to the attribute "data-tchmi-value-font-weight" */
    protected __valueFontWeight: FontWeight | undefined;
    /** Internal reference to the attribute "data-tchmi-placeholder" */
    protected __placeholder: string | null | undefined;
    /** Internal reference to the attribute "data-tchmi-value-color" */
    protected __valueColor: SolidColor | null | undefined;
    /** Internal reference to the attribute "data-tchmi-auto-focus-out" */
    protected __autoFocusOut: boolean | undefined;
    /** Internal reference to the attribute "data-tchmi-auto-select-text" */
    protected __autoSelectText: boolean | undefined;
    /** Internal reference to the attribute "data-tchmi-reset-to-last-valid-value" */
    protected __resetToLastValidValue: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-button-position' */
    protected __buttonPosition: 'Left' | 'Right' | undefined;
    /** ReadOnly state of the control. */
    protected __isReadOnly: boolean | undefined;
    /** Interaction has started so we should raise event after it. */
    protected __triggerUIFinishedOnBlur: boolean;
    /** Localization */
    protected __localizedInput: {
        key: string;
        parameters: any[];
    };
    protected __localizationReader: Locale.LocalizationReader | undefined;
    /** Regex to validate a YYYY-MM-DD date string (ISO 8601 date-only). */
    private __REGEX_ISO_DATE;
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
     * Validates the current text in the input element.
     * Highlights the control if the value is invalid.
     */
    protected __validateInput(): void;
    /**
     * Handle submit on keydown.
     */
    protected __onKeydown(event: KeyboardEvent): void;
    /**
     * Handle value change on "input" to support virtual keyboards on mobile devices.
     */
    protected __onInput(_event: Event): void;
    /**
     * Is raised if text is pasted into the underlying input element.
     */
    protected __onPaste(_event: Event): void;
    /**
     * Is raised if text is cut from the underlying input element.
     */
    protected __onCut(_event: Event): void;
    /**
     * Is raised if the underlying input element gets the focus.
     */
    protected __onFocusIn(event: FocusEvent): void;
    /**
     * Is raised if the underlying input element has lost its focus.
     */
    protected __onFocusOut(event: FocusEvent): void;
    /**
     * Performs the steps after a focusout event was received.
     */
    protected __performFocusOut(event: Event): void;
    /**
     * Is raised after successful interaction with a TcHmiKeyboard control with indirect input.
     */
    protected __onIndirectInputFinished(_event: Event): void;
    /**
     * Is raised after canceled interaction with a TcHmiKeyboard control with indirect input.
     */
    protected __onIndirectInputCanceled(event: Event): void;
    /**
     * Is called when the button is clicked — opens the DatePicker.
     */
    protected __onClick(_event: MouseEvent): void;
    /**
     * Is called if the date picker was canceled.
     */
    protected __onCancel(_event: EventProvider.Event): void;
    /**
     * Is called if the date picker selection was confirmed.
     */
    protected __onConfirmed(_event: EventProvider.Event): void;
    /**
     * Change the localization of the input element's validity.
     */
    __setLocalizedInputValidity(key: string, ...parameters: any[]): void;
    /**
     * Sets the value.
     */
    setValue(valueNew: string | null): void;
    /**
     * Sets the value regardless of lock.
     */
    protected __setValue(valueNew: string | null | undefined, writeToInput?: boolean): void;
    /**
     * Returns the current value.
     */
    getValue(): string | null | undefined;
    /**
     * Processes the current value.
     */
    protected __processValue(writeToInput?: boolean): void;
    /**
     * Sets the value of MinValue.
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
     * Sets the inputProcessingPoint attribute.
     */
    setInputProcessingPoint(valueNew: InputProcessingPoint | keyof typeof InputProcessingPoint | null): void;
    /**
     * Returns the current value of inputProcessingPoint.
     */
    getInputProcessingPoint(): InputProcessingPoint | undefined;
    /**
     * Processes the current InputProcessingPoint attribute value.
     */
    __processInputProcessingPoint(): void;
    /**
     * Sets the text horizontal alignment.
     */
    setValueHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
    /**
     * Returns the current value of valueHorizontalAlignment.
     */
    getValueHorizontalAlignment(): HorizontalAlignment | null | undefined;
    /**
     * Processes the current valueHorizontalAlignment attribute value.
     */
    protected __processValueHorizontalAlignment(): void;
    /**
     * Sets the contentPadding value.
     */
    setContentPadding(valueNew: FourSidedCss | null): void;
    protected __onResolverForContentPaddingWatchCallback(data: ObjectResolver.IWatchResultObject<FourSidedCss>): void;
    /**
     * Returns the current contentPadding value.
     */
    getContentPadding(): FourSidedCss | null | undefined;
    /**
     * Processes the current contentPadding attribute.
     */
    protected __processContentPadding(): void;
    /**
     * Sets the font size.
     */
    setValueFontSize(valueNew: number | null): void;
    getValueFontSize(): number | undefined;
    protected __processValueFontSize(): void;
    /**
     * Sets the font size unit.
     */
    setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
    getValueFontSizeUnit(): FontSizeUnit | undefined;
    protected __processValueFontSizeUnit(): void;
    /**
     * Sets the font family.
     */
    setValueFontFamily(valueNew: FontFamily | null): void;
    getValueFontFamily(): string | null | undefined;
    protected __processValueFontFamily(): void;
    /**
     * Sets the font style.
     */
    setValueFontStyle(valueNew: FontStyle | null): void;
    getValueFontStyle(): FontStyle | undefined;
    protected __processValueFontStyle(): void;
    /**
     * Sets the font weight.
     */
    setValueFontWeight(valueNew: FontWeight | null): void;
    getValueFontWeight(): FontWeight | undefined;
    protected __processValueFontWeight(): void;
    /**
     * Sets the placeholder value.
     */
    setPlaceholder(valueNew: string | null): void;
    getPlaceholder(): string | null | undefined;
    protected __processPlaceholder(): void;
    /**
     * Sets the text color.
     */
    setValueColor(valueNew: SolidColor | null): void;
    protected __onResolverForValueColorWatchCallback(data: ObjectResolver.IWatchResultObject<SolidColor>): void;
    getValueColor(): SolidColor | null | undefined;
    protected __processValueColor(): void;
    /**
     * Sets the auto focus out attribute.
     */
    setAutoFocusOut(valueNew: boolean | null): void;
    getAutoFocusOut(): boolean | undefined;
    protected __processAutoFocusOut(): void;
    /** Lock the control. Calls to setValue will be ignored until unlocked. */
    __lock(): void;
    /** Unlocks the control. */
    __unlock(): void;
    /**
     * Checks if the control is deactivated and adjusts the visualization.
     */
    protected __processControlActivation(): void;
    /**
     * Processes the current isEnabled attribute value.
     */
    __processIsEnabled(): void;
    /**
     * Processes the current AccessConfig attribute value.
     */
    __processAccessConfig(): void;
    /**
     * Sets the isReadOnly attribute.
     * @preserve (Part of the public API)
     */
    setIsReadOnly(valueNew: boolean | null): void;
    getIsReadOnly(): boolean | undefined;
    protected __processIsReadOnly(): void;
    /**
     * Sets the auto select text attribute.
     */
    setAutoSelectText(valueNew: boolean | null): void;
    getAutoSelectText(): boolean | undefined;
    /**
     * Sets the resetToLastValidValue attribute.
     */
    setResetToLastValidValue(valueNew: boolean | null): void;
    getResetToLastValidValue(): boolean | undefined;
    __processResetToLastValidValue(): void;
    /**
     * Sets the buttonPosition attribute.
     */
    setButtonPosition(valueNew: 'Left' | 'Right' | null): void;
    getButtonPosition(): "Left" | "Right" | undefined;
    protected __processButtonPosition(): void;
}
export { TcHmiDateInput as Control };
declare const _TcHmiDateInput: typeof TcHmiDateInput;
type tTcHmiDateInput = TcHmiDateInput;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiDateInput: typeof _TcHmiDateInput;
        type TcHmiDateInput = tTcHmiDateInput;
    }
}
//# sourceMappingURL=TcHmiDateInput.esm.d.ts.map