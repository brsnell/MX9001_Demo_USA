import { type DestroyFunction, type Dictionary, type FourSidedCss, type Localizable, type TopMostLayer, type Trigger, UiProvider, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import * as Helpers from '../../Helpers/index.esm.js';
export declare class TcHmiPopups extends UiProvider.PopupProvider {
    static readonly providerName = "Beckhoff.TcHmiPopups";
    /**
     * Create a new Popup provider.
     * @param providerName Allows inheriting classes to set their own provider name.
     */
    constructor(providerName?: string);
    /**
     * Creates an instance of the PopupProvider.MessageBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The localization for the content text.
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createMessageBox<T>(header: Localizable, content: Localizable, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: TcHmiControl.Control | null): UiProvider.PopupProvider.MessageBox<T>;
    /**
     * Creates an instance of the PopupProvider.HtmlElementBox class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param content The html content
     * @param buttons The buttons to show.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     * @template T A popup prompt() will result with this value type
     */
    createHtmlElementBox<T>(header: Localizable, content: HTMLElement, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: TcHmiControl.Control | null): UiProvider.PopupProvider.HtmlElementBox<T>;
    /**
     * Creates an instance of the PopupProvider.InputPrompt class which allows interaction with the underlying popup implementation.
     * @param header The localization for the header text.
     * @param label The localization for the label text.
     * @param validation Optional list of regex patterns that the input must or must not match.
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInputPrompt(header: Localizable, label: Localizable, validation?: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[] | null, parentControl?: TcHmiControl.Control | null): UiProvider.PopupProvider.InputPrompt;
    /**
     * Creates an instance of the PopupProvider.InteractiveWritePrompt class which allows interaction with the underlying popup implementation.
     * @param symbols A list of symbol data which is shown in the popup.
     * @param options Options
     * @param parentControl Optional reference to a control which is the 'owner' of the underlying popup instnace and which lifecycle will be bound to the lifecycle of the popup.
     */
    createInteractiveWritePrompt(symbol: UiProvider.PopupProvider.InteractiveWritePrompt.Symbol, options?: UiProvider.PopupProvider.InteractiveWritePrompt.Options, parentControl?: TcHmiControl.Control | null): UiProvider.PopupProvider.InteractiveWritePrompt;
}
export declare class MessageBox<T> extends UiProvider.PopupProvider.MessageBox<T> {
    onShow: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onHide: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onBoundsChange: {
        add: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => DestroyFunction;
        remove: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => void;
    };
    constructor(header: Localizable, content: Localizable, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: TcHmiControl.Control | null);
    protected __popup: Helpers.TextAndButtonsPrompt<T>;
    protected __closeButtonAction: UiProvider.PopupProvider.MessageBox.PromptAction<T> | null;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<T>;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: UiProvider.PopupProvider.MessageBox.PromptAction<T>): void;
    /**
     * Gets the root element of the popup.
     */
    getElement(): HTMLDivElement;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<Helpers.TextAndButtonsPrompt.LocalizableTexts>): void;
    /**
     * Sets the background action.
     * @param action
     */
    setBackgroundAction(action: Helpers.ButtonsPrompt.BackgroundAction<T>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    setBackgroundMode(mode: Helpers.Popup.BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    setPositioningMode(mode: Helpers.Popup.PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    setBounds(bounds: Helpers.Popup.Bounds | null): void;
    /**
     * Sets the movable option.
     */
    setMovable(movable: boolean): void;
    /**
     * Returns if the popup is currently showing or not.
     */
    isShowing(): boolean;
    /**
     * Sets the local storage settings.
     */
    setStorageSettings(settings: UiProvider.PopupProvider.StorageSettings): void;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    resetBounds(): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Whether to show the close button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction(action: UiProvider.PopupProvider.MessageBox.PromptAction<T> | null): void;
    /**
     * Display the popup just above the given reference element.
     * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
     * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
     * specify in which direction conflicts should be resolved. Defaults to Up.
     */
    setJustAbove(reference: Element, conflictResolution?: TopMostLayer.ConflictResolution): void;
    /**
     * Reset the justAbove handling.
     * @param reference Pass null to reset the justAbove handling.
     */
    setJustAbove(reference: null): void;
    /**
     * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
     */
    hasActiveUserInteraction(): boolean;
}
export declare class HtmlElementBox<T> extends UiProvider.PopupProvider.HtmlElementBox<T> {
    onShow: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onHide: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onBoundsChange: {
        add: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => DestroyFunction;
        remove: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => void;
    };
    constructor(header: Localizable, element: HTMLElement, buttons: Dictionary<{
        value: T;
        width: number;
        height: number;
        widthMode?: 'Value' | 'Content';
        heightMode?: 'Value' | 'Content';
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        textPadding?: FourSidedCss;
        text: Localizable;
        tooltip?: Localizable;
        keepPopupOpen?: boolean;
        actions?: Trigger.Action[];
    }>, parentControl?: TcHmiControl.Control | null);
    protected __popup: Helpers.HtmlAndButtonsPrompt<T>;
    protected __closeButtonAction: UiProvider.PopupProvider.HtmlElementBox.PromptAction<T> | null;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<T>;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: UiProvider.PopupProvider.HtmlElementBox.PromptAction<T>): void;
    /**
     * Gets the root element of the popup.
     */
    getElement(): HTMLDivElement;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<Helpers.ButtonsPrompt.LocalizableTexts>): void;
    /**
     * Sets the background action.
     * @param action
     */
    setBackgroundAction(action: Helpers.ButtonsPrompt.BackgroundAction<T>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    setBackgroundMode(mode: Helpers.Popup.BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    setPositioningMode(mode: Helpers.Popup.PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    setBounds(bounds: Helpers.Popup.Bounds | null): void;
    /**
     * Sets the movable option.
     */
    setMovable(movable: boolean): void;
    /**
     * Returns if the popup is currently showing or not.
     */
    isShowing(): boolean;
    /**
     * Sets the local storage settings.
     */
    setStorageSettings(settings: UiProvider.PopupProvider.StorageSettings): void;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    resetBounds(): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Whether to show the close button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction(action: UiProvider.PopupProvider.HtmlElementBox.PromptAction<T> | null): void;
    /**
     * Display the popup just above the given reference element.
     * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
     * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
     * specify in which direction conflicts should be resolved. Defaults to Up.
     */
    setJustAbove(reference: Element, conflictResolution?: TopMostLayer.ConflictResolution): void;
    /**
     * Reset the justAbove handling.
     * @param reference Pass null to reset the justAbove handling.
     */
    setJustAbove(reference: null): void;
    /**
     * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
     */
    hasActiveUserInteraction(): boolean;
    /**
     * Sets the content element.
     * @param element
     */
    setContentElement(element: HTMLElement): void;
}
export declare class InputPrompt extends UiProvider.PopupProvider.InputPrompt {
    onShow: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onHide: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onBoundsChange: {
        add: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => DestroyFunction;
        remove: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => void;
    };
    constructor(header: Localizable, label: Localizable, validation?: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[] | null, parentControl?: TcHmiControl.Control | null);
    protected __popup: Helpers.InputPrompt;
    protected __validation: {
        pattern: RegExp;
        expectedTestResult: boolean;
    }[] | null | undefined;
    protected __closeButtonAction: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'> | null;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(forbiddenValues?: Iterable<string> | null, defaultValue?: string): Promise<{
        isOk: true;
        value: string;
    } | {
        isOk: false;
    }>;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'>): void;
    /**
     * Gets the root element of the popup.
     */
    getElement(): HTMLDivElement;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<Helpers.InputPrompt.LocalizableTexts>): void;
    /**
     * Sets what happens when the user clicks the background while the popup is showing. Default is { close: true }.
     * Note: It is currently not possible to change the close on background-click behavior when the popup is currently showing.
     * @param action The action to perform when the user clicks the background. If the popup should be closed, further action can be specified.
     */
    setBackgroundAction(action: Helpers.Popup.BackgroundAction<'cancel' | 'ok'>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    setBackgroundMode(mode: Helpers.Popup.BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    setPositioningMode(mode: Helpers.Popup.PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    setBounds(bounds: Helpers.Popup.Bounds | null): void;
    /**
     * Sets the movable option.
     */
    setMovable(movable: boolean): void;
    /**
     * Returns if the popup is currently showing or not.
     */
    isShowing(): boolean;
    /**
     * Sets the local storage settings.
     */
    setStorageSettings(settings: UiProvider.PopupProvider.StorageSettings): void;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    resetBounds(): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Whether to show the close button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction(action: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'> | null): void;
    /**
     * Display the popup just above the given reference element.
     * @param reference The popup will be as close as possible in the TopMostLayer stack to this element.
     * @param conflictResolution If there are multiple elements that want to be just above the reference, you can
     * specify in which direction conflicts should be resolved. Defaults to Up.
     */
    setJustAbove(reference: Element, conflictResolution?: TopMostLayer.ConflictResolution): void;
    /**
     * Reset the justAbove handling.
     * @param reference Pass null to reset the justAbove handling.
     */
    setJustAbove(reference: null): void;
    /**
     * Returns whether the popup is currently being interacted with by mouse, touch or keyboard.
     */
    hasActiveUserInteraction(): boolean;
}
export declare class InteractiveWritePrompt extends UiProvider.PopupProvider.InteractiveWritePrompt {
    onShow: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onHide: {
        add: (callback: () => void) => DestroyFunction;
        remove: (callback: () => void) => void;
    };
    onBoundsChange: {
        add: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => DestroyFunction;
        remove: (callback: (data: {
            bounds: UiProvider.PopupProvider.Bounds | null;
        }) => void) => void;
    };
    constructor(symbol: UiProvider.PopupProvider.InteractiveWritePrompt.Symbol, options?: UiProvider.PopupProvider.InteractiveWritePrompt.Options | null, parentControl?: TcHmiControl.Control | null);
    protected __popup: Helpers.InteractiveWritePrompt;
    protected __closeButtonAction: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'> | null;
    /**
     * Destroys the popup and all its controls.
     */
    destroy(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<{
        isOk: true;
        value: any;
    } | {
        isOk: false;
    }>;
    /**
     * Shows the popup.
     */
    show(): void;
    /**
     * Hides the popup.
     */
    hide(): void;
    /**
     * Aborts a prompted popup and rejects the promise.
     * @param action The action to perform to answer the prompt.
     */
    abort(action?: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'>): void;
    /**
     * Gets the root element of the popup.
     */
    getElement(): HTMLDivElement;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<Helpers.InputPrompt.LocalizableTexts>): void;
    /**
     * Sets what happens when the user clicks the background while the popup is showing. Default is { close: true }.
     * Note: It is currently not possible to change the close on background-click behavior when the popup is currently showing.
     * @param action The action to perform when the user clicks the background. If the popup should be closed, further action can be specified.
     */
    setBackgroundAction(action: Helpers.Popup.BackgroundAction<'cancel' | 'ok'>): void;
    /**
     * Sets the background mode of the TopMostLayer used for displaying the popup.
     * @param mode
     */
    setBackgroundMode(mode: Helpers.Popup.BackgroundMode): void;
    /**
     * Sets the positioning mode of the popup in the TopMostLayer.
     * @param mode
     */
    setPositioningMode(mode: Helpers.Popup.PositioningMode): void;
    /**
     * Sets the bounds of the popup. Does only have any effect if PositioningMode.Floating is used.
     * @param bounds
     */
    setBounds(bounds: Helpers.Popup.Bounds | null): void;
    /**
     * Sets the movable option.
     */
    setMovable(movable: boolean): void;
    /**
     * Returns if the popup is currently showing or not.
     */
    isShowing(): boolean;
    /**
     * Sets the local storage settings.
     */
    setStorageSettings(settings: UiProvider.PopupProvider.StorageSettings): void;
    /**
     * Resets the size and position of the Popup and clears that data from localStorage.
     */
    resetBounds(): void;
    /**
     * Sets if the close button should be used or not.
     * @param show Whether to show the close button.
     */
    setCloseButton(show: boolean): void;
    /**
     * Sets what action to take to answer the prompt when the close button is clicked.
     * @param action The action to take to answer the prompt, or null if the prompt should not be answered
     * in that case.
     */
    setCloseButtonAction(action: UiProvider.PopupProvider.PromptAction<'ok' | 'cancel'> | null): void;
}
declare const _TcHmiPopups: typeof TcHmiPopups;
type tTcHmiPopups = TcHmiPopups;
declare const _MessageBox: typeof MessageBox;
type tMessageBox<T> = MessageBox<T>;
declare const _HtmlElementBox: typeof HtmlElementBox;
type tHtmlElementBox<T> = HtmlElementBox<T>;
declare const _InputPrompt: typeof InputPrompt;
type tInputPrompt = InputPrompt;
declare const _InteractiveWritePrompt: typeof InteractiveWritePrompt;
type tInteractiveWritePrompt = InteractiveWritePrompt;
declare global {
    namespace TcHmi.Controls.UiProvider.Popup {
        let TcHmiPopups: typeof _TcHmiPopups;
        type TcHmiPopups = tTcHmiPopups;
        let MessageBox: typeof _MessageBox;
        type MessageBox<T> = tMessageBox<T>;
        let HtmlElementBox: typeof _HtmlElementBox;
        type HtmlElementBox<T> = tHtmlElementBox<T>;
        let InputPrompt: typeof _InputPrompt;
        type InputPrompt = tInputPrompt;
        let InteractiveWritePrompt: typeof _InteractiveWritePrompt;
        type InteractiveWritePrompt = tInteractiveWritePrompt;
    }
}
export {};
//# sourceMappingURL=TcHmiPopups.d.ts.map