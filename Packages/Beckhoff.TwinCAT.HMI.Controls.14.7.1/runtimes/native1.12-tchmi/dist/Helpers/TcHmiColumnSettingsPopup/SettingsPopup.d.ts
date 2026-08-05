import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import { Popup } from '../TcHmiPopups/Popup.js';
import { type Localizable, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * A basic settings popup. This popup contains a Reset, an OK and a Cancel button.
 *
 * It builds on the shared {@link Popup} helper base (Beckhoff.TwinCAT.HMI.Controls/Helpers/TcHmiPopups) so it
 * reuses its DOM scaffold, localization helpers and display handling. On top of that it adds the settings lifecycle
 * (reset/ok/cancel buttons, `update`/`getSettings`/`requiresUpdate`) of the original EventGrid settings popup.
 */
export declare abstract class SettingsPopup<S> extends Popup<void> {
    /**
     * Creates a new SettingsPopup.
     * @param control The control owning the popup.
     * @param cssPrefix The css class prefix used for the generated content elements.
     * @param texts The localizable texts to use for the footer buttons.
     */
    constructor(control: TcHmiControl.Control, cssPrefix: string, texts: SettingsPopup.ButtonTexts);
    /** The css class prefix used for the generated content elements. */
    protected __cssPrefix: string;
    protected __resetButton: TcHmiButton;
    protected __okButton: TcHmiButton;
    protected __cancelButton: TcHmiButton;
    protected __resetHandlers: (() => void)[];
    protected __okHandlers: (() => void | boolean)[];
    protected __cancelHandlers: (() => void | boolean)[];
    protected abstract __settings: S;
    protected __updateRequired: boolean;
    /**
     * Performs the prompt action of the shared popup base. A click on the dimmed background behaves like pressing
     * the Cancel button, so the registered cancel handlers are run.
     */
    protected __performPromptAction(): void;
    /**
     * Handles the pressed event of a button.
     */
    protected __onButtonPressed(handlers: (() => void | boolean)[], hide: boolean): void;
    /**
     * Registers a handler function for presses of the Reset button. Returns a function to unregister the handler.
     * @param handler The handler to register.
     */
    registerResetButtonHandler(handler: () => void): () => void;
    /**
     * Registers a handler function for presses of the OK button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerOkButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Registers a handler function for presses of the Cancel button. Returns a function to unregister the handler.
     * @param handler The handler to register. If one or more of the registered handlers returns false, the popup will not be hidden.
     */
    registerCancelButtonHandler(handler: () => void | boolean): () => void;
    /**
     * Updates the settings this popup should modify.
     * @param settings The new settings.
     * @param resetable Whether the reset button should be enabled or disabled.
     */
    update(settings: S, resetable?: boolean): void;
    /**
     * Gets the current settings.
     */
    getSettings(): S;
    /**
     * Checks if an update of the settings is required.
     */
    requiresUpdate(): boolean;
}
export declare namespace SettingsPopup {
    interface ButtonTexts {
        resetText: Localizable;
        resetTooltip: Localizable;
        okText: Localizable;
        okTooltip: Localizable;
        cancelText: Localizable;
        cancelTooltip: Localizable;
    }
}
//# sourceMappingURL=SettingsPopup.d.ts.map