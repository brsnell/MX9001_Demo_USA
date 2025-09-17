import { ReplacePrompt } from './ReplacePrompt.js';
import type { TcHmiScopeControl } from './TcHmiScopeControl.esm.js';
/**
 * A basic dialog.
 */
export declare class Dialog {
    /**
     * Creates a new Dialog.
     * @param element The HTML element that hosts the dialog.
     * @param control The control that has the dialog.
     */
    constructor(element: HTMLElement, control: TcHmiScopeControl);
    protected __parentControl: TcHmiScopeControl;
    protected __element: HTMLElement;
    protected __elementChunkSizeRow: HTMLTableRowElement;
    protected __noFile: HTMLSpanElement;
    protected __elementCharts: JQuery;
    protected __elementProgressbar: HTMLProgressElement;
    protected __toggleSwitch: TcHmi.Controls.Beckhoff.TcHmiToggleSwitch;
    protected __persistCheckbox: TcHmi.Controls.Beckhoff.TcHmiCheckbox;
    protected __chunksizeTextbox: TcHmi.Controls.Beckhoff.TcHmiTextbox;
    protected __file: File | null;
    protected __uploadedRecordsDatagrid: TcHmi.Controls.Beckhoff.TcHmiDatagrid;
    protected __chartsCombobox: TcHmi.Controls.Beckhoff.TcHmiCombobox<string>;
    protected __deleteSelectedButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __saveButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __fileButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __uploadButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __detachButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __eventDestroyers: TcHmi.DestroyFunction[];
    protected __isShowing: boolean;
    protected __isWaitingForServer: boolean;
    protected __confirmationPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<boolean> | null;
    protected __replacePrompt: ReplacePrompt | null;
    protected attachedGuid: string | null;
    /**
     * Shows the dialog.
     */
    show(): void;
    /**
     * Hides the dialog.
     */
    hide(): void;
    /**
     * Add Charts (from record file) to combobox.
     */
    addChartsToCombobox(chartArray: string[]): void;
    /**
     * Show chart dialog.
     */
    showChartsDialog(): void;
    /**
     * Close chart dialog.
     */
    closeChartsDialog(): void;
    /**
     * Destroys the dialog and all its TcHmi.Controls.
     */
    destroy(): void;
    /**
     * Disable all buttons in control.
     */
    disableAllButtons(): void;
    /**
     * Enable all buttons in control.
     */
    enableAllButtons(): void;
    /**
     * Clear all content tabs.
     */
    resetToDefault(): void;
    /**
     * Handles the tabChanged event of a content tab.
     */
    protected __onTabChanged(tabIndex: string): void;
    /**
     * Set guid of attached file.
     * @param tabIndex The tabIndex of content tabs
     */
    setAttachedGuid(guid: string | null): void;
    /**
     * Set srcData of records datagrid.
     * @param tabIndex The srcData
     */
    setSrcDataOfRecordsDatagrid(srcData: any[] | null): void;
    /**
     * Handles the pressed event of a button.
     */
    protected __onButtonPressed(hide: boolean, id: string | undefined): Promise<void>;
    /**
     * Handles the onDataChanged event of datagrid.
     */
    protected __onDataChanged(_event: TcHmi.EventProvider.Event, value: {
        index: number;
        property: string;
        value: any;
    }): void;
    /**
     * Handles the onToggleStateChanged event of toggleSwitch.
     */
    protected __onToggleStateChanged(): void;
    /**
     * Prompt the user to confirm if they really want to delete, then delete the given items from the server.
     */
    protected __delete(): Promise<void>;
    /**
     * Prompt the user to replace or increment the file.
     */
    replaceOrIncrementCurrentRecord(): Promise<{
        result: "replace" | "increment";
        saveResult: boolean;
    } | {
        result: "cancel";
    }>;
    /**
     * Return the isShowing value.
     * @returns The current value of isShowing.
     */
    isShowing(): boolean;
    /**
     * Return the isWaitingForServer value.
     * @returns The current value of isWaitingForServer.
     */
    getIsWaitingForServer(): boolean;
    /**
     * Set isWaitingForServer.
     * @param isWaitingForServer The new value for isWaitingForServer
     */
    setIsWaitingForServer(isWaitingForServer: boolean): void;
    /**
     * Set progressbar value.
     * @param newValue The new value for progressbar
     */
    setProgressbarValue(newValue: number): void;
    /**
     * Set progressbar max value.
     * @param maxValue The new max value for progressbar
     */
    setProgressbarMaxValue(maxValue: number): void;
    /**
     * Return the progressbar value.
     * @returns The current value of progressbar.
     */
    getProgressbarValue(): number;
}
//# sourceMappingURL=Dialog.d.ts.map