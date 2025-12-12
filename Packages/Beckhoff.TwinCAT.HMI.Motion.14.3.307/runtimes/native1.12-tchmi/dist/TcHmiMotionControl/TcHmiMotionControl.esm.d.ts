import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { TcHmiButton, TcHmiTextblock, TcHmiCombobox, TcHmiCheckbox, TcHmiNumericInput, TcHmiDatagrid } from 'Beckhoff.TwinCAT.HMI.Controls/index.esm.js';
declare class TcHmiMotionControl extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template as  jquery object. */
    protected __elementTemplateRoot: HTMLElement;
    /** Reference to the axis information element */
    protected __elementAnimationBackwards: HTMLCollectionOf<HTMLElement>;
    protected __elementAnimationForwards: HTMLCollectionOf<HTMLElement>;
    protected __elementContentTabs: TcHmi.Controls.Helpers.ContentTabs;
    protected __ButtonPlusPlus: TcHmiButton.Control;
    protected __ButtonPlus: TcHmiButton.Control;
    protected __ButtonMinus: TcHmiButton.Control;
    protected __ButtonMinusMinus: TcHmiButton.Control;
    protected __ButtonStart: TcHmiButton.Control;
    protected __ButtonStop: TcHmiButton.Control;
    protected __ButtonReset: TcHmiButton.Control;
    protected __ButtonHoming: TcHmiButton.Control;
    protected __ButtonSetEnabling: TcHmiButton.Control;
    protected __ButtonSetEnablingAll: TcHmiButton.Control;
    protected __ComboboxAxis: TcHmiCombobox.Control<number | 'None' | null>;
    protected __TextblockAxisName: TcHmiTextblock.Control;
    protected __TextblockCurrPos: TcHmiTextblock.Control;
    protected __TextblockCurrVel: TcHmiTextblock.Control;
    protected __TextblockSetpointPos: TcHmiTextblock.Control;
    protected __TextblockSetpointVel: TcHmiTextblock.Control;
    protected __TextblockLagDis: TcHmiTextblock.Control;
    protected __TextblockError: TcHmiTextblock.Control;
    protected __TextblockError2: TcHmiTextblock.Control;
    protected __TextblockOutput: TcHmiTextblock.Control;
    protected __LabelCurrentPosUnit: HTMLElement;
    protected __LabelCurrentVelUnit: HTMLElement;
    protected __CheckboxReady: TcHmiCheckbox.Control;
    protected __CheckboxNotMoving: TcHmiCheckbox.Control;
    protected __CheckboxCalibrated: TcHmiCheckbox.Control;
    protected __CheckboxMoveFw: TcHmiCheckbox.Control;
    protected __CheckboxHasJob: TcHmiCheckbox.Control;
    protected __CheckboxMoveBw: TcHmiCheckbox.Control;
    protected __CheckboxCoupled: TcHmiCheckbox.Control;
    protected __CheckboxTargetPos: TcHmiCheckbox.Control;
    protected __CheckboxPosRange: TcHmiCheckbox.Control;
    protected __CheckboxFeedFw: TcHmiCheckbox.Control;
    protected __CheckboxFeedBw: TcHmiCheckbox.Control;
    protected __CheckboxController: TcHmiCheckbox.Control;
    protected __NumericInputOverride: TcHmiNumericInput.Control;
    protected __NumericInputTargetPos: TcHmiNumericInput.Control;
    protected __NumericInputTargetVel: TcHmiNumericInput.Control;
    protected __TextblockCurrPosFunctions: TcHmiTextblock.Control;
    protected __TextblockCurrVelFunctions: TcHmiTextblock.Control;
    protected __LabelCurrentPosUnitFunctions: HTMLElement;
    protected __LabelCurrentVelUnitFunctions: HTMLElement;
    protected __ComboboxStartMode: TcHmiCombobox.Control<string>;
    protected __ComboboxStartModePLCSelection: boolean | null;
    protected __ExtendedStartModeInput1: TcHmiNumericInput.Control;
    protected __ExtendedStartModeInput2: TcHmiNumericInput.Control;
    protected __ExtendedStartModeInput3: TcHmiNumericInput.Control;
    protected __ExtendedStartModeInput4: TcHmiNumericInput.Control;
    protected __ExtendedStartModeInput5: TcHmiNumericInput.Control;
    protected __ExtendedStartModeLabel1: HTMLElement;
    protected __ExtendedStartModeLabel2: HTMLElement;
    protected __ExtendedStartModeLabel3: HTMLElement;
    protected __ExtendedStartModeLabel4: HTMLElement;
    protected __ExtendedStartModeLabel5: HTMLElement;
    protected __ExtendedStartModeCheckbox2: TcHmiCheckbox.Control;
    protected __ExtendedStartModeCheckbox3: TcHmiCheckbox.Control;
    protected __ExtendedStartModeCheckbox4: TcHmiCheckbox.Control;
    protected __ExtendedStartModeCheckbox5: TcHmiCheckbox.Control;
    protected __ExtendedStartModeOptional2: HTMLElement;
    protected __ExtendedStartModeOptional3: HTMLElement;
    protected __ExtendedStartModeOptional4: HTMLElement;
    protected __ExtendedStartModeOptional5: HTMLElement;
    protected __ButtonStartFunctions: TcHmiButton.Control;
    protected __ButtonStopFunctions: TcHmiButton.Control;
    protected __DatagridErrorLog: TcHmiDatagrid.Control;
    protected __ButtonClearLog: TcHmiButton.Control;
    protected __elementErrorIndicator: HTMLElement;
    /** Name of the NC Ring 0 runtime on port 500 */
    protected __NC_Ring0_Port_500: string | null | undefined;
    /** Name of the NC task runtime on port 501 */
    protected __NC_Task_Port_501: string | null | undefined;
    protected __decimalDigits: number;
    protected __baseUnit: string;
    /** Stores the data of the currently selected axis */
    protected __axisData: AxisData;
    /** Stores the input data of the user */
    protected __axisUserInput: AxisUserInput;
    protected __currentAxis: number | null | undefined;
    protected __ncAxesIDs: number[];
    protected __subscriptionID: number | null;
    protected __runtimeStateSubscriptionID: number | null;
    protected __axisRefStructure: AxisRef | undefined | null;
    protected __mcPower: McPower | undefined | null;
    protected __mcMoveAbsolute: McMoveAbsolute | undefined | null;
    protected __McMoveVelocity: McMoveVelocity | undefined | null;
    protected __mcReset: McReset | undefined | null;
    protected __mcHalt: McHalt | undefined | null;
    protected __mcHome: McHome | undefined | null;
    protected __mcPowerSymbol: TcHmi.Symbol<McPower | undefined | null> | undefined | null;
    protected __mcMoveAbsoluteSymbol: TcHmi.Symbol<McMoveAbsolute | undefined | null> | undefined | null;
    protected __McMoveVelocitySymbol: TcHmi.Symbol<McMoveVelocity | undefined | null> | undefined | null;
    protected __mcResetSymbol: TcHmi.Symbol<McReset | undefined | null> | undefined | null;
    protected __mcHaltSymbol: TcHmi.Symbol<McHalt | undefined | null> | undefined | null;
    protected __mcHomeSymbol: TcHmi.Symbol<McHome | undefined | null> | undefined | null;
    protected __mcPowerSymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __mcMoveAbsoluteSymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __mcMoveVelocitySymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __mcResetSymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __mcHaltSymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __mcHomeSymbolWatchDestroyer: TcHmi.DestroyFunction | null;
    protected __warningBanner: TcHmi.Controls.Helpers.Banner | TcHmi.Controls.Helpers.ApprovalBanner | null;
    /** Localization */
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    protected __lastError: TcHmi.IErrorDetails | null;
    protected __disabled: boolean | null;
    /** Feedback Popup */
    protected __feedbackBanner: TcHmi.Controls.Helpers.Banner | null;
    protected __errorList: MotionError[];
    protected __newErrors: number;
    protected __stateReleasedDestroyer: TcHmi.DestroyFunction | null;
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
     * Update the visualization of the control
     */
    protected __updateConfig(): void;
    /**
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
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
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    private __addLocalizedElement;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    private __removeLocalizedElement;
    /**
     * A function to change the layout and resize the control when the size changes
     * */
    protected __onResized(): void;
    /**
     * A function to update the UI by the axisData.
     */
    protected __updateGUI(): void;
    /**
     * Reset the data of the displayed axis.
     */
    protected __resetAxisData(): void;
    /**
     * Add an error to the log
     */
    protected __addErrorToLogFromDetails(error: TcHmi.IErrorDetails): void;
    /**
     * Add an error to the log
     */
    protected __addErrorToLog(error: MotionError): void;
    /**
     * Callback for the tab change
     */
    protected __tabChangeCallback(name: string): void;
    /**
     * a function that saves the data after the exchange across the funktion block AxisRef
     * */
    protected __getPLCData(): void;
    /**
     * A function write the mcPower values to the PLC
     */
    protected __writeMcPower(mcPower: McPower): void;
    /**
     * A function write the mcMoveAbsolute values to the PLC
     */
    protected __writeMcMoveAbsolute(mcMoveAbsolute: McMoveAbsolute): void;
    /**
     * A function write the McMoveVelocity values to the PLC
     */
    protected __writeMcMoveVelocity(McMoveVelocity: McMoveVelocity): void;
    /**
     * A function write the mcReset values to the PLC
     */
    protected __writeMcReset(mcReset: McReset): void;
    /**
     * A function write the mcHalt values to the PLC
     */
    protected __writeMcHalt(mcHalt: McHalt): void;
    /**
     * A function write the mcHome values to the PLC
     */
    protected __writeMcHome(mcHome: McHome): void;
    /**
     * Callback function to handle write errors.
     */
    protected __handleWriteResponse(data: TcHmi.Server.IResultObject): void;
    protected __updateSubscription(): void;
    /**
     * Callback function for Nc data subscription.
     * @param data The result object of the subscription.
     */
    protected __onNcDataSubscription(data: TcHmi.Server.IResultObject<NcReadRequest, string>): void;
    protected __updatedRuntimeStateSubscription(): void;
    protected __onRuntimeStateSubscription(data: TcHmi.Server.IResultObject<any, {
        adsState: string;
    }>): void;
    /**
     * Checks all levels of a server response for errors and returns any error details that are found.
     * @param data The server resonse.
     */
    protected __checkServerErrors(data: TcHmi.Server.IResultObject): TcHmi.IErrorDetails | null;
    /**
     * Write the target position an velocity directly to the NC
     * @param targetPos target position to be moved to
     * @param targetVel target velocity to be drived to
     */
    protected __writeTargetValuesToNC(targetPos: number, targetVel: number): void;
    /**
     * Get all NC-Axis with their ID's and build the axis selection combobox
     */
    protected __getNcAxes(): void;
    /**
     * A function to get the selected axis number/ID
     */
    protected __getAxisID(): number;
    /**
     *  function to build Combobox SrcData, the target velocity array data, the target position array data, the is Bussy array data
     */
    protected __buildComboboxData(): void;
    /**
     * A function to write a value to the Nc by a specific indexGroup, indexOffset and datatype.
     */
    protected __writeToNc(indexGroup: number, indexOffset: number, runtime: string, setValue: any, datatype: 'UInt16' | 'UInt32' | 'Double'): void;
    /**
     * A function to be called when the button set is pressed
     */
    protected __onMouseDownSet(): void;
    /**
     * A function to be called when all enabling values are to be set in the NC
     */
    protected __enableSet(): void;
    /**
     * A function to be called when the button all is pressed
     */
    protected __onMouseDownAll(): void;
    /**
     * Set all enabling values to the max and update their controls in the GUI.
     */
    protected __enableAll(): void;
    /**
     * a function to be called when the value of the selectet combobox changed
     */
    protected __onComboboxChanged(): void;
    /**
     * a function to be called when the button target is pressed*/
    protected __onMouseDownStart(): void;
    /**
     * a function to be called when the button stop is pressed*/
    protected __onMouseDownStop(): void;
    /**
     * a function to be called when the button reset is pressed
     */
    protected __onMouseDownReset(): void;
    /**
     * a function to be called when the button home is pressed
     */
    protected __onMouseDownHome(): void;
    /**
     * a function to be called when the button ++ is pressed
     */
    protected __onStatePressedPlusPlus(event: TcHmi.EventProvider.Event): void;
    /**
     * a function to be called when the button + is pressed
     */
    protected __onStatePressedPlus(event: TcHmi.EventProvider.Event): void;
    /**
     * a function to be called when the button -- is pressed
     */
    protected __onStatePressedMinusMinus(event: TcHmi.EventProvider.Event): void;
    /**
     * a function to be called when the button - is pressed
     */
    protected __onStatePressedMinus(event: TcHmi.EventProvider.Event): void;
    /**
     * Callback function for the onStateReleased event.
     */
    protected __onManualMoveStateReleased(): void;
    /**
     * A function to stop all Axis movement from the PLC.
     */
    protected __stopMovement(): void;
    /**
     * A function to be called when the toggle state from the checkbox FeedBw changed
     */
    protected __onChangeFeedBw(): void;
    /**
     * A function to be called when the toggle state from the checkbox FeedFw changed
     */
    protected __onChangeFeedFw(): void;
    /**
     * A function to be called when the toggle state from the checkbox Controller changed*/
    protected __onChangeController(): void;
    /**
     * A function to be called when the value from the input override changed
     */
    protected __onChangeOverride(): void;
    /**
     * A function to be called when the value from the input targetPos changed
     */
    protected __onChangeTargetPos(): void;
    /**
     * A function to be called when the value from the input targetVel changed
     */
    protected __onChangeTargetVel(): void;
    protected __onUserDataChanged(): void;
    protected __checkAccess(): void;
    /**
     * A function to update the animation of the axis movement.
     */
    protected __updateAnimation(): void;
    /**
     * A function to start the axis movement
     * @param startmode
     * @param targetPosition
     * @param velocity
     * @param acceleration
     * @param decelleration
     * @param jerk
     */
    protected __axisStart(startmode: number, targetPosition: number, targetVelocity: number, acceleration: number, decelleration: number, jerk: number): void;
    /**
     * Starts the Reversing sequence of an axis.
     * @param targetPosition1
     * @param targetVelocity
     * @param targetPosition2
     * @param idleTime
     */
    protected __axisStartReversingSequence(targetPosition1: number, targetVelocity: number, targetPosition2: number, idleTime: number): void;
    /**
     * Starts the velo step sequence of an axis
     * @param targetVelocity1
     * @param targetVelocity2
     * @param drivingTime
     * @param idleTime
     * @param noOfCycles
     */
    protected __axisStartVeloStepSequence(targetVelocity1: number, targetVelocity2: number, drivingTime: number, idleTime: number, noOfCycles: number): void;
    /**
     * Starts a sinus oscillation.
     * @param frequency
     * @param sinusVelocityAmplitude
     * @param drivingTime
     */
    protected __axisStartSinusOscillation(baseAmplitude: number, baseFrequency: number, StartAmplitude: number, feedConstantMoter: number, startFrequency: number, stopFrequency: number, drivingTime: number, noOfCycles: number): void;
    protected __onStartModeChanged(): void;
    /**
     * Set the units of the extended start mode inputs.
     */
    protected __setExtendedStartModeUnits(): void;
    protected __onMouseDownStartExtendedMode(): void;
    /**
     * Callback for a checkbox state Change
     */
    protected __onChangeExtendedStartModeCheckbox2(): void;
    /**
     * Callback for a checkbox state Change
     */
    protected __onChangeExtendedStartModeCheckbox3(): void;
    /**
     * Callback for a checkbox state Change
     */
    protected __onChangeExtendedStartModeCheckbox4(): void;
    /**
     * Callback for a checkbox state Change
     */
    protected __onChangeExtendedStartModeCheckbox5(): void;
    protected __onClearLog(): void;
    /**
     *  Setter function for 'data-tchmi-current-axis' attribute.
     */
    setCurrentAxis(CurrentAxisNew: number | null): void;
    /**
     * Getter function for 'data-tchmi-current-axis' attribute.
     */
    getCurrentAxis(): number | null | undefined;
    protected __processCurrentAxis(): void;
    /**
     * Sets the value of the member variable "NcTask".
     * @param valueNew The new value for NcTask.
     */
    setNcTask(valueNew: string | null): void;
    /**
     * Returns the current NcTask.
     */
    getNcTask(): string | null | undefined;
    protected __processNcTask(): void;
    /**
     * Sets the value of the member variable "MainNc".
     * @param valueNew The new value for MainNc.
     */
    setMainNc(valueNew: string | null): void;
    /**
     * Returns the current MainNc.
     */
    getMainNc(): string | null | undefined;
    protected __processMainNc(): void;
    /**
     * Sets the AxisRef value and calls the associated process function.
     * @param valueNew The new value for the AxisRef attribute.
     */
    setAxisRef(valueNew: AxisRef | null): void;
    /**
     * The watch callback for the AxisRef object resolver.
     */
    protected __onResolverForAxisRefWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<AxisRef>): void;
    /**
     * Returns the current AxisRef.
     */
    getAxisRef(): AxisRef | null | undefined;
    protected __processAxisRef(): void;
    /**
     * Update the src data of the StartMode combobox depending on the linkend PLC function blocks.
     */
    protected __updateStartModeCombobox(): void;
    /**
     * Sets the McPower value and calls the associated process function.
     * @param valueNew The new value for the McPower attribute as string.
     */
    setMcPower(valueNew: TcHmi.Symbol<McPower | null>): void;
    /**
     * Returns the current value of McPower.
     * @returns The current value of McPower.
     */
    getMcPower(): TcHmi.Symbol<McPower | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McPower.
     */
    protected __processMcPower(): void;
    /**
     * Sets the McMoveAbsolute value and calls the associated process function.
     * @param valueNew The new value for the McMoveAbsolute.
     */
    setMcMoveAbsolute(valueNew: TcHmi.Symbol<McMoveAbsolute | null>): void;
    /**
     * Returns the current value of McMoveAbsolute.
     * @returns The current value of McMoveAbsolute.
     */
    getMcMoveAbsolute(): TcHmi.Symbol<McMoveAbsolute | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McMoveAbsolute.
     */
    protected __processMoveAbsolute(): void;
    /**
     * Sets the McMoveVelocity value and calls the associated process function.
     * @param valueNew The new value for the McMoveVelocity attribute as string.
     */
    setMcMoveVelocity(valueNew: TcHmi.Symbol<McMoveVelocity | null>): void;
    /**
     * Returns the current value of McMoveVelocity.
     * @returns The current value of McMoveVelocity.
     */
    getMcMoveVelocity(): TcHmi.Symbol<McMoveVelocity | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McMoveVelocity.
     */
    protected __processMoveVelocity(): void;
    /**
     * Sets the McReset value and calls the associated process function.
     * @param valueNew The new value for the McReset attribute.
     */
    setMcReset(valueNew: TcHmi.Symbol<McReset | null>): void;
    /**
     * Returns the current value of McReset.
     * @returns The current value of McReset.
     */
    getMcReset(): TcHmi.Symbol<McReset | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McReset.
     */
    protected __processReset(): void;
    /**
     * Sets the McHalt value and calls the associated process function.
     * @param valueNew The new value for the McHalt attribute.
     */
    setMcHalt(valueNew: TcHmi.Symbol<McHalt | null>): void;
    /**
     * Returns the current value of McHalt.
     * @returns The current value of McHalt.
     */
    getMcHalt(): TcHmi.Symbol<McHalt | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McHalt.
     */
    protected __processHalt(): void;
    /**
     * Sets the content value and calls the associated process function.
     * @param valueNew The new value for the McHome attribute.
     */
    setMcHome(valueNew: TcHmi.Symbol<McHome | null>): void;
    /**
     * Returns the current value of McHome.
     * @returns The current value of McHome.
     */
    getMcHome(): TcHmi.Symbol<McHome | null | undefined> | null | undefined;
    /**
     * Processes the current value of attribute McHome.
     */
    protected __processHome(): void;
}
export interface MotionError {
    code: string;
    domain?: string;
    reason?: string;
}
export interface AxisData {
    axisName: string;
    isBusy: boolean;
    stop: boolean;
    actualPosition: number;
    actualVelocity: number;
    moduloActualPosition: number;
    setpointPosition: number;
    moduloSetpointPosition: number;
    setpointVelocity: number;
    lagDistance: number;
    lagDistanceMin: number;
    lagDistanceMax: number;
    totalOutput: number;
    controlOutput: number;
    error: number;
    statusLog: {
        ready: boolean;
        calibrated: boolean;
        hasJob: boolean;
        notMoving: boolean;
        movingFw: boolean;
        movingBw: boolean;
    };
    statusPhys: {
        coupledMode: boolean;
        inTargetPosition: boolean;
        inPosRange: boolean;
    };
    enabling: {
        controller: boolean;
        feedFw: boolean;
        feedBw: boolean;
        override: number;
    };
    manualVelocityFast: number;
    manualVelocitySlow: number;
    referenceVeloctiy: number;
    maxVelocity: number;
    maxAcceleration: number;
    maxDeceleration: number;
}
export interface AxisUserInput {
    targetPosition: number;
    targetVelocity: number;
    enabling: {
        controller: boolean | null;
        feedFw: boolean | null;
        feedBw: boolean | null;
        override: number | null;
    };
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
export interface AxisRef {
    PlcToNc: PlcToNcAxisRef;
    NcToPlc: NcToPlcAxisRef;
    ADS: IAdsAddress;
    Status: AxisStatus;
    DriveAddress: DriveAddress;
}
export interface PlcToNcAxisRef {
    ControlDWord: any;
    Override: number;
    AxisModeRequest: number;
    AxisModeDWord: number;
    AxisModeLReal: number;
    PositionCorrection: number;
    ExtSetPos: number;
    ExtSetVelo: number;
    ExtSetAcc: number;
    ExtSetDirection: number;
    _reserved1: number;
    ExtControllerOutput: number;
    GearRatio1: number;
    GearRatio2: number;
    GearRatio3: number;
    GearRatio4: number;
    MapState: boolean;
    PlcCycleControl: any;
    PlcCycleCount: any;
    _reserved2: any;
    ExtTorque: number;
    _reserved3: any;
}
export interface NcToPlcAxisRef {
    StateDWord: any;
    ErrorCode: number;
    AxisState: number;
    AxisModeConfirmation: number;
    HomingState: number;
    CoupleState: number;
    SvbEntries: number;
    SafEntries: number;
    AxisId: number;
    OpModeDWord: any;
    ActPos: number;
    ModuloActPos: number;
    ActiveControlLoopIndex: number;
    ControlLoopIndex: number;
    ModuloActTurns: number;
    ActVelo: number;
    PosDiff: number;
    SetPos: number;
    SetVelo: number;
    SetAcc: number;
    TargetPos: number;
    ModuloSetPos: number;
    ModuloSetTurns: number;
    CmdNo: number;
    CmdState: number;
    SetJerk: number;
    SetTorque: number;
    ActTorque: number;
    StateDWord2: any;
    StateDWord3: any;
    TouchProbeState: number;
    TouchProbeCounter: number;
    CamCouplingState: any;
    CamCouplingTableID: number[];
    ActTorqueDerivative: number;
    SetTorqueDerivative: number;
    AbsPhasingPos: number;
    TorqueOffset: number;
    ActPosWithoutPosCorrection: number;
    ActAcc: number;
    DcTimeStamp: number;
    _reserved2: number[];
    UserData: number;
}
export interface AxisStatus {
    UpdateTaskIndex: any;
    UpdateCycleTime: number;
    CycleCounter: number;
    NcCycleCounter: number;
    MotionState: any;
    Error: boolean;
    ErrorID: number;
    ErrorStop: boolean;
    Disabled: boolean;
    Stopping: boolean;
    StandStill: boolean;
    DiscreteMotion: boolean;
    ContinuousMotion: boolean;
    SynchronizedMotion: boolean;
    Homing: boolean;
    ConstantVelocity: boolean;
    Accelerating: boolean;
    Decelerating: boolean;
    Operational: boolean;
    ControlLoopClosed: boolean;
    HasJob: boolean;
    HasBeenStopped: boolean;
    NewTargetPosition: boolean;
    InPositionArea: boolean;
    InTargetPosition: boolean;
    ProtectedMode: boolean;
    Homed: boolean;
    HomingBusy: boolean;
    MotionCommandsLocked: boolean;
    SoftLimitMinExceeded: boolean;
    SoftLimitMaxExceeded: boolean;
    Moving: boolean;
    PositiveDirection: boolean;
    NegativeDirection: boolean;
    NotMoving: boolean;
    Compensating: boolean;
    ExtSetPointGenEnabled: boolean;
    PhasingActive: boolean;
    ExternalLatchValid: boolean;
    CamDataQueued: boolean;
    CamTableQueued: boolean;
    CamScalingPending: boolean;
    CmdBuffered: boolean;
    PTPmode: boolean;
    DriveDeviceError: boolean;
    IoDataInvalid: boolean;
    ErrorPropagationDelayed: boolean;
    DriveLimitActive: boolean;
    Coupled: boolean;
    OpMode: any;
    NcApplicationRequest: boolean;
}
export interface DriveAddress {
    NetID: string;
    NetIdBytes: any;
    SlaveAddress: any;
    Channel: any;
    NcDriveId: string;
    NcDriveIndex: string;
    NcDriveType: any;
    NcEncoderId: string;
    NcEncoderIndex: string;
    NcEncoderType: any;
    NcAxisId: any;
    NcAxisType: any;
    TcDriveObjectId: string;
    TcEncoderObjectId: string;
    TcAxisObjectId: string;
}
export interface IAdsAddress {
    NetId: string;
    Port: number;
    Channel: number;
}
export interface McMoveAbsolute {
    Execute: boolean;
    Position: number;
    Velocity: number;
    Acceleration: number;
    Deceleration: number;
    Jerk: number;
    BufferMode: any;
    Options: any;
    Axis: AxisRef;
    Done: boolean;
    Busy: boolean;
    Active: boolean;
    CommandAborted: boolean;
    Error: boolean;
    ErrorID: number;
}
export interface McPower {
    Enable: boolean;
    Enable_Positive: boolean;
    Enable_Negative: boolean;
    Override: number;
    BufferMode: any;
    Options: any;
    Axis: AxisRef;
    Status: boolean;
    Busy: boolean;
    Active: boolean;
    Error: boolean;
    ErrorID: number;
}
export interface McReset {
    Execute: boolean;
    Done: boolean;
    Busy: boolean;
    Error: number;
    ErrorID: number;
    Axis: AxisRef;
}
export interface McHalt {
    Execute: boolean;
    Deceleration: number;
    Jerk: number;
    BufferMode: any;
    Options: any;
    Done: boolean;
    Busy: boolean;
    Active: boolean;
    CommandAborted: boolean;
    Error: boolean;
    ErrorID: number;
}
export interface McHome {
    Execute: boolean;
    Position: number;
    HomingMode: boolean;
    BufferMode: any;
    Options: any;
    bCalibrationCam: boolean;
    Done: boolean;
    Busy: boolean;
    Active: boolean;
    CommandAborted: boolean;
    Error: boolean;
    ErrorID: number;
}
export interface McMoveVelocity {
    Execute: boolean;
    Velocity: number;
    Acceleration: number;
    Deceleration: number;
    Jerk: number;
    Direction: number;
    BufferMode: any;
    Options: any;
    Axis: AxisRef;
    InVelocity: boolean;
    Done: boolean;
    Busy: boolean;
    Active: boolean;
    CommandAborted: boolean;
    Error: boolean;
    ErrorID: number;
}
export { TcHmiMotionControl as Control };
declare const _TcHmiMotionControl: typeof TcHmiMotionControl;
type tTcHmiMotionControl = TcHmiMotionControl;
type tMotionError = MotionError;
type tAxisData = AxisData;
type tAxisUserInput = AxisUserInput;
type tNcReadRequest = NcReadRequest;
type tNcReadWriteRequest = NcReadWriteRequest;
type tAxisRef = AxisRef;
type tPlcToNcAxisRef = PlcToNcAxisRef;
type tNcToPlcAxisRef = NcToPlcAxisRef;
type tAxisStatus = AxisStatus;
type tDriveAddress = DriveAddress;
type tIAdsAddress = IAdsAddress;
type tMcMoveAbsolute = McMoveAbsolute;
type tMcPower = McPower;
type tMcReset = McReset;
type tMcHalt = McHalt;
type tMcHome = McHome;
type tMcMoveVelocity = McMoveVelocity;
declare global {
    namespace TcHmi.Controls.Beckhoff.TcHmiMotion {
        const TcHmiMotionControl: typeof _TcHmiMotionControl;
        type TcHmiMotionControl = tTcHmiMotionControl;
        namespace TcHmiMotionControl {
            type MotionError = tMotionError;
            type AxisData = tAxisData;
            type AxisUserInput = tAxisUserInput;
            type NcReadRequest = tNcReadRequest;
            type NcReadWriteRequest = tNcReadWriteRequest;
            type AxisRef = tAxisRef;
            type PlcToNcAxisRef = tPlcToNcAxisRef;
            type NcToPlcAxisRef = tNcToPlcAxisRef;
            type AxisStatus = tAxisStatus;
            type DriveAddress = tDriveAddress;
            type IAdsAddress = tIAdsAddress;
            type McMoveAbsolute = tMcMoveAbsolute;
            type McPower = tMcPower;
            type McReset = tMcReset;
            type McHalt = tMcHalt;
            type McHome = tMcHome;
            type McMoveVelocity = tMcMoveVelocity;
        }
    }
}
//# sourceMappingURL=TcHmiMotionControl.esm.d.ts.map