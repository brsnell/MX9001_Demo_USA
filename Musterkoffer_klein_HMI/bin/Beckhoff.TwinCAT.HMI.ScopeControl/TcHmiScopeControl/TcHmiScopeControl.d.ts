// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************







/** Global triggerImages as map (string = base64 image string, HTMLImageElement = loaded image) */
export declare let triggerImages: Map<string, HTMLImageElement>;
/** Global backgroundImages as map (string = base64 image string, HTMLImageElement = loaded image) */
export declare let backgroundImages: Map<string, HTMLImageElement>;
declare class TcHmiScopeControl extends TcHmi.Controls.System.TcHmiControl {
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
    __toolBarControls: TcHmi.Dictionary<TcHmiControl.Control | JQuery>;
    /** Stores the toolButtons as (System.TcHmiControl | JQuery)[] */
    protected __toolBarControlsArray: (TcHmiControl.Control | JQuery<Element>)[];
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
export { TcHmiScopeControl as Control };
declare const _TcHmiScopeControl: typeof TcHmiScopeControl;
type tTcHmiScopeControl = TcHmiScopeControl;
declare global {
    namespace TcHmi.Controls.Beckhoff.TcHmiScopeControl {
        const TcHmiScopeControl: typeof _TcHmiScopeControl;
        type TcHmiScopeControl = tTcHmiScopeControl;
    }
}

export declare class IChart {
    /** The elementRoot as jquery object. */
    protected __elementRoot: JQuery;
    /** The canvas to drawing axis, grid and subgrid as HTMLCanvasElement. */
    protected __canvasFrame: HTMLCanvasElement | undefined;
    /** The canvas to drawing the lines as HTMLCanvasElement. */
    protected __canvasDrawing: HTMLCanvasElement | undefined;
    /** The canvas to drawing the lines as HTMLCanvasElement. */
    protected __canvasZooming: HTMLCanvasElement | undefined;
    /** The canvas to drawing the marker as HTMLCanvasElement. */
    protected __canvasMarker: HTMLCanvasElement | undefined;
    /** The canvas frame context as CanvasRenderingContext2D. */
    protected __contextFrame: CanvasRenderingContext2D | null | undefined;
    /** The canvas context drawing as CanvasRenderingContext2D. */
    protected __contextDrawing: CanvasRenderingContext2D | null | undefined;
    /** The canvas context drawing as CanvasRenderingContext2D. */
    protected __contextZooming: CanvasRenderingContext2D | null | undefined;
    /** The canvas context marker as CanvasRenderingContext2D. */
    protected __contextMarker: CanvasRenderingContext2D | null | undefined;
    /**
     * Creates a new IChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Removes all canvas elements.
     */
    remove(): void;
    /**
     * Clears all canvas elements.
     */
    clear(width: number, height: number): void;
    /**
     * Returns the root element.
     * @returns The root element.
     */
    getRootElement(): JQuery<HTMLElement>;
    /**
     * Returns the canvas object where the graphs are drawing.
     * @returns The canvas where drawing the graphs.
     */
    getCanvasDrawing(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where the axis, grid and subgrid are drawing.
     * @returns The canvas where drawing axis, grid and subgrid.
     */
    getCanvasFrame(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where you can make interactions.
     * @returns The canvas for interactions.
     */
    getCanvasZooming(): HTMLCanvasElement | undefined;
    /**
     * Returns the canvas object where the marker are drawing.
     * @returns The canvas where drawing marker.
     */
    getCanvasMarker(): HTMLCanvasElement | undefined;
    /**
     * Creates the canvas where axis, grid and subgrid are drawing.
     */
    __initCanvas(canvasWidth: number, canvasHeight: number): void;
}










export declare class ScopeChart extends IChart {
    /** The yAxis as YAxis[]. */
    protected __yAxis: YAxis[];
    /** The xAxis as XAxis object. */
    protected __xAxis: XAxis[];
    /** The grid as Grid object. */
    protected __grid: Grid[];
    /** The subgrid as Subgrid object. */
    protected __subgrid: Subgrid[];
    /** The trigger as Trigger object */
    protected __trigger: Trigger[];
    /** The xyTrigger as Trigger object */
    protected __xyTrigger: XYTrigger[];
    /** The xyTrigger as Trigger object */
    protected __axisGroupForegroundColor: string;
    /** The lineGraphs as LineGraph object. */
    protected __lineGraph: Map<string, LineGraph>;
    /** The hasChanged as boolean. */
    private __hasChanged;
    /** The lineChanged as boolean. */
    protected __lineChanged: boolean;
    /**
     * Creates a new ScopeChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Adds a xAxis (only one xAxis are exists).
     * @returns The hasChanged attribute.
     */
    addXAxis(xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): XAxis | null;
    /**
     * Adds a xAxis at index.
     * @param index The index where the new xAxis should added in array.
     */
    addXAxisAtPosition(index: number, xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Delete the xAxis at index.
     * @param index The index.
     */
    deleteXAxis(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllXAxis(): void;
    /**
     * Adds a yAxis.
     */
    addYAxis(yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Adds a yAxis at index.
     * @param index The index where the new yAxis should added in array.
     */
    addYAxisAtPosition(index: number, yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null): void;
    /**
     * Delete the yAxis at index.
     * @param index The index.
     */
    deleteYAxis(index: number): void;
    /**
     * Delete all yAxis.
     */
    deleteAllYAxis(): void;
    /**
     * Adds a grid.
     */
    addGrid(xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null): void;
    /**
     * Adds a grid at index.
     * @param index The index where the new grid should added in array.
     */
    addGridAtPosition(index: number, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null): void;
    /**
     * Delete the grid at index.
     * @param index The index.
     */
    deleteGrid(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllGrids(): void;
    /**
     * Adds a subgrid.
     */
    addSubgrid(xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null): void;
    /**
     * Adds a subgrid at index.
     * @param index The index where the new subgrid should added in array.
     */
    addSubgridAtPosition(index: number, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null): void;
    /**
     * Delete the subgrid at index.
     * @param index The index.
     */
    deleteSubgrid(index: number): void;
    /**
     * Delete all xAxis.
     */
    deleteAllSubgrids(): void;
    /**
     * Adds a __trigger.
     */
    addTrigger(triggerData: TriggerData | null): void;
    /**
     * Adds a __trigger at index.
     * @param index The index where the new __trigger should added in array.
     */
    addTriggerAtPosition(index: number, triggerData: TriggerData | null): void;
    /**
     * Delete the __trigger at index.
     * @param index The index.
     */
    deleteTrigger(index: number): void;
    /**
     * Delete all trigger.
     */
    deleteAllTriggers(): void;
    /**
     * Adds a xyTrigger.
     */
    addXYTrigger(xyTriggerData: XYTriggerData | null): void;
    /**
     * Adds a xyTrigger at index.
     * @param index The index where the new __trigger should added in array.
     */
    addXYTriggerAtPosition(index: number, xyTriggerData: XYTriggerData | null): void;
    /**
     * Delete the xyTrigger at index.
     * @param index The index.
     */
    deleteXYTrigger(index: number): void;
    /**
     * Delete all xyTrigger.
     */
    deleteAllXYTriggers(): void;
    /**
     * Adds a linegraph.
     */
    addLineGraph(graphLayout: ScopeGraphLayout | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }): void;
    /**
     * Delete all linegtaphs.
     */
    deleteAllLineGraphs(): void;
    /**
     * Removes all canvas elements.
     */
    remove(): void;
    /**
     * Clears all canvas elements.
     */
    clear(width: number, height: number): void;
    /**
     * Returns all yAxis.
     * @returns The yAxis.
     */
    getYAxis(): YAxis[];
    /**
     * Returns the specific yAxis.
     * @param index The index.
     * @returns The yAxis at index.
     */
    getYAxisAtPosition(index: number): YAxis;
    /**
     * Returns all xAxis.
     * @returns The xAxis.
     */
    getXAxis(): XAxis[];
    /**
     * Returns the specific xAxis.
     * @param index The index.
     * @returns The xAxis at index.
     */
    getXAxisAtPosition(index: number): XAxis;
    /**
     * Returns the grid.
     * @returns The grid.
     */
    getGrid(): Grid[];
    /**
     * Returns the specific grid.
     * @param index The index.
     * @returns The grid at index.
     */
    getGridAtPosition(index: number): Grid;
    /**
     * Returns the subgrid.
     * @returns The subgrid.
     */
    getSubgrid(): Subgrid[];
    /**
     * Returns the specific subgrid.
     * @param index The index.
     * @returns The subgrid at index.
     */
    getSubgridAtPosition(index: number): Subgrid;
    /**
     * Returns the specific trigger.
     * @param index The index.
     * @returns The trigger at index.
     */
    getTriggerAtPosition(index: number): Trigger;
    /**
     * Returns the trigger.
     * @returns The trigger.
     */
    getTrigger(): Trigger[];
    /**
     * Returns the specific xyTrigger.
     * @param index The index.
     * @returns The xyTrigger at index.
     */
    getXYTriggerAtPosition(index: number): XYTrigger;
    /**
     * Returns all xyTrigger.
     * @returns The xyTrigger.
     */
    getXYTrigger(): XYTrigger[];
    /**
     * Returns the linegraph.
     * @returns The linegraph.
     */
    getLineGraph(): Map<string, LineGraph>;
    /**
     * Returns the specific lineGraph.
     * @param index The index.
     * @returns The linegraph at index.
     */
    getLineGraphWithName(name: string): LineGraph | undefined;
    /**
     * Returns the hasChanged attribute which saved if axis, grid and subgrid must be redrawing.
     * @returns The hasChanged attribute.
     */
    getHasChanged(): boolean;
    /**
     * Sets the hasChanged.
     * @param hasChanged The hasChanged attribute.
     */
    setHasChanged(hasChanged: boolean): void;
    /**
     * Sets the lineChanged which saved if graphs must be redrawing.
     * @param lineChanged The lineChanged attribute.
     */
    setLineChanged(lineChanged: boolean): void;
    /**
     * Sets the axisGroupForegroundColor.
     * @param axisGroupForegroundColor The axisGroupForegroundColor attribute.
     */
    setAxisGroupForegroundColor(axisGroupForegroundColor: string): void;
    /**
     * Draws the lineChart if anything is changed.
     */
    draw(layout: ScopeLayoutChart, themeResourcesCanvasColor: string | null): void;
    /**
     * Draws only all trigger (not xyTrigger).
     */
    drawTrigger(): void;
}
export declare enum LineStyle {
    Dotted = 0,
    Dashed = 1,
    Solid = 2
}



export declare class DigitalChart extends IChart {
    /**
     * Creates a new ScopeChart.
     * @param elementRoot The root element where the canvas elements added to.
     */
    constructor(elementRoot: JQuery, canvasWidth: number, canvasHeight: number, reuseElements: boolean);
    /**
     * Draws the lineChart if anything is changed.
     */
    draw(layout: ScopeLayoutDigitalChart, data: DigitalChartType | null): void;
}
export interface DigitColors {
    top: string;
    topLeft: string;
    topRight: string;
    middle: string;
    bottomLeft: string;
    bottomRight: string;
    bottom: string;
}
export interface DigitLayout {
    top: Point[];
    topLeft: Point[];
    topRight: Point[];
    middle: Point[];
    bottomLeft: Point[];
    bottomRight: Point[];
    bottom: Point[];
}


export declare class Grid {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The layout for the xAxis. */
    protected __xAxisLayout: ScopeLayoutAxis | null;
    /** The layout for the yAxis. */
    protected __yAxisLayout: ScopeLayoutAxis | null;
    /** The gridSize. */
    protected __gridSize: {
        dimensions: Dimensions;
        position: Position;
    } | null;
    /** The themeResourcesSubgridColor as string. */
    protected __themeResourcesGridColor: string | null;
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesGridColor: string | null);
    /**
     * Draws the grid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the grid.
     * @param height The height of the grid.
     * @param numberOfWidthLines The number of width lines.
     * @param numberOfHeightLines The number of height lines.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(): void;
}


export declare class Subgrid {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The layout for the xAxis. */
    protected __xAxisLayout: ScopeLayoutAxis | null;
    /** The layout for the yAxis. */
    protected __yAxisLayout: ScopeLayoutAxis | null;
    /** The gridSize. */
    protected __gridSize: {
        dimensions: Dimensions;
        position: Position;
    } | null;
    /** The themeResourcesSubgridColor as string. */
    protected __themeResourcesSubgridColor: string | null;
    /**
     * Creates a new Grid.
     * @param canvas The canvas element where drawing the grid.
     */
    constructor(canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis | null, yAxisLayout: ScopeLayoutAxis | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    }, themeResourcesSubgridColor: string | null);
    /**
     * Draws the subgrid to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param width The width of the subgrid.
     * @param height The height of the subgrid.
     * @param numberOfLinesBetweenMainGridWidth The number of lines between maingrid in width.
     * @param widthBetweenMainGrid The width between two main grid lines.
     * @param numberOfLinesBetweenMainGridHeight The number of lines between maingrid in height.
     * @param heightBetweenMainGrid The height between two main grid lines.
     * @param numberOfMainGridWidthLines The number of main grid width lines.
     * @param numberOfMainGridHeightLines The number of main grid height lines.
     * @param gridLineWidth The line width of the grid.
     * @param drawingBorder The border (bigger than grid) of all sites.
     */
    draw(): void;
}


export declare class XAxis {
    /** The labelFontFamily as string. */
    protected __labelFontFamily: TcHmi.FontFamily | null;
    /** The labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The labelFontSizeUnit as string. */
    protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The labelFontWeight as string. */
    protected __labelFontWeight: TcHmi.FontWeight | null;
    /** The axisNameFontFamily as string. */
    protected __axisNameFontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __axisNameFontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __axisNameFontWeight: TcHmi.FontWeight | null;
    /** The layout for the axis. */
    protected __xAxisLayout: ScopeLayoutAxis | null;
    /** The id as number. */
    protected __id: number;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The themeResourcesHeadlineColor as string. */
    protected __themeResourcesHeadlineColor: string | null;
    /** The themeResourcesAxisColor as string. */
    protected __themeResourcesAxisColor: string | null;
    /**
     * Creates a new YAxis.
     * @param id The number of yAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param xAxisLayout The xAxis layout.
     */
    constructor(id: number, canvas: HTMLCanvasElement, xAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
    /**
     * Draws the xAxis to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param endPoint The endpoint to drawing (top/right).
     */
    drawAxis(): void;
    /**
     * Returns the id.
     * @returns The id of the axis.
     */
    getId(): number;
}


export declare class YAxis {
    /** The labelFontFamily as string. */
    protected __labelFontFamily: TcHmi.FontFamily | null;
    /** The labelFontSize as number. */
    protected __labelFontSize: number | null;
    /** The labelFontSizeUnit as string. */
    protected __labelFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The labelFontWeight as string. */
    protected __labelFontWeight: TcHmi.FontWeight | null;
    /** The axisNameFontFamily as string. */
    protected __axisNameFontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __axisNameFontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __axisNameFontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __axisNameFontWeight: TcHmi.FontWeight | null;
    /** The layout for the axis. */
    protected __yAxisLayout: ScopeLayoutAxis | null;
    /** The id as number. */
    protected __id: number;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The themeResourcesHeadlineColor as string. */
    protected __themeResourcesHeadlineColor: string | null;
    /** The themeResourcesAxisColor as string. */
    protected __themeResourcesAxisColor: string | null;
    /**
     * Creates a new YAxis.
     * @param id The number of yAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param xAxisLayout The yAxis layout.
     */
    constructor(id: number, canvas: HTMLCanvasElement, yAxisLayout: ScopeLayoutAxis, themeResourcesHeadlineColor: string | null, themeResourcesAxisColor: string | null);
    /**
     * Draws the yAxis to the canvas.
     * @param startPoint The startpoint to drawing (bottom/left).
     * @param endPoint The endpoint to drawing (top/right).
     * @param showOnlyYAxis Only y Axis is drawing..
     */
    drawAxis(): void;
    /**
     * Returns the id.
     * @returns The id of the axis.
     */
    getId(): number;
}


export declare class Trigger {
    /** The axisNameFontFamily as string. */
    protected __fontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __fontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __fontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __fontWeight: TcHmi.FontWeight | null;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The positions for the marker */
    protected __triggerData: TriggerData | null;
    /**
     * Creates a new YAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param markerLayout The marker layout.
     */
    constructor(canvas: HTMLCanvasElement, triggerData: TriggerData | null);
    /**
     * Draws the marker to the canvas.
     */
    draw(): void;
    /**
     * Returns the calculated label.
     * @returns The calculated label.
     */
    private getCuttedString;
    /**
     * Returns the trigger data.
     * @returns The trigger data.
     */
    getTriggerData(): TriggerData | null;
    /**
     * Sets the triggerData.
     * @param triggerData The triggerData value.
     */
    setTriggerData(triggerData: TriggerData | null): void;
}


export declare class XYTrigger {
    /** The axisNameFontFamily as string. */
    protected __fontFamily: TcHmi.FontFamily | null;
    /** The axisNameFontSize as number. */
    protected __fontSize: number | null;
    /** The axisNameFontSizeUnit as string. */
    protected __fontSizeUnit: TcHmi.FontSizeUnit | null;
    /** The axisNameFontWeight as string. */
    protected __fontWeight: TcHmi.FontWeight | null;
    /** The canvas element as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The positions for the marker */
    protected __xyTriggerData: XYTriggerData | null;
    /**
     * Creates a new YAxis.
     * @param canvas The canvas element where drawing the grid.
     * @param markerLayout The marker layout.
     */
    constructor(canvas: HTMLCanvasElement, triggerData: XYTriggerData | null);
    /**
     * Draws the marker to the canvas.
     */
    draw(): void;
}


export declare class LineGraph {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /** The points for the graph. */
    protected __points: Point[] | null;
    /** The point value from zero points for the graph. */
    protected __zeroPoint: Position | null;
    /** The point value from zero points for the graph. */
    protected __lineSeries: LineSeries[] | null;
    /** The layout for the graph. */
    protected __graphLayout: ScopeGraphLayout | null;
    /** The size for the grid. */
    protected __gridSizeLayout: {
        dimensions: Dimensions;
        position: Position;
    };
    /**
     * Creates a new LineGraph.
     * @param canvas The optional canvas element to drawing.
     */
    constructor(canvas: HTMLCanvasElement, graphLayout: ScopeGraphLayout | null, gridSize: {
        dimensions: Dimensions;
        position: Position;
    });
    /**
     * Draws the lineGraph to the canvas.
     */
    draw(): void;
    /**
     * Draws the line from start to end with the current lineState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderLineSegment;
    /**
     * Draws the mark from start to end with the current markState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderMarkSegment;
    /**
     * Draws the fill area from start to end with the current fillState.
     * @param start The index of the first element in the line.
     * @param end The index of the last element in the line.
     * @param current The current lineState of the line.
     */
    private __renderFillSegment;
    /**
     * Sets the points.
     * @param points The new points.
     */
    setPoints(points: Point[]): void;
    /**
     * Sets the zeroPoint.
     * @param zeroPoint The new zeroPoint value.
     */
    setZeroPoint(zeroPoint: Position): void;
    /**
     * Sets the lineSeries.
     * @param lineSeries The new lineSeries value.
     */
    setLineSeries(lineSeries: LineSeries[]): void;
}
export interface Point {
    x: number;
    y: number;
}


export declare class Digit {
    /** The canvas as HTMLCanvasElement. */
    protected __canvas: HTMLCanvasElement | undefined;
    /** The canvas context as CanvasRenderingContext2D. */
    protected __context: CanvasRenderingContext2D | null;
    /**
     * Creates a new LineGraph.
     * @param canvas The optional canvas element to drawing.
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws the lineGraph to the canvas.
     */
    draw(digit: DigitType): void;
}



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
    protected __elementProgressbar: HTMLDivElement;
    protected __elementProgressbarBackground: HTMLDivElement;
    protected __persistCheckbox: TcHmi.Controls.Beckhoff.TcHmiCheckbox;
    protected __chunksizeTextbox: TcHmi.Controls.Beckhoff.TcHmiTextbox;
    protected __file: File | null;
    protected __uploadedRecordsDatagrid: TcHmi.Controls.Beckhoff.TcHmiDatagrid;
    protected __chartsCombobox: TcHmi.Controls.Beckhoff.TcHmiCombobox<string>;
    protected __deleteSelectedButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __contentTabs: TcHmi.Controls.Helpers.ContentTabs;
    protected __tabContents: HTMLElement;
    protected __actionButton: TcHmi.Controls.Beckhoff.TcHmiButton;
    protected __fileButton: TcHmi.Controls.Beckhoff.TcHmiButton;
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
    setProgressbarValue(newPercentValue: number): void;
    /**
     * Return the progressbar percent value.
     * @returns The current value of progressbar.
     */
    getProgressbarValue(): string;
    /**
     * Disable progressbar.
     * @param newValue The new value for show progress bar
     */
    showProgressbar(showProgressBar: boolean): void;
}



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



export declare class ServerSymbols {
    #private;
    /**
     * Creates a new ServerSymbol helper class.
     * @param scopeControl The parent scope control.
     */
    constructor(scopeControl: TcHmiScopeControl);
    protected __parentControl: TcHmiScopeControl;
    protected __fileUploader: TcHmi.FileUploader | null;
    /**
     * Called the setChartSize method from the scope extension.
     */
    setChartSize(setLoadingSpinner: boolean): void;
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
     * Called the startRecord method from the scope extension.
     */
    __getDataAsRequest(): void;
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
     * Called the goTo method from the scope extension.
     */
    goTo(goTo: string): void;
    /**
     * Called the undo method from the scope extension.
     */
    undo(): void;
    /**
     * Called the undo method from the scope extension.
     */
    redo(): void;
    /**
     * Called the zoomToDefault method from the scope extension.
     */
    zoomToDefault(): void;
    /**
     * Called the zoomOutMax method from the scope extension.
     */
    zoomOutMax(): void;
    /**
     * Called the setOverviewMode method from the scope extension.
     */
    setOverviewMode(): void;
    /**
     * Set the mouseMode for interactions.
     */
    setMouseMode(valueNew: MouseMode | keyof typeof MouseMode): void;
    /**
     * Called the changeChannelState method from the scope extension.
     */
    changeChannelState(id: string, state: boolean): void;
    /**
     * Is called from onPressed for download the scope record file.
     */
    __downloadScopeRecord(element?: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
    } | null): void;
    /**
     * Called the uploadRecord method from the scope extension.
     */
    uploadRecord(file: File, persist: boolean, chunkSize: number): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    __uploadCallback(result: TcHmi.FileUploader.ProgressResult): void;
    /**
     * Called the saveCurrentRecord method from the scope extension.
     */
    saveCurrentRecord(): Promise<void>;
    /**
     * Called the DeleteScopeRecord method from the scope extension.
     */
    deleteScopeUpload(elements: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }[]): void;
    /**
     * Called the DeleteScopeRecord method from the scope extension.
     */
    changePersist(element: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the GetChartList method from the scope extension.
     */
    getChartList(element: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the download function.
     */
    download(element: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the OpenConnectionToFile method from the scope extension.
     */
    openConnectionToFile(element: {
        relativePath: string;
        fileName: string;
        guid: string;
        persist: boolean;
        chartName: string;
    }): void;
    /**
     * Called the closeConnection method from the scope extension.
     */
    detachFromScopeRecord(): void;
    /**
     * Called the closeConnection method from the scope extension.
     */
    closeConnection(scopeConfig: ScopeConfig | undefined): void;
    /**
     * Called the getAnalyticsData method from the scope extension.
     */
    getAnalyticsData(): void;
    /**
     * Called the SetAnalyticsRecord method from the scope extension.
     */
    setAnalyticsRecord(recordName: string, recordId: number, startTime: string, endTime: string): void;
}


/**
 * Convert scopeString to iso 8601 string
 * @param scopeString scopeString
 */
export declare function __scopeStringToIso(scopeString: string): string;
/**
 * Convert iso 8601 string to scope string
 * @param t Iso 8601 string
 */
export declare function __isoToScopeString(t: string): string;
/**
 * Convert iso 8601 string to milliseconds
 * @param t Iso 8601 string
 */
export declare function __isoToMilliSec(t: string): number;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isDigitalChartLayout(value: ScopeLayoutChart | ScopeLayoutDigitalChart): value is ScopeLayoutDigitalChart;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isDigitalChartData(value: Chart | DigitalChart): value is DigitalChart;

export interface ScopeEventPayload {
    sessionId: string;
    socketId: number;
    message: string;
    severity: TcHmi.Server.Events.Severity;
}
export interface ConfigEventPayload {
    configName: string;
    oldConfigName: string | null;
    configType: ConfigType;
    severity: TcHmi.Server.Events.Severity;
}
export declare enum ConfigType {
    Add = 0,
    Change = 1,
    Rename = 2,
    Delete = 3
}
export interface ScopeConfig {
    name: string;
    chart: string;
}
export declare enum ChartColorSource {
    ScopeConfig = 0,
    Theme = 1
}
export declare enum TriggerWindowPosition {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3
}
export interface TriggerWindow {
    id: string;
    count: number;
    triggerGroup: string;
    releaseTime: string;
    comment?: string;
}
export interface LegendElement {
    id: string;
    text: string;
    enabled: boolean;
    color: string;
}
export interface Point {
    x: number;
    y: number;
}
export interface Window {
    xAxisStart: string;
    xAxisEnd: string;
    xAxisPosition: string;
    displayWidth: string;
    startDisplayTime: string;
    scopeState: string;
    liveState: boolean;
    undo: boolean;
    redo: boolean;
    overviewRect?: {
        dimensions: Dimensions;
        position: Position;
    };
}
export interface ActualWindow {
    xAxisStart: string;
    xAxisEnd: string;
    displayWidth: string;
    scopeState: string;
    liveState: boolean;
    undo: boolean;
    redo: boolean;
}
export interface GetDataDatatype {
    overview?: Chart;
    charts: Chart[] | DigitalChart[];
}
export interface Chart {
    graphs: TcHmi.Dictionary<Graph>;
    trigger: TriggerData[];
    xyTrigger: XYTriggerData[];
}
export interface DigitalChart {
    tiles: Tile[];
}
export interface Tile {
    digitalView: {
        labels: {
            name: string;
            value: string;
            visible: boolean;
            dimensions: Dimensions;
            position: Position;
            color: string;
            fontSize: number;
        }[];
        digits: Digit[];
        minus?: Segment;
        separator?: {
            color: string;
            polygon: Point[];
            seperatorType: string;
        };
    };
    labels: {
        name: string;
        value: string;
        visible: boolean;
        dimensions: Dimensions;
        position: Position;
        color: string;
        fontSize: number;
    }[];
}
export interface Digit {
    top: Segment;
    topLeft: Segment;
    topRight: Segment;
    middle: Segment;
    bottomLeft: Segment;
    bottomRight: Segment;
    bottom: Segment;
}
export interface Segment {
    color: string;
    polygon: Point[];
}
export interface Graph {
    axesData: Point[];
    lineSeries: LineSeries[];
    tooltipDelta: number;
    zeroPoint: Position;
}
export interface TriggerData {
    id: number;
    dimensions: Dimensions;
    position: Position;
    color: string;
    lineWidth: number;
    orientation: keyof typeof Orientation;
    locked: boolean;
    delta: number;
    group: string;
    text?: {
        dimensions: Dimensions;
        position: Position;
        color: string;
        backgroundColor: string;
        fontSize: number;
        text: string;
    };
    label?: {
        color: string;
        fontSize?: number;
        label: string;
        position: string;
    };
    icon?: {
        icon: string;
        dimensions: Dimensions;
        position: Position;
    };
}
export interface XYTriggerData {
    id: number;
    color: string;
    lineWidth: number;
    marker: {
        vertical: {
            point1: Position;
            point2: Position;
        };
        horizontal: {
            point1: Position;
            point2: Position;
        };
    };
    circle?: {
        middlePoint: Position;
        diameter: number;
    };
}
export interface LineSeries {
    index: number;
    lineStates: string[];
}
export declare enum ChartType {
    YT = 0,
    XY = 1,
    ArrayBarChart = 2,
    SingleBarChart = 3,
    Digital = 4
}
export declare enum Orientation {
    Vertical = 1,
    Horizontal = 2
}
export declare enum ButtonsEnabled {
    None = 0,
    RunButton = 1,
    PauseButton = 2,
    Splitter1 = 4,
    DisplaywidthTextBox = 8,
    Splitter2 = 16,
    ScrollBackBigButton = 32,
    ScrollBackSmallButton = 64,
    ScrollForwardSmallButton = 128,
    ScrollForwardBigButton = 256,
    Splitter3 = 512,
    GotoTextBox = 1024,
    Splitter4 = 2048,
    UndoButton = 4096,
    RedoButton = 8192,
    Splitter5 = 16384,
    PanToggleButton = 65536,
    PanYToggleButton = 33554432,
    PanXYToggleButton = 131072,
    ZoomToggleButton = 262144,
    ZoomYToggleButton = 67108864,
    ZoomXYToggleButton = 524288,
    UnzoomButton = 1048576,
    ZoomOutMaxButton = 2097152,
    OverviewButton = 4194304
}
export declare enum TimesEnabled {
    None = 0,
    StartTimeLabel = 1,
    Splitter1 = 2,
    EndTimeLabel = 4,
    Splitter2 = 8,
    PositionLabel = 16,
    Splitter3 = 32,
    AbsTimeLabel = 64,
    Splitter4 = 128,
    DateLabel = 256
}
export declare enum LineState {
    None = 0,
    Normal = 1,
    Bold = 2,
    MediumBold = 4,
    Invisible = 8,
    Up = 16,
    Down = 32,
    Dashed = 256,
    DashedLine = 4352,
    MarkerArrowRight = 17408,
    MarkerArrowLeft = 18432,
    ApplyToLine = 4096,
    ApplyToFillArea = 8192,
    ApplyToMark = 16384,
    ApplyToLineNMarkNFill = 28672,
    InvisibleLine = 4104,
    InvisibleMark = 16392,
    InvisibleLineNMark = 20488,
    LineUp = 4112,
    LineDown = 4128,
    MarkUp = 16400,
    MarkDown = 16416,
    LineNMarkUp = 20496,
    LineNMarkDown = 20512,
    NormalLine = 4097,
    NormalLineUp = 4113,
    NormalLineDown = 4129,
    NormalFill = 8193,
    NormalMark = 16385,
    NormalMarkUp = 16401,
    NormalMarkDown = 16417,
    NormalLineNMark = 20481,
    NormalLineNMarkUp = 20497,
    NormalLineNMarkDown = 20513,
    BoldLine = 4098,
    BoldLineUp = 4114,
    BoldLineDown = 4130,
    BoldMark = 16386,
    BoldMarkUp = 16402,
    BoldMarkDown = 16418,
    BoldLineNMark = 20482,
    BoldLineNMarkUp = 20498,
    BoldLineNMarkDown = 20514,
    MediumBoldLine = 4100,
    MediumBoldLineUp = 4116,
    MediumBoldLineDown = 4132,
    MediumBoldMark = 16388,
    MediumBoldMarkUp = 16404,
    MediumBoldMarkDown = 16420,
    MediumBoldLineNMark = 20484,
    MediumBoldLineNMarkUp = 20500,
    MediumBoldLineNMarkDown = 20516,
    Colored = 1099511562240,
    ColoredRed = 1095216660480,
    ColoredGreen = 4278190080,
    ColoredBlue = 16711680,
    Transparent = 280375465082880
}
export interface Menubar {
    visibleToolstrip: boolean;
    visibleTimestrip: boolean;
    enabledButtons: number;
    enabledTimeLabels: number;
    existsHistoricalAcquisition: boolean;
}
export interface Tooltip {
    displayText: string;
    timeoutMS: string;
    chartIndex: number;
    position: Position;
}
export interface ScopeLayout {
    chartType: keyof typeof ChartType;
    dimensions: Dimensions;
    position: Position;
    backgroundColor: string;
    foregroundColor: string;
    gradientBackground?: boolean;
    gradientBackgroundColor?: number;
    showTooltip: boolean;
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    overview?: ScopeLayoutOverview;
    charts: ScopeLayoutChart[] | ScopeLayoutDigitalChart[];
}
export interface ScopeLayoutAxis {
    visible: boolean;
    visibleTicks: boolean;
    dimensions: Dimensions;
    position: Position;
    color: string;
    lineWidth: number;
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    labels?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    }[];
    grid?: {
        visible: boolean;
        ticks: number;
        color: string;
        lineWidth: number;
    };
    subGrid?: {
        visible: boolean;
        ticks: number;
        color: string;
        lineWidth: number;
    };
}
export interface ScopeLayoutChart {
    visible: boolean;
    dimensions: Dimensions;
    preferredSize: Dimensions;
    position: Position;
    backgroundImage?: {
        image: string;
        dimensions: Dimensions;
        position: Position;
    };
    canvas: {
        dimensions: Dimensions;
        position: Position;
        backgroundColor: string;
    };
    gridSize: {
        dimensions: Dimensions;
        position: Position;
    };
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    verticalAxis: ScopeLayoutAxis[];
    horizontalAxis: ScopeLayoutAxis[];
    graphs: ScopeGraphLayout[];
}
export interface ScopeLayoutDigitalChart {
    visible: boolean;
    dimensions: Dimensions;
    position: Position;
    backgroundColor: string;
    foregroundColor: string;
    tiles: {
        name: string;
        dimensions: Dimensions;
        position: Position;
    }[];
}
export interface ScopeLayoutOverview {
    visible: boolean;
    dimensions: Dimensions;
    preferredSize: Dimensions;
    position: Position;
    canvas: {
        dimensions: Dimensions;
        position: Position;
        backgroundColor: string;
    };
    gridSize: {
        dimensions: Dimensions;
        position: Position;
    };
    verticalAxis: ScopeLayoutAxis[];
    horizontalAxis: ScopeLayoutAxis[];
    graphs: ScopeGraphLayout[];
}
export interface ScopeGraphLayout {
    graphName: string;
    graphType: GraphType;
    marks: boolean;
    lineColor: string;
    lineWidth: number;
    markColor: string;
    markWidth: number;
    fillMode: FillMode;
    fillColor: string;
    fillTransparency: number;
    showEndCap: boolean;
    showStartCap: boolean;
    capSize: number;
    capColor: string;
    antialias: boolean;
}
export interface UploadedRecord {
    fileName: string;
    guid: string;
    persist: boolean;
    userName: string;
}
export interface Dimensions {
    width: number;
    height: number;
}
export interface Position {
    x: number;
    y: number;
}
export declare enum MouseMode {
    None = 0,
    ZoomX = 1,
    ZoomY = 2,
    ZoomXY = 3,
    PanX = 4,
    PanY = 5,
    PanXY = 6
}
export declare enum Direction {
    Forward = "Forward",
    Reverse = "Reverse"
}
export declare enum GraphType {
    Line = "Line",
    Stair = "Stair",
    Bar = "Bar",
    MarksOnly = "MarksOnly",
    ExtendedLine = "ExtendedLine",
    RoundShape = "RoundShape"
}
export declare enum FillMode {
    None = "None",
    FromHorizontalZero = "FromHorizontalZero",
    FromBottom = "FromBottom",
    FromTop = "FromTop",
    FromCenter = "FromCenter",
    FromSource = "FromSource",
    FromFirst = "FromFirst"
}
export interface AnalyticsData {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
}

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
