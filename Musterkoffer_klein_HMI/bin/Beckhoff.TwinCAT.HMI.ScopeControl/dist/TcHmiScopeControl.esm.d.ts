import { TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { ServerSymbols } from './ServerSymbols.js';
import { Dialog } from './Dialog.js';
import { TimeRangeDialog } from './TimeRangeDialog.js';
import { type ScopeConfig, type Menubar, type LegendElement, type ScopeLayout, type GetDataDatatype, type TriggerWindow, type Point, type ScopeEventPayload, type ConfigEventPayload, type Tooltip, type Window, ButtonsEnabled, ChartColorSource, ChartType, Direction, MouseMode, Orientation, TimesEnabled, TriggerWindowPosition } from './Types.js';
import type { IChart } from './IChart.js';
import { ScopeChart } from './ScopeChart.js';
/** Global triggerImages as map (string = base64 image string, HTMLImageElement = loaded image) */
export declare let triggerImages: Map<string, HTMLImageElement>;
/** Global backgroundImages as map (string = base64 image string, HTMLImageElement = loaded image) */
export declare let backgroundImages: Map<string, HTMLImageElement>;
export declare class TcHmiScopeControl extends TcHmiControl {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /** Reference to the root dom element of the current control template as jquery object. */
    protected __elementTemplateRoot: JQuery;
    /** Reference to the div element used as chart container as jquery object. */
    __elementChartings: JQuery;
    /** Reference to the div element used as trigger window container as jquery object. */
    protected __elementTriggerWindow: JQuery;
    /** Reference to the canvas element used as resize border view as jquery object. */
    protected __elementBorder: JQuery<HTMLCanvasElement>;
    /** Reference to the div element used as overview container as jquery object. */
    protected __elementOverview: JQuery;
    /** Reference to the div element used as chart name as jquery object. */
    protected __elementChartName: JQuery;
    /** Reference to the div element used as menu-bar as jquery object. */
    protected __elementMenuBar: JQuery;
    /** Reference to the div element used as parent for buttons (top most layer) as jquery ouserinterabject. */
    protected __elementMenuBarDropdown: JQuery;
    /** Reference to the div element used as button-menu-bar as jquery object. */
    protected __elementToolBar: JQuery;
    /** Reference to the div element used as time-menu-bar as jquery object. */
    protected __elementTimeBar: JQuery;
    /** Reference to the div element used as legend as jquery object. */
    protected __elementLegend: JQuery;
    /** Reference to the div element used loading element as jquery object. */
    __elementLoading: JQuery;
    /** Reference to the div element used tooltip as jquery object. */
    protected __elementTooltip: JQuery;
    /** Reference to the div element used tooltip text as jquery object. */
    protected __elementTooltipText: JQuery;
    /** Reference to the div element used tooltip arrow as jquery object. */
    protected __elementTooltipArrow: JQuery;
    /** Reference to the div element used dialog as jquery object. */
    protected __elementDialog: JQuery;
    /** Reference to the div element used time range dialog as jquery object. */
    protected __elementTimeRangeDialog: JQuery;
    __storage: TcHmi.LocalStorage<{
        replace: boolean;
        activeLegendElements: string[];
    }, {
        replace: ReturnType<TcHmiScopeControl['getReplace']>;
        activeLegendElements: ReturnType<TcHmiScopeControl['getScopeConfig']>;
    }> | undefined;
    __replace: boolean | undefined;
    /** Localization */
    protected __localizedElements: Map<string, {
        element: HTMLElement;
        value: string | null;
    }>;
    protected __localizedEngineeringElements: Map<string, Element>;
    __localizationReader: TcHmi.Locale.LocalizationReader | undefined;
    /** Internal variable for init request has been executed  */
    protected __scopeIsInitialized: boolean;
    /** Internal variable for legend */
    protected __showLegend: boolean;
    /** Internal variable for the browser scaling */
    protected __scaling: {
        x: number;
        y: number;
    };
    /** Attributes */
    /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-config' */
    __scopeConfig: ScopeConfig | undefined;
    /** Internal reference to the attribute 'data-tchmi-server-interval */
    protected __serverInterval: number | undefined;
    /** Internal reference to the attribute 'data-tchmi-server-domain */
    __serverDomain: string | undefined;
    /** Internal reference to the attribute 'data-tchmi-enable-record-controls */
    protected __enableRecordControls: boolean | undefined;
    /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-chart-color-source' */
    protected __chartChartColorSource: ChartColorSource | undefined;
    /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-trigger-window-position' */
    protected __triggerWindowPosition: TriggerWindowPosition | undefined;
    /** Internal reference to the attribute 'data-TcHmi_Controls_Beckhoff_TcHmiScopeControl_TcHmiScopeControl-show-trigger-window' */
    protected __showTriggerWindow: boolean | undefined;
    /** Internal reference to the attribute 'data-tchmi-autostart-record' */
    protected __autostartRecord: boolean | undefined;
    /** Linechart elements */
    protected __iCharts: IChart[];
    /** Overviewchart element' */
    protected __overviewChart: ScopeChart | null;
    /** Reference to the div elements used as chart container as jquery object. */
    protected __chartingElements: JQuery[];
    /** Stores the toolButtons as Dictionary<System.TcHmiControl | JQuery> */
    __toolBarControls: TcHmi.Dictionary<TcHmiControl | JQuery>;
    /** Stores the toolButtons as (System.TcHmiControl | JQuery)[] */
    protected __toolBarControlsArray: (TcHmiControl | JQuery<Element>)[];
    /** Stores the toolButtons as JQuery[] */
    protected __timeBarControls: TcHmi.Dictionary<JQuery>;
    /** Stores the triggerWindow as TcHmiDatagrid */
    protected __datagrid: TcHmi.Controls.Beckhoff.TcHmiDatagrid | undefined;
    /**
     * Stores a reference to the function called when the resize event is raised
     */
    protected __initEventDestroyEvent: TcHmi.DestroyFunction | null;
    protected __scopeEventsDestroyEvent: TcHmi.DestroyFunction | null;
    protected __configEventsDestroyEvent: TcHmi.DestroyFunction | null;
    protected __subscriptionIds: {
        dataLayoutAndWindow: number | null;
        onExtensionStateChanged: number | null;
        menubar: number | null;
        actualWindow: number | null;
        getRecords: number | null;
        triggerWindow: number | null;
        getAllUploadedRecords: number | null;
        getOwnUploadedRecords: number | null;
    };
    __requestIds: {
        init: number | null;
        openConnection: number | null;
        setChartSize: number | null;
        startRecord: number | null;
        stopRecord: number | null;
        start: number | null;
        stop: number | null;
        zoom: number | null;
        pan: number | null;
        wheel: number | null;
        unzoom: number | null;
        zoomOut: number | null;
        displayWidth: number | null;
        goto: number | null;
        scroll: number | null;
        scrollBig: number | null;
        undo: number | null;
        redo: number | null;
        setOverviewMode: number | null;
        setOverviewRect: number | null;
        getTooltip: number | null;
        changeChannelState: number | null;
        resizeCharts: number | null;
        saveCurrentRecord: number | null;
        setTriggerComment: number | null;
        uploadedRecords: number | null;
        deleteScopeRecord: number | null;
        changePersist: number | null;
        getAnalyticsData: number | null;
        getChartList: number | null;
        openConnectionToFile: number | null;
        getMenubar: number | null;
        getData: number | null;
        closeConnection: number | null;
        clickOverviewElement: number | null;
        setAnalyticsRecord: number | null;
        moveTrigger: number | null;
    };
    /** Tooltip timeout as number (null if no tooltip is shown) */
    protected __tooltipTimeout: number | null;
    /** Internal menubar options from extension (fill in getMenubarCallback) */
    protected __menubar: Menubar | undefined;
    /** Internal menubar options from extension (fill in getMenubarCallback) */
    protected __legend: LegendElement[] | undefined;
    /** Internal layout options from extension (fill in getMenubarCallback) */
    __scopeLayout: ScopeLayout | undefined;
    /** Internal line graph data from scope-extension (fill in getDataCallback) */
    protected __scopeGraphData: GetDataDatatype | undefined;
    /** Internal window data from scope-extension (fill in getDataCallback) */
    protected __scopeGraphWindow: Window | null;
    /** Internal trigger window data from scope-extension (fill in getDataCallback) */
    protected __triggerWindow: TriggerWindow[] | null;
    /** Internal enabledButtons as enum flag */
    protected __enabledButtons: ButtonsEnabled;
    /** Internal enabledTimes as enum flag */
    protected __enabledTimes: TimesEnabled;
    /** Internal sessionId as string */
    protected __sessionId: string | null;
    /** Internal socketId as number */
    protected __socketId: number | null;
    /** Internal information if init is finished as bool */
    protected __extensionInitCompleted: boolean;
    /** Internal information if scopeConfig is loaded as bool */
    protected __scopeConfigLoaded: boolean;
    /** Mouse mode for zooming or panning as MouseMode */
    __mouseMode: MouseMode;
    /** Internal variable to save the manipulation infos */
    protected __manipulationInfo: {
        isManipulating: boolean;
        start: {
            x: number;
            y: number;
        };
        end: {
            x: number;
            y: number;
        };
        offset: {
            left: number;
            top: number;
        };
        transform: {
            x: number;
            y: number;
        };
        click: boolean;
        mousePosition: {
            x: number;
            y: number;
        };
        elementIndex: number;
        isOverviewSizeChanged: boolean;
        beginOverviewRectChanging: boolean;
        chartSizeChanged: boolean;
        resizeLineIndex: number;
        touchIdentifier: number;
        resizeTriggerWindow: boolean;
        trigger: {
            move: boolean;
            id: number;
        };
    };
    /** Internal variable to save the manipulation infos */
    protected __multitouchInfo: {
        multitouchMode: boolean;
        first: {
            identifier: number | null;
            startPoint: {
                x: number;
                y: number;
            };
        };
        second: {
            identifier: number | null;
            startPoint: {
                x: number;
                y: number;
            };
        };
        offset: {
            left: number;
            top: number;
        };
        distance: number;
        elementIndex: number;
        middlePoint: {
            x: number;
            y: number;
        };
    };
    protected __wheelInfo: {
        isWheeling: boolean;
        wheelSteps: number;
        mousePosition: {
            x: number;
            y: number;
        };
        timeout: number;
    };
    /** Internal variable for resize lines */
    protected __resizeLines: {
        orientation: Orientation;
        startPoint: Point;
        endPoint: Point;
        chartIndex: number;
    }[];
    /** Events */
    private __destroyEvents;
    protected __themeChartBackgroundColor: string | null;
    protected __themeChartForegroundColor: string | null;
    protected __themeOverviewBackgroundColor: string | null;
    protected __themeOverviewForegroundColor: string | null;
    protected __themeCanvasBackgroundColor: string | null;
    protected __themeAxisColor: string | null;
    protected __themeGridColor: string | null;
    protected __themeAxisGroupForegroundColor: string | null;
    /** Stores the displayWidth textbox text */
    __displayWidthText: string | undefined;
    /** Stores the goto textbox text */
    __gotoText: string | undefined;
    /** Stores the showOverview toggle */
    __showOverview: boolean | undefined;
    /** Stores the overview rectangle */
    protected __overviewRectangle: {
        position: {
            x: number;
            y: number;
        };
        dimensions: {
            width: number;
            height: number;
        };
    };
    /** LoadingSpinner */
    __loadingSpinner: Element | null;
    protected __virtualMappingForControlRecord: TcHmi.VirtualControlRightMapping[];
    protected __virtualMappingForChangeHistoricalAquisitions: TcHmi.VirtualControlRightMapping[];
    protected __timeRangeDialog: TimeRangeDialog | null;
    __dialog: Dialog | null;
    __uploadedRecordsForActUser: any[] | null;
    __scopeConfigToFile: ScopeConfig | null;
    protected __oldScopeConfig: ScopeConfig | undefined;
    protected __errorPrompt: TcHmi.Controls.Helpers.TextAndButtonsPrompt<undefined> | null;
    protected __activeLegendElements: string[] | undefined;
    __serverSymbolsHelper: ServerSymbols;
    protected __extensionState: TcHmi.Server.Domains.IDomainInfo['state'];
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
     * Returns the current value of the member variable replace.
     */
    getReplace(): boolean | undefined;
    /**
     * Delete all subscriptions, call Init function from scope extension and openConnection
     */
    protected __clearInit(): void;
    /**
     * Is raised if the init callback is raised.
     */
    protected __initCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Is raised if the GetAllUploadedRecords or GetOwnUploadedRecords callback is raised.
     */
    protected __getUploadedRecordsCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Is raised if the init callback is raised.
     */
    protected __eventRegisterDoneCallback(data: TcHmi.IResultObject): void;
    /**
     * Is raised if the onInitChanged event is raised.
     */
    protected __initChanged(evt: TcHmi.EventProvider.Event): void;
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
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    __addOrUpdateLocalizedElement(element: HTMLElement, key: string, value?: string | null): void;
    /**
     * Remove a localized element.
     * @param key The key to remove.
     */
    __removeLocalizedElement(key: string): void;
    /**
     * Load theme resources for drawing the scope chart.
     */
    protected __loadThemedResources(): void;
    /**
     * Is raised if the control should be redrawn.
     */
    protected __onThemeDataChanged(evt: TcHmi.EventProvider.Event, ctrl?: TcHmi.Controls.System.TcHmiControl): void;
    /**
     * Is raised if the control should be redrawn.
     */
    protected __onUserDataChanged(event: TcHmi.EventProvider.Event, data: any): void;
    /**
     * Is raised if the extension state changed.
     */
    protected __onExtensionStateChanged(result: TcHmi.Server.IResultObject<TcHmi.Dictionary<TcHmi.Server.Domains.IDomainInfo>>): void;
    /**
     * Is raised if scope events or thrown.
     */
    protected __scopeEventCallback(data: TcHmi.Server.Events.SubscriptionResult<ScopeEventPayload>): void;
    /**
     * Is raised if config events are thrown.
     */
    protected __configEventCallback(data: TcHmi.Server.Events.SubscriptionResult<ConfigEventPayload>): void;
    /**
     * Is raised if the control should be redrawn.
     */
    protected __rebuild(evt: TcHmi.EventProvider.Event, ctrl?: TcHmi.Controls.System.TcHmiControl): void;
    /**
     * Is called if timespan or startTime changed.
     */
    protected __openWebsocket(): void;
    /**
     * Call OpenConnection.
     */
    protected __openConnection(): void;
    /**
     * Clear all lineCharts and the menubar with events etc.
     */
    protected __clearFullControl(): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    protected __connectionCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    __setChartSizeCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
     */
    protected __resubscribeMenubar(): void;
    /**
     * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
     */
    protected __resubscribeMenubarCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Is called from __onWebSocketOpen and called GetMenubar from Scope-Extension.
     */
    protected __subscribeMenubar(): void;
    /**
     * Delete subscriptions __subscriptionIdTriggerWindow.
     */
    protected __unsubscribeTriggerWindow(): void;
    /**
     * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
     */
    protected __resubscribeTriggerWindowCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Is called from showTriggerWindow attribute or the button in menubar and called GetTriggerWindow from Scope-Extension.
     */
    protected __subscribeTriggerWindow(): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    protected __getMenubarCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Delete subscriptions __subscriptionId and __subscriptionIdActualWindow.
     */
    protected __resubscribe(changedServerInterval?: boolean): void;
    /**
     * Is called from __onWebSocketOpen and after all interactions and called getData, getLayout and getWindow from Scope-Extension.
     */
    protected __resubscribeGetDataCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Called GetLayout, GetData and GetWindow from Scope-Extension.
     */
    protected __subscribeGetData(): void;
    /**
     * Is raised if __subscriptionIdActualWindow is unsubscribe.
     */
    protected __resubscribeActualWindowCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Called GetActualWindow from Scope-Extension.
     */
    protected __subscribeActualWindow(): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    __getDataCallback(result: TcHmi.Server.IResultObject): void;
    /**
     * Create a popup for error message.
     */
    __createErrorDialog(symbol: string, errorMessage?: string | null): void;
    /**
     * Is called initial and and if size changed.
     */
    protected __drawLineChart(drawOnlyOverview?: boolean): void;
    /**
     * Is called if onPressed event of start or stop button has raised.
     */
    private __onPressed;
    /**
     * Is called if onDataChanged event of datagrid has raised.
     */
    private __onTriggerDatagrid_DataChanged;
    /**
     * Is called if onPressed event of start or stop button has raised.
     */
    private __onUserInteractionFinished;
    /**
     * Created legend
     */
    __createLegend(legend: LegendElement[] | undefined | null): void;
    /**
     * Created menuButtons from enableButtons/enableTimes
     */
    __createMenuButtons(enableButtons: ButtonsEnabled, enableTimes: TimesEnabled): void;
    /**
     * Calculated which menuButtons added to topMostLayer
     */
    __calcMenuButtons(): void;
    /**
     * Called the enableOrDisableMenuControls method.
     */
    enableOrDisableMenuControls(): void;
    /**
     * Set all menubuttons enabled or disabled
     */
    __enableOrDisableMenuControls(scopeState: string, live: boolean, undo: boolean, redo: boolean, chartType: ChartType): void;
    /**
     * Updated menuButtons and -Times
     */
    __updatedMenuValues(windowData: Window | null): void;
    /**
     * Show options-div (with buttons which can not be shown)
     */
    showOptions(): void;
    /**
     * Transforms client coordinates of mouse and touch events into the coordinate system of the target element.
     * Respects translation and sscaling.
     * @param clientX The x coordinate.
     * @param clientY The y coodinate.
     * @param targetElement The target element.
     */
    protected __transformEventCoords(clientX: number, clientY: number, targetElement?: Element): {
        x: number;
        y: number;
    };
    /**
     * Is raised if mouseDown on legend.
     * @param event The event of mouseDown.
     */
    protected __onCheckboxMouseDown(event: MouseEvent): void;
    /**
     * Is raised if touchstart on legend.
     * @param event The event of touchstart.
     */
    protected __onCheckboxTouchStart(event: TouchEvent): void;
    /**
     * Is raised if mouseDown on canvasDrawing.
     * @param event The event of mouseDown.
     */
    protected __onMouseDown(event: MouseEvent): void;
    /**
     * Is raised if mouseDown on canvasDrawing.
     * @param event The event of mouseDown.
     */
    protected __onMouseDownGlobal(event: MouseEvent): void;
    /**
     * Is raised if mouseMove on document.
     * @param event The event of mouseMove.
     */
    protected __onMouseMove(event: MouseEvent): void;
    /**
     * Is raised if mouseMove on control.
     * @param event The event of mouseMove.
     */
    protected __onMouseMoveChangeCursor(event: MouseEvent): void;
    /**
     * Is raised if mouseMove on document.
     * @param event The event of mouseMove.
     */
    protected __onMouseMoveOverview(event: MouseEvent): void;
    /**
     * Is raised if mouseUp on overview canvas.
     * @param event The event of mouseMove.
     */
    protected __onMouseUpOverview(event: MouseEvent): void;
    /**
     * Is raised if mouseUp on document.
     * @param _event The event of mouseDown.
     */
    protected __onMouseUp(_event: MouseEvent): void;
    /**
     * Is raised if mouseDown on canvasDrawing.
     * @param event The event of mouseWheel.
     */
    protected __onMouseWheel(event: WheelEvent): void;
    /**
     * Is raised if touchStart on canvasDrawing.
     * @param event The event of touchStart.
     */
    protected __onTouchStart(event: TouchEvent): void;
    /**
     * Is raised if touchMove on document.
     * @param event The event of touchMove.
     */
    protected __onTouchMove(event: TouchEvent): void;
    /**
     * Is raised if touchEnd on document.
     * @param event The event of touchEnd.
     */
    protected __onTouchEnd(event: TouchEvent): void;
    /**
     * Is called from onTouchStart and onMouseDown.
     * @param x The x coordinate of the mouse or touch.
     * @param y The y coordinate of the mouse or touch.
     */
    protected __userInteractionStart(x: number, y: number, position: number): void;
    /**
     * Is called from onTouchMove and onMouseMove.
     * @param x The x coordinate of the mouse or touch.
     * @param y The y coordinate of the mouse or touch.
     */
    protected __userInteractionMove(x: number, y: number): void;
    /**
     * Is called from onTouchEnd and onMouseUp.
     * Resets this.__drawing on canvas.
     * Zoom mode:    Clears the canvas.
     * Pan mode:     resets this.__drawing.
     */
    protected __userInteractionEnd(): void;
    /**
     * Is called from onTouchEnd and onMouseUp.
     * @param displayText The text for the tooltip
     * @param chartIndex The chart index
     * @param mousePosition The mouse position
     * @param timeout The timeout for showing the tooltip
     */
    protected __showTooltip(tooltipObj: Tooltip): void;
    /**
     * Called the startRecord method from the scope extension.
     */
    startRecord(recordTime?: number): void;
    /**
     * Called the stopRecord method from the scope extension.
     */
    stopRecord(): void;
    /**
     * Called the startDisplay method from the scope extension.
     */
    startDisplay(): void;
    /**
     * Called the stopDisplay method from the scope extension.
     */
    stopDisplay(): void;
    /**
     * Called the zoomToDefault method from the scope extension.
     */
    zoomToDefault(): void;
    /**
     * Called the zoomOutMax method from the scope extension.
     */
    zoomOutMax(): void;
    /**
     * Called the goTo method from the scope extension.
     */
    goTo(goTo: string): void;
    /**
     * Called the setDisplayWidth method from the scope extension.
     */
    setDisplayWidth(displayWidth: string): void;
    /**
     * Called the scroll method from the scope extension.
     */
    scroll(direction: Direction): void;
    /**
     * Called the scrollBig method from the scope extension.
     */
    scrollBig(direction: Direction): void;
    /**
     * Called the undo method from the scope extension.
     */
    undo(): void;
    /**
     * Called the redo method from the scope extension.
     */
    redo(): void;
    /**
     * Called the setOverviewMode method from the scope extension.
     */
    setOverviewMode(): void;
    /**
     * Called the setMouseMode method from the scope extension.
     */
    setMouseMode(valueNew: MouseMode | keyof typeof MouseMode): void;
    /**
     * Return the mouseMode value.
     * @returns The current value of mouseMode.
     */
    getMouseMode(): "None" | "ZoomX" | "ZoomY" | "ZoomXY" | "PanX" | "PanY" | "PanXY" | null;
    /**
     * Sets the ScopeConfig.
     * @param valueNew The new value for ScopeConfig
     */
    setScopeConfig(valueNew: ScopeConfig | null): void;
    /**
     * The watch callback for the yAxis object resolver.
     */
    protected __onResolverForScopeConfigWatchCallback(data: TcHmi.Symbol.ObjectResolver.IWatchResultObject<ScopeConfig>): void;
    /**
     * Return the value of ScopeConfig
     * @returns The current value of scopeConfig.
     */
    getScopeConfig(): ScopeConfig | undefined;
    /**
     * Processes the current value of attribute ScopeConfig.
     */
    protected __processScopeConfig(): void;
    /**
     * Sets the server interval and calls the associated process function (processServerInterval).
     * @param valueNew The new value for server interval.
     */
    setServerInterval(valueNew: number | null): void;
    /**
     * Returns the current value of server interval.
     * @returns The current value of serverInterval.
     */
    getServerInterval(): number | undefined;
    /**
     * Processes the current server interval attribute value.
     */
    protected __processServerInterval(): void;
    /**
     * Sets the server domain for the extension
     * @param valueNew The new value for serverDomain
     */
    setServerDomain(valueNew: string | null): void;
    /**
     * Returns the value of serverDomain
     * @returns The current value of serverDomain.
     */
    getServerDomain(): string | undefined;
    /**
     * Processes the current value of attribute serverDomain.
     */
    protected __processServerDomain(): void;
    /**
     * Sets the enableRecordControls value and calls the associated process function (processEnableRecordControls).
     * @param valueNew The new value for enableRecordControls.
     */
    setEnableRecordControls(valueNew: boolean | null): void;
    /**
     * Returns the current value of enableRecordControls.
     * @returns The current value of enableRecordControls.
     */
    getEnableRecordControls(): boolean | undefined;
    /**
     * Processes the current enableRecordControls attribute value.
     */
    protected __processEnableRecordControls(): void;
    /**
     * Sets the ChartColorSource.
     * @param valueNew The new value for ChartColorSource
     */
    setChartColorSource(valueNew: ChartColorSource | keyof typeof ChartColorSource | null): void;
    /**
     * Returns the value of ChartColorSource
     * @returns The current value of chartColorSource.
     */
    getChartColorSource(): "ScopeConfig" | "Theme" | undefined;
    /**
     * Processes the current value of attribute ChartColorSource.
     */
    protected __processChartColorSource(): void;
    /**
     * Sets the TriggerWindowPosition.
     * @param valueNew The new value for TriggerWindowPosition
     */
    setTriggerWindowPosition(valueNew: TriggerWindowPosition | keyof typeof TriggerWindowPosition | null): void;
    /**
     * Returns the value of TriggerWindowPosition
     * @returns The current value of triggerWindowPosition.
     */
    getTriggerWindowPosition(): TriggerWindowPosition | undefined;
    /**
     * Processes the current value of attribute TriggerWindowPosition.
     */
    protected __processTriggerWindowPosition(): void;
    /**
     * Sets the showTriggerWindow value and calls the associated process function (processShowTriggerWindow).
     * @param valueNew The new value for showTriggerWindow.
     */
    setShowTriggerWindow(valueNew: boolean | null): void;
    /**
     * Returns the current value of showTriggerWindow.
     * @returns The current value of showTriggerWindow.
     */
    getShowTriggerWindow(): boolean | undefined;
    /**
     * Processes the current showTriggerWindow attribute value.
     */
    protected __processShowTriggerWindow(): void;
    /**
     * Sets the value of the member variable autostartRecord.
     * @param valueNew The new value for autostartRecord.
     */
    setAutostartRecord(valueNew: boolean | null): void;
    /**
     * Returns the current value of the member variable autostartRecord.
     */
    getAutostartRecord(): boolean | undefined;
}
declare const _TcHmiScopeControl: typeof TcHmiScopeControl;
type tTcHmiScopeControl = TcHmiScopeControl;
declare global {
    namespace TcHmi.Controls.TcHmiScopeControl {
        const TcHmiScopeControl: typeof _TcHmiScopeControl;
        type TcHmiScopeControl = tTcHmiScopeControl;
    }
}
export {};
//# sourceMappingURL=TcHmiScopeControl.esm.d.ts.map