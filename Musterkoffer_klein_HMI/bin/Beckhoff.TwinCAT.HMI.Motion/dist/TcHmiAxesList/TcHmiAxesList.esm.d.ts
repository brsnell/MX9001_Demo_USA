import { Controls, type DestroyFunction, EventProvider, type IErrorDetails, LocalStorage, Server, TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Helpers, type TcHmiButton, type TcHmiDatagrid } from 'Beckhoff.TwinCAT.HMI.Controls/index.esm.js';
import { Control as TcHmiMotionControl } from '../TcHmiMotionControl/TcHmiMotionControl.esm.js';
declare class TcHmiAxesList extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template. */
    protected __elementTemplateRoot: HTMLElement;
    /** Name of the NC Ring 0 runtime on port 500 */
    protected __NC_Ring0_Port_500: string | null | undefined;
    /** Name of the NC task runtime on port 501 */
    protected __NC_Task_Port_501: string | null | undefined;
    /** Subscription id of the cyclic axis online data subscription */
    protected __axisDataSubscriptionID: number | null;
    /** Stores the information of all NC axes */
    protected __axes: AxisInfo[];
    /** Number of decimal digits used to display floating point axis values (matches TcHmiMotionControl). */
    protected __decimalDigits: number;
    /** Reference to the internally created datagrid which displays the axis data */
    protected __datagrid: TcHmiDatagrid.Control;
    /** Currently configured columns (visibility, order and per column settings), edited via the column settings popup. */
    protected __columns: Helpers.ColumnSettingsPopup.Column[];
    /** Button which opens the column settings popup. */
    protected __columnChooserButton: TcHmiButton.Control;
    /** Popup which lets the user configure the displayed columns. */
    protected __columnSettingsPopup: Helpers.ColumnSettingsPopup | null;
    /** Persists the configured columns in the browsers localStorage. */
    protected __storage: LocalStorage<{
        columns: Helpers.ColumnSettingsPopup.Column[];
    }, {
        columns: Helpers.ColumnSettingsPopup.Column[];
    }> | undefined;
    /** Jog button "--" (fast movement in negative direction). */
    protected __buttonBackwardFast: TcHmiButton.Control;
    /** Jog button "-" (slow movement in negative direction). */
    protected __buttonBackwardSlow: TcHmiButton.Control;
    /** Jog button "+" (slow movement in positive direction). */
    protected __buttonForwardSlow: TcHmiButton.Control;
    /** Jog button "++" (fast movement in positive direction). */
    protected __buttonForwardFast: TcHmiButton.Control;
    /** Reset button which acknowledges the errors of the selected axis. */
    protected __buttonReset: TcHmiButton.Control;
    /** Id of the axis selected in the datagrid, or null if no row is selected. */
    protected __selectedAxisId: number | null;
    /** Reference to the TcHmiMotionControl whose axis selection is synchronized with the list selection. */
    protected __targetMotionControl: TcHmiMotionControl | null | undefined;
    /** Manual jog velocity (fast) of the selected axis, read from the NC. */
    protected __manualVelocityFast: number;
    /** Manual jog velocity (slow) of the selected axis, read from the NC. */
    protected __manualVelocitySlow: number;
    /** Destroyer for the onStateReleased registration of the currently active jog button. */
    protected __jogReleasedDestroyer: DestroyFunction | null;
    /** Attention banner warning the user that the NC does not provide a safety solution if the HMI connection is lost. */
    protected __warningBanner: Helpers.Banner | Helpers.ApprovalBanner | null;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     * Call attribute processor functions here to initialize default values!
     */
    __previnit(): void;
    /**
     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called by tachcontrol() after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    /**
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
    /**
     * Sets the value of the member variable "MainNc".
     * @param valueNew The new value for MainNc.
     */
    setMainNc(valueNew: string | null): void;
    /**
     * Returns the current MainNc.
     */
    getMainNc(): string | null | undefined;
    /**
     * Processes the current value of attribute MainNc.
     */
    protected __processMainNc(): void;
    /**
     * Sets the value of the member variable "NcTask".
     * @param valueNew The new value for NcTask.
     */
    setNcTask(valueNew: string | null): void;
    /**
     * Returns the current NcTask.
     */
    getNcTask(): string | null | undefined;
    /**
     * Processes the current value of attribute NcTask.
     */
    protected __processNcTask(): void;
    /**
     * Sets the value of the member variable "TargetMotionControl".
     * @param valueNew The new value for TargetMotionControl.
     */
    setTargetMotionControl(valueNew: TcHmiMotionControl | null): void;
    /**
     * Returns the current TargetMotionControl.
     */
    getTargetMotionControl(): TcHmiMotionControl | null | undefined;
    /**
     * Processes the current value of attribute TargetMotionControl by performing an initial synchronization
     * of the currently selected axis to the referenced TcHmiMotionControl.
     */
    protected __processTargetMotionControl(): void;
    /**
     * Selects the currently selected axis in the referenced TcHmiMotionControl. This only happens if a target
     * control is referenced, an axis is selected, the target controls data source mode is 'NC' and the axis is
     * part of the target controls allowed axes (an empty or unset allowed axes list allows all axes).
     */
    protected __syncSelectedAxisToMotionControl(): void;
    /**
     * Handles property changes of the datagrid and updates the selected axis when the selected row changes.
     * @param _event The event object.
     * @param data The property change data containing the changed property name.
     */
    protected __onDatagridPropertyChanged(_event: EventProvider.Event, data: {
        propertyName: string;
    }): void;
    /**
     * Reads the currently selected axis from the datagrid, refreshes the cached jog velocities and updates the
     * enabled state of the control buttons.
     */
    protected __updateSelectedAxis(): void;
    /**
     * Enables the control buttons based on the enable status of the selected axis. Movement always requires the
     * controller enable; additionally the feed forward enable releases the "+"/"++" buttons and the feed backward
     * enable releases the "-"/"--" buttons. The reset button is usable whenever an axis is selected.
     */
    protected __updateControlButtonsEnabledState(): void;
    /**
     * Reads the configured manual jog velocities (fast and slow) of the given axis from the NC.
     * @param axisID The id of the axis to read the velocities for.
     */
    protected __readManualVelocities(axisID: number): void;
    /**
     * Jog handler for the "--" button (fast movement in negative direction).
     */
    protected __onJogBackwardFast(): void;
    /**
     * Jog handler for the "-" button (slow movement in negative direction).
     */
    protected __onJogBackwardSlow(): void;
    /**
     * Jog handler for the "+" button (slow movement in positive direction).
     */
    protected __onJogForwardSlow(): void;
    /**
     * Jog handler for the "++" button (fast movement in positive direction).
     */
    protected __onJogForwardFast(): void;
    /**
     * Registers a one-shot onStateReleased handler for the given jog button so the axis is stopped on release.
     * @param button The jog button that was pressed.
     */
    protected __registerJogRelease(button: TcHmiButton.Control): void;
    /**
     * Stops the jog movement when a jog button is released.
     */
    protected __onJogReleased(): void;
    /**
     * Starts a manual jog of the selected axis via a direct NC ADS command.
     * @param startmode The NC start mode (3 = positive direction, 4 = negative direction, 8192 = stop).
     * @param velocity The jog velocity.
     */
    protected __startJog(startmode: number, velocity: number): void;
    /**
     * Stops the current jog movement of the selected axis (NC start mode 8192 = stop).
     */
    protected __stopJog(): void;
    /**
     * Resets the selected axis via a direct NC ADS command.
     */
    protected __onResetPressed(): void;
    /**
     * Returns the default column configuration (visible columns in their default order).
     */
    protected __getDefaultColumns(): Helpers.ColumnSettingsPopup.Column[];
    /**
     * Builds the list of available columns for the column settings popup.
     */
    protected __getColumnSettingsDefinitions(): Helpers.ColumnSettingsPopup.ColumnDefinition[];
    /**
     * Builds the column settings popup (lazily on first use).
     */
    protected __buildColumnSettingsPopup(): void;
    /**
     * Opens the column settings popup and synchronizes it with the current column configuration.
     */
    protected __openColumnSettings(): void;
    /**
     * Checks all levels of a server response for errors and returns any error details that are found.
     * @param data The server response.
     */
    protected __checkServerErrors(data: Server.IResultObject): IErrorDetails | null;
    /**
     * Gets all NC axes with their ID's and names from the NC and stores them in '__axes'.
     */
    protected __getNcAxes(): void;
    /**
     * Reads the names of the given axis IDs from the NC and stores the axis information in '__axes'.
     * @param axisIDs The IDs of the axes to read the names for.
     */
    protected __getAxisNames(axisIDs: number[]): void;
    /**
     * Creates an axis data object with default values.
     */
    protected __createEmptyAxisData(): AxisData;
    /**
     * (Re)creates the cyclic subscription for the online data of all known NC axes.
     */
    protected __updateAxisDataSubscription(): void;
    /**
     * Callback for the cyclic axis online data subscription. Stores the received data per axis.
     * @param data The result object of the subscription.
     */
    protected __onAxisDataSubscription(data: Server.IResultObject<NcReadRequest, string>): void;
    /**
     * Defines the columns of the datagrid based on the configured columns.
     */
    protected __setupDatagridColumns(): void;
    /**
     * Builds the column definition for every available column, keyed by its id.
     */
    protected __getColumnDefinitions(): Record<ColumnId, TcHmiDatagrid.Column>;
    /**
     * Formats a 32 bit value as an unsigned hex string (e.g. '0x1A2B').
     */
    protected __toHex(value: number): string;
    /**
     * Formats an error code as a decimal value followed by its hex representation (e.g. '0 (0x0)').
     */
    protected __formatErrorCode(value: number): string;
    /**
     * Formats a floating point value with the configured number of decimal digits.
     */
    protected __formatDecimal(value: number): string;
    /**
     * Maps the current axis data to flat row objects and writes them into the datagrid.
     */
    protected __updateDatagridData(): void;
}
/** Information about a single NC axis. */
export interface AxisInfo {
    id: number;
    name: string;
    data: AxisData;
}
/** All available column ids in their default display order. */
declare const ALL_COLUMN_IDS: readonly ["name", "id", "actualPosition", "moduloActualPosition", "setpointPosition", "moduloSetpointPosition", "targetPosition", "lagDistance", "lagDistanceMin", "lagDistanceMax", "setpointVelocity", "actualVelocity", "setpointAcceleration", "actualAcceleration", "coupleState", "error", "statusDWord", "controlDWord", "controlOutput", "totalOutput", "override", "controller", "feedForward", "feedBackward"];
/** Identifier of a single selectable column. */
export type ColumnId = (typeof ALL_COLUMN_IDS)[number];
/** Cyclic online data of a single NC axis. */
export interface AxisData {
    /** Axis error code */
    error: number;
    /** Actual position */
    actualPosition: number;
    /** Modulo actual position */
    moduloActualPosition: number;
    /** Setpoint position */
    setpointPosition: number;
    /** Modulo setpoint position */
    moduloSetpointPosition: number;
    /** Target position of the current move command */
    targetPosition: number;
    /** Actual velocity */
    actualVelocity: number;
    /** Setpoint velocity */
    setpointVelocity: number;
    /** Setpoint acceleration */
    setpointAcceleration: number;
    /** Actual acceleration */
    actualAcceleration: number;
    /** Following error (lag distance) */
    lagDistance: number;
    /** Minimum lag distance (PeakHold) */
    lagDistanceMin: number;
    /** Maximum lag distance (PeakHold) */
    lagDistanceMax: number;
    /** Control output */
    controlOutput: number;
    /** Total output */
    totalOutput: number;
    /** Axis status double word (State) */
    statusDWord: number;
    /** Axis control double word (Ctrl) */
    controlDWord: number;
    /** Slave coupling state */
    coupleState: number;
    /** Override in percent */
    override: number;
    /** Controller enable status */
    controllerEnabled: boolean;
    /** Feed forward (positive direction) enable status */
    feedForwardEnabled: boolean;
    /** Feed backward (negative direction) enable status */
    feedBackwardEnabled: boolean;
}
export interface NcReadRequest {
    IndexGroup: number;
    IndexOffset: number;
    ReadLen?: number;
    Runtime: string;
}
export interface NcReadWriteRequest extends NcReadRequest {
    WriteData: string;
}
export { TcHmiAxesList as Control };
declare const _TcHmiAxesList: typeof TcHmiAxesList;
type tTcHmiAxesList = TcHmiAxesList;
type tAxisInfo = AxisInfo;
type tAxisData = AxisData;
type tColumnId = ColumnId;
declare global {
    namespace TcHmi.Controls.Beckhoff.TcHmiMotion {
        const TcHmiAxesList: typeof _TcHmiAxesList;
        type TcHmiAxesList = tTcHmiAxesList;
        namespace TcHmiAxesList {
            type AxisInfo = tAxisInfo;
            type AxisData = tAxisData;
            type ColumnId = tColumnId;
        }
    }
}
//# sourceMappingURL=TcHmiAxesList.esm.d.ts.map