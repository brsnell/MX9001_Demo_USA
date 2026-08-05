import { Controls, FilterInstance, type Locale, LocalStorage, ObjectResolver, Server, TcHmiControl, type Context, type Dictionary, type DimensionUnit, type Filter, type FontFamily, type FontSizeUnit, type FontStyle, type FontWeight, type SelectableRequired, type SortingInfo, type IFunction } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type * as TcHmiDatagrid from '../TcHmiDatagrid/TcHmiDatagrid.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiToggleButton } from '../TcHmiToggleButton/TcHmiToggleButton.esm.js';
import { ColumnsPopup } from './ColumnsPopup.js';
import { DetailsPopup } from './DetailsPopup.js';
import { ConfirmAllPopup } from './ConfirmAllPopup.js';
import { FilterPrompt } from '../Helpers/TcHmiPopups/FilterPrompt.js';
declare class TcHmiEventGrid extends TcHmiControl.Control {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    /** member variables */
    /** Reference to the root dom element of the current control template as jquery object. */
    protected __elementTemplateRoot: JQuery;
    protected __elementGridContainer: JQuery;
    protected __elementMenuBar: JQuery;
    protected __elementTypeToggles: JQuery;
    protected __elementSeverityToggles: JQuery;
    protected __elementOptions: JQuery;
    protected __elementMessageActions: JQuery;
    protected __elementFilterPopup: JQuery;
    protected __elementColumnsPopup: JQuery;
    protected __elementDetailsPopup: JQuery;
    protected __elementConfirmAllPopup: JQuery;
    protected __filter: Filter | null | undefined;
    protected __internalFilter: Filter;
    protected __noPayloadsFilter: FilterInstance<any>;
    protected __serverInterval: number | null | undefined;
    protected __columns: Column[] | undefined;
    protected __internalColumns: Column[];
    protected __allowDetailsPopup: boolean | undefined;
    protected __showMenuBar: boolean | undefined;
    protected __menuBarPosition: 'Top' | 'Bottom' | 'Left' | 'Right' | undefined;
    protected __buttonFontFamily: string | undefined;
    protected __buttonFontSize: number | undefined;
    protected __buttonFontSizeUnit: FontSizeUnit | undefined;
    protected __buttonFontStyle: FontStyle | undefined;
    protected __buttonFontWeight: FontWeight | undefined;
    protected __buttonHeight: number | undefined;
    protected __storage: LocalStorage<{
        filter: Filter;
        columns: Column[];
    }, {
        filter: ReturnType<TcHmiEventGrid['getFilter']>;
        columns: ReturnType<TcHmiEventGrid['getColumns']>;
    }> | undefined;
    protected __datagrid: TcHmiDatagrid.Control;
    protected __sortingInitialized: boolean;
    protected __headerFontFamilyInitialized: boolean;
    protected __headerFontSizeInitialized: boolean;
    protected __headerFontSizeUnitInitialized: boolean;
    protected __headerFontStyleInitialized: boolean;
    protected __headerFontWeightInitialized: boolean;
    protected __gridFontFamilyInitialized: boolean;
    protected __gridFontSizeInitialized: boolean;
    protected __gridFontSizeUnitInitialized: boolean;
    protected __gridFontStyleInitialized: boolean;
    protected __gridFontWeightInitialized: boolean;
    protected __headerHeightInitialized: boolean;
    protected __headerHeightUnitInitialized: boolean;
    protected __rowHeightInitialized: boolean;
    /**  Internal reference to the attribute "data-tchmi-ignore-escape-sequences" */
    protected __ignoreEscapeSequences: boolean | undefined;
    protected __typeToggles: Map<Server.Events.Type, TcHmiToggleButton | undefined>;
    protected __severityToggles: Map<Server.Events.Severity, TcHmiToggleButton | undefined>;
    protected __menuBarButtons: Map<string, TcHmiButton | undefined>;
    protected __buttonTooltips: {
        message: string;
        alarm: string;
        verbose: string;
        info: string;
        warning: string;
        error: string;
        critical: string;
        filter: string;
        columns: string;
        export: string;
        confirm: string;
        confirmAll: string;
    };
    protected __canConfirm: boolean;
    protected __filterPrompt: FilterPrompt | null;
    protected __columnsPopup: ColumnsPopup | null;
    protected __detailsPopup: DetailsPopup | null;
    protected __confirmAllPopup: ConfirmAllPopup | null;
    protected __typesToShow: Map<Server.Events.Type, boolean>;
    protected __severitiesToShow: Map<Server.Events.Severity, boolean>;
    protected __themedIcons: {
        types: Map<Server.Events.Type, Icon | null>;
        severities: Map<Server.Events.Severity, Icon | null>;
    };
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: Locale.LocalizationReader | undefined;
    protected __subscriptionId: number | null;
    protected __availableColumns: Dictionary<TcHmiDatagrid.Column>;
    protected __doubletapStartTime: number;
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
     * Add an element to be localized.
     * @param element The element.
     * @param key The localization key.
     * @param parameters Optional parameters to pass to tchmi_format_string.
     */
    __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    __removeLocalizedElement(element: HTMLElement): void;
    /**
     * Handles the onResized event of the control.
     */
    protected __onResized(): void;
    /**
     * Handles the onThemeDataChanged event.
     */
    protected __onThemeDataChanged(): void;
    /**
     * Creates an event handler for toggle state changed events of type toggle buttons.
     * @param toggleButton The toggle button for which to create an event handler.
     * @param type The type this event handler should control.
     */
    protected __getTypeToggleStateChangedHandler(toggleButton: TcHmiToggleButton, type: Server.Events.Type): () => void;
    /**
     * Creates an event handler for toggle state changed events of severity toggle buttons.
     * @param toggleButton The toggle button for which to create an event handler.
     * @param severity The severity this event handler should control.
     */
    protected __getSeverityToggleStateChangedHandler(toggleButton: TcHmiToggleButton, severity: Server.Events.Severity): () => void;
    /**
     * Handles the selectedItemChanged event of the datagrid.
     */
    protected __onSelectedItemChanged(): void;
    /**
     * Handles the onPropertyChanged event of the datagrid.
     */
    private __onDataGridPropertyChanged;
    /**
     * Handles the onPressedEvent of the filter button.
     */
    protected __onFilterPressed(): void;
    /**
     * Handles the onPressedEvent of the columns button.
     */
    protected __onColumnsPressed(): void;
    /**
     * Handles the onPressedEvent of the export button.
     */
    protected __onExportPressed(): void;
    /**
     * Handles the onPressed event of the confirm button.
     */
    protected __onConfirmPressed(): void;
    /**
     * Handles the onPressed event of the confirmAll button.
     */
    protected __onConfirmAllPressed(): void;
    /**
     * Handles double clicks on table rows.
     */
    protected __onDoubleclick(event: MouseEvent): void;
    /**
     * Handles touchstart events on table rows.
     */
    protected __onTouchStart(event: TouchEvent): void;
    /**
     * Handles scroll events.
     */
    protected __onScroll(event: Event): void;
    /**
     * Shows the details popup
     */
    protected __showDetails(): void;
    /**
     * Processes the currently seleceted datagrid item.
     */
    protected __processSelectedItem(): void;
    /**
     * Updates the subscription getting metadata for the eventgrid.
     * @param unsubscribeOnly Should be set to true when this method is called from __detach. Prevents a new subscription being created after the existing subscription was unsubscribed.
     */
    protected __updateSubscription(unsubscribeOnly?: boolean): void;
    /**
     * Gets a handler that checks the incomming response for errors and executes the specified functions for each command.
     * @param commands The commands that are expected to be present in the response, and their respective handlers.
     */
    protected __getServerResponseHandler(commands: Map<Server.ICommand, (response: Server.ICommand, data: Server.IResultObject) => void>): (data: Server.IResultObject) => void;
    /**
     * Generates the commands and handlers for the numbers in the toggle buttons.
     */
    protected __getToggleButtonCommands(): Map<Server.ICommand<any, any>, (command: Server.ICommand, data: Server.IResultObject) => void>;
    /**
     * Generates the command and handler for the number of confirmable alarms.
     */
    protected __getConfirmAllCommand(): readonly [Server.ICommand<any, any>, (command: Server.ICommand, data: Server.IResultObject) => void];
    /**
     * Gets the filter for all confirmable alarms.
     */
    protected __getConfirmAllFilter(): Filter;
    /**
     * Generates the command and handler for the symbol access level to ConfirmAlarm
     */
    protected __getCanConfirmCommand(): readonly [Server.ICommand<"ConfirmAlarm", Server.ACCESS>, (cmd: Server.ICommand<"ConfirmAlarm", Server.ACCESS>, data: Server.IResultObject) => void];
    /**
     * Gets the themed icon values from the ThemeManager.
     */
    protected __getThemedIcons(): {
        types: Map<Server.Events.Type, Icon | null>;
        severities: Map<Server.Events.Severity, Icon | null>;
    };
    /**
     * Sets the columns value and calls the associated process function.
     * @param valueNew The new value for columns.
     */
    setColumns(valueNew: Column[] | null): void;
    /**
     * The watch callback for the columns object resolver.
     */
    protected __onResolverForColumnsWatchCallback(data: ObjectResolver.IWatchResultObject<Column[]>): void;
    /**
     * Returns the current value of columns.
     */
    getColumns(): Column[] | undefined;
    /**
     * Processes the current columns value.
     */
    protected __processColumns(): void;
    /**
     * Updates the columns of the datagrid.
     * @param columns The names of the column definitions to set.
     */
    protected __updateColumns(columns: Column[], forceRaiseEvent?: boolean): void;
    /**
     * Sets the filter value and calls the associated process function.
     * @param valueNew The new value for filter.
     */
    setFilter(valueNew: Filter | null): void;
    /**
     * The watch callback for the filter object resolver.
     */
    protected __onResolverForFilterWatchCallback(data: ObjectResolver.IWatchResultObject<Filter>): void;
    /**
     * Returns the current value of filter.
     */
    getFilter(): Filter | null | undefined;
    /**
     * Processes the current filter value.
     */
    protected __processFilter(): void;
    /**
     * Updates the internal filter.
     * @param filter The filter to set.
     */
    protected __updateFilter(filter: Filter, forceRaiseEvent?: boolean): void;
    /**
     * Updates the filter of the datagrid.
     */
    protected __updateDatagridFilter(): void;
    /**
     * Sets the sorting value.
     * @param valueNew The new value for sorting
     */
    setSorting(valueNew: SortingInfo[] | null): void;
    /**
     * Returns the current value of sorting.
     */
    getSorting(): SortingInfo[] | undefined;
    /**
     * Sets the serverInterval value and calls the associated process function.
     * @param valueNew The new value for serverInterval.
     */
    setServerInterval(valueNew: number | null): void;
    /**
     * Returns the current value of serverInterval.
     */
    getServerInterval(): number | null | undefined;
    /**
     * Processes the current serverInterval value.
     */
    protected __processServerInterval(): void;
    /**
     * Sets the headerFontFamily value.
     * @param valueNew The new value for headerFontFamily
     */
    setHeaderFontFamily(valueNew: FontFamily | null): void;
    /**
     * Returns the current value of headerFontFamily.
     */
    getHeaderFontFamily(): string | null | undefined;
    /**
     * Sets the headerFontSize value.
     * @param valueNew The new value for headerFontSize
     */
    setHeaderFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of headerFontSize.
     */
    getHeaderFontSize(): number | undefined;
    /**
     * Sets the headerFontSizeUnit value.
     * @param valueNew The new value for headerFontSizeUnit
     */
    setHeaderFontSizeUnit(valueNew: FontSizeUnit | null): void;
    /**
     * Returns the current value of headerFontSizeUnit.
     */
    getHeaderFontSizeUnit(): FontSizeUnit | undefined;
    /**
     * Sets the headerFontStyle value.
     * @param valueNew The new value for headerFontStyle
     */
    setHeaderFontStyle(valueNew: FontStyle | null): void;
    /**
     * Returns the current value of headerFontStyle.
     */
    getHeaderFontStyle(): FontStyle | undefined;
    /**
     * Sets the headerFontWeight value.
     * @param valueNew The new value for headerFontWeight
     */
    setHeaderFontWeight(valueNew: FontWeight | null): void;
    /**
     * Returns the current value of headerFontWeight.
     */
    getHeaderFontWeight(): FontWeight | undefined;
    /**
     * Sets the gridFontFamily value.
     * @param valueNew The new value for gridFontFamily
     */
    setGridFontFamily(valueNew: FontFamily | null): void;
    /**
     * Returns the current value of gridFontFamily.
     */
    getGridFontFamily(): string | null | undefined;
    /**
     * Sets the gridFontSize value.
     * @param valueNew The new value for gridFontSize
     */
    setGridFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of gridFontSize.
     */
    getGridFontSize(): number | undefined;
    /**
     * Sets the gridFontSizeUnit value.
     * @param valueNew The new value for gridFontSizeUnit
     */
    setGridFontSizeUnit(valueNew: FontSizeUnit | null): void;
    /**
     * Returns the current value of gridFontSizeUnit.
     */
    getGridFontSizeUnit(): FontSizeUnit | undefined;
    /**
     * Sets the gridFontStyle value.
     * @param valueNew The new value for gridFontStyle
     */
    setGridFontStyle(valueNew: FontStyle | null): void;
    /**
     * Returns the current value of gridFontStyle.
     */
    getGridFontStyle(): FontStyle | undefined;
    /**
     * Sets the gridFontWeight value.
     * @param valueNew The new value for gridFontWeight
     */
    setGridFontWeight(valueNew: FontWeight | null): void;
    /**
     * Returns the current value of gridFontWeight.
     */
    getGridFontWeight(): FontWeight | undefined;
    /**
     * Sets the headerHeight value.
     * @param valueNew The new value for headerHeight
     */
    setHeaderHeight(valueNew: number | null): void;
    /**
     * Returns the current value of headerHeight.
     */
    getHeaderHeight(): number | undefined;
    /**
     * Sets the headerHeightUnit value.
     * @param valueNew The new value for headerHeightUnit
     */
    setHeaderHeightUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the current value of headerHeightUnit.
     */
    getHeaderHeightUnit(): DimensionUnit | undefined;
    /**
     * Sets the rowHeight value.
     * @param valueNew The new value for rowHeight
     */
    setRowHeight(valueNew: number | null): void;
    /**
     * Returns the current value of rowHeight.
     */
    getRowHeight(): number | undefined;
    /**
     * Returns the current value of rowHeightUnit.
     */
    getRowHeightUnit(): string;
    /**
     * Sets the value of the member variable IgnoreEscapeSequences.
     * @param valueNew The new value for IgnoreEscapeSequences
     */
    setIgnoreEscapeSequences(valueNew: boolean | null | undefined): void;
    /**
     * Returns the current value of IgnoreEscapeSequences.
     * @returns The current value of IgnoreEscapeSequences.
     */
    getIgnoreEscapeSequences(): boolean | undefined;
    /**
     * Sets the allowDetailsPopup value and calls the associated process function.
     * @param valueNew The new value for allowDetailsPopup.
     */
    setAllowDetailsPopup(valueNew: boolean | null): void;
    /**
     * Returns the current value of allowDetailsPopup.
     */
    getAllowDetailsPopup(): boolean | undefined;
    /**
     * Processes the current allowDetailsPopup value.
     */
    protected __processAllowDetailsPopup(): void;
    /**
     * Sets the showMenuBar value and calls the associated process function.
     * @param valueNew The new value for showMenuBar.
     */
    setShowMenuBar(valueNew: boolean | null): void;
    /**
     * Returns the current value of showMenuBar.
     */
    getShowMenuBar(): boolean | undefined;
    /**
     * Processes the current showMenuBar value.
     */
    protected __processShowMenuBar(): void;
    /**
     * Sets the menuBarPosition value and calls the associated process function.
     * @param valueNew The new value for menuBarPosition.
     */
    setMenuBarPosition(valueNew: 'Top' | 'Bottom' | 'Left' | 'Right' | null): void;
    /**
     * Returns the current value of menuBarPosition.
     */
    getMenuBarPosition(): "Left" | "Right" | "Top" | "Bottom" | undefined;
    /**
     * Processes the current menuBarPosition value.
     */
    protected __processMenuBarPosition(): void;
    /**
     * Sets the buttonFontFamily value and calls the associated process function.
     * @param valueNew The new value for buttonFontFamily.
     */
    setButtonFontFamily(valueNew: FontFamily | null): void;
    /**
     * Returns the current value of buttonFontFamily.
     */
    getButtonFontFamily(): string | undefined;
    /**
     * Processes the current buttonFontFamily value.
     */
    protected __processButtonFontFamily(): void;
    /**
     * Sets the buttonFontSize value and calls the associated process function.
     * @param valueNew The new value for buttonFontSize.
     */
    setButtonFontSize(valueNew: number | null): void;
    /**
     * Returns the current value of buttonFontSize.
     */
    getButtonFontSize(): number | undefined;
    /**
     * Processes the current buttonFontSize value.
     */
    protected __processButtonFontSize(): void;
    /**
     * Sets the buttonFontSizeUnit value and calls the associated process function.
     * @param valueNew The new value for buttonFontSizeUnit.
     */
    setButtonFontSizeUnit(valueNew: DimensionUnit | null): void;
    /**
     * Returns the current value of buttonFontSizeUnit.
     */
    getButtonFontSizeUnit(): FontSizeUnit | undefined;
    /**
     * Processes the current buttonFontSizeUnit value.
     */
    protected __processButtonFontSizeUnit(): void;
    /**
     * Sets the buttonFontStyle value and calls the associated process function.
     * @param valueNew The new value for buttonFontStyle.
     */
    setButtonFontStyle(valueNew: FontStyle | null): void;
    /**
     * Returns the current value of buttonFontStyle.
     */
    getButtonFontStyle(): FontStyle | undefined;
    /**
     * Processes the current buttonFontStyle value.
     */
    protected __processButtonFontStyle(): void;
    /**
     * Sets the buttonFontWeight value and calls the associated process function.
     * @param valueNew The new value for buttonFontWeight.
     */
    setButtonFontWeight(valueNew: FontWeight | null): void;
    /**
     * Returns the current value of buttonFontWeight.
     */
    getButtonFontWeight(): FontWeight | undefined;
    /**
     * Processes the current buttonFontWeight value.
     */
    protected __processButtonFontWeight(): void;
    /**
     * Sets the buttonHeight value and calls the associated process function.
     * @param valueNew The new value for buttonHeight.
     */
    setButtonHeight(valueNew: number | null): void;
    /**
     * Returns the current value of buttonHeight.
     */
    getButtonHeight(): number | undefined;
    /**
     * Processes the current buttonHeight value.
     */
    protected __processButtonHeight(): void;
    /**
     * Returns the current value of buttonHeightUnit.
     */
    getButtonHeightUnit(): string;
    /**
     * Flexbox has a bug in all major browsers, where the width of a flexbox column does not grow when its child elements wrap. This method fixes that by setting min-width explicitly.
     */
    protected __fixVerticalMenuBarWidth(): void;
    /**
     * Returns the currently selected event.
     */
    getSelectedEvent(): Server.Events.Event<any, Dictionary<any>> | null;
    /**
     * Confirms the selected alarm.
     * @param ctx Context object which provides context specific data and functions.
     */
    confirmSelectedAlarm(ctx: SelectableRequired<Context, 'success' | 'error'>): void;
    /**
     * Confirm all alarms
     * @param ctx Context object which provides context specific data and functions.
     */
    confirmAllAlarms(ctx: SelectableRequired<Context, 'success' | 'error'>): void;
    /**
     * Processes the current enabled status.
     */
    __processIsEnabled(): void;
    /**
     * Processes the current access config.
     */
    __processAccessConfig(): void;
    /**
     * Hides all popups.
     */
    protected __hideAllPopups(): void;
    /**
     * Sets the internal canConfirm variable. This should not be called from outside the control but needs to be public so the confirmAll popup can call it.
     * @param value Whether the current user has the necessary rights to confirm alarms.
     */
    protected __setCanConfirm(value: boolean): void;
    /**
     * Gets the internal canConfirm variable.
     */
    __getCanConfirm(): boolean;
}
export interface Column {
    columnName: string;
    label?: string;
    width?: number;
    widthUnit?: DimensionUnit | 'factor';
    sortable?: boolean;
    format?: IFunction.IFunction;
}
export interface Icon {
    imagePath: string;
    width: number;
    height: number;
}
export { TcHmiEventGrid as Control };
declare const _TcHmiEventGrid: typeof TcHmiEventGrid;
type tTcHmiEventGrid = TcHmiEventGrid;
type tColumn = Column;
type tIcon = Icon;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiEventGrid: typeof _TcHmiEventGrid;
        type TcHmiEventGrid = tTcHmiEventGrid;
        namespace TcHmiEventGrid {
            type Column = tColumn;
            type Icon = tIcon;
        }
    }
}
//# sourceMappingURL=TcHmiEventGrid.esm.d.ts.map