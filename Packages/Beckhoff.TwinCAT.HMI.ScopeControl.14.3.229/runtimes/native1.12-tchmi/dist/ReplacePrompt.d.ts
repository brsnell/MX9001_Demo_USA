export declare class ReplacePrompt extends TcHmi.Controls.Helpers.Popup<{
    result: 'replace' | 'increment';
    saveResult: boolean;
} | {
    result: 'cancel';
}> {
    protected __parentControl: TcHmi.Controls.System.TcHmiControl;
    protected __cancelButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __replaceButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __incrementButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __saveToggleSwitch: TcHmi.Controls.Beckhoff.TcHmiToggleSwitch;
    protected __backgroundAction: TcHmi.Controls.Helpers.Popup.BackgroundAction<AvailableActions>;
    protected __closeButton: TcHmi.Controls.Helpers.Popup.CloseButton<AvailableActions>;
    /**
     * Creates a new ReplacePrompt instance.
     * @param localizations A collection of localization symbol expressions to localize texts in the control.
     * @param parentControl The control which owns the popup.
     */
    constructor(parentControl: TcHmi.Controls.System.TcHmiControl);
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Aborts a prompted popup and performs the given action to answer the prompt. If no action is specified, the promise is rejected.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: TcHmi.Controls.Helpers.Popup.PromptAction<AvailableActions>): void;
    /**
     * Handler for the onPressed event of the Cancel button.
     */
    protected __onCancelPressed(): void;
    /**
     * Handler for the onPressed event of the Replace button.
     */
    protected __onReplacePressed(): void;
    /**
     * Handler for the onPressed event of the increment button.
     */
    protected __onIncrementPressed(): void;
    /**
     * Performs the action for the cancel button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     */
    protected __cancel(): void;
    /**
     * Performs the action for the Replace button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     */
    protected __replace(): void;
    /**
     * Performs the action for the increment button.
     */
    protected __increment(): void;
    /**
     * Sets what happens when the user clicks the background while the popup is showing.
     * @param action The action to perform when the user clicks the background. If the popup should be closed,
     * you can specify replace or increment to perform the associated action.
     */
    setBackgroundAction(action: TcHmi.Controls.Helpers.Popup.BackgroundAction<AvailableActions>): void;
    /**
     * Sets if the close button should be used or not.
     * @param button Defines whether to show the button and if yes, what action should be taken to answer the prompt.
     */
    setCloseButton(button: TcHmi.Controls.Helpers.Popup.CloseButton<AvailableActions>): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Defines whether to show the button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Performs the background action.
     */
    protected __performPromptAction(toPerform: TcHmi.Controls.Helpers.Popup.PromptAction<AvailableActions>): void;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setLocalizations(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts {
    headerText: TcHmi.Localizable;
    contentText: TcHmi.Localizable;
    buttonTextCancel: TcHmi.Localizable;
    buttonTextReplace: TcHmi.Localizable;
    buttonTextIncrement: TcHmi.Localizable;
    toggleSwitchTextSave: TcHmi.Localizable;
}
export type AvailableActions = 'replace' | 'increment' | 'cancel';
//# sourceMappingURL=ReplacePrompt.d.ts.map