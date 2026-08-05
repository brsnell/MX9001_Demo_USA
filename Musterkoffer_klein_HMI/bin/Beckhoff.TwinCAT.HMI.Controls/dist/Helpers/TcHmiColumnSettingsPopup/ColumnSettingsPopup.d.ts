import { SettingsPopup } from './SettingsPopup.js';
import type { Control as TcHmiButton } from '../../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiTextbox } from '../../TcHmiTextbox/TcHmiTextbox.esm.js';
import type { Control as TcHmiCheckbox } from '../../TcHmiCheckbox/TcHmiCheckbox.esm.js';
import type * as TcHmiCombobox from '../../TcHmiCombobox/TcHmiCombobox.esm.js';
import { type DestroyFunction, type DimensionUnit, type Localizable, Symbol, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * A decoupled, reusable popup for configuring a set of columns (visibility, order, width and sortability).
 *
 * This is a generic copy of the TcHmiEventGrid ColumnsPopup. It has no dependency on a specific control or on a
 * datagrid: the available columns, texts, css class prefix, localization and the owning control are all provided
 * via the constructor options.
 *
 * What this helper DOES for you:
 * - Renders the popup UI (available/selected lists, order buttons, width/sortable editors, footer buttons).
 * - Watches localization symbol expressions for all DOM texts (built-in, see {@link Options.localization}).
 * - Resets its own view to {@link Options.defaultColumns} when the reset button is pressed and enables/disables
 *   that button automatically based on whether the current configuration differs from the defaults.
 *
 * What YOU (the consumer) must still implement:
 * - Provide the available columns via {@link Options.columns} and (optionally) {@link Options.defaultColumns}.
 * - Apply the result: handle {@link Options.onApply} (or register an OK handler via
 *   {@link SettingsPopup.registerOkButtonHandler}) to read the resulting configuration and update your view
 *   (e.g. your datagrid columns).
 * - Persistence is NOT handled here. If you want to remember the configuration, store the result yourself
 *   (e.g. in a `LocalStorage`) in {@link Options.onApply}, and clear it in {@link Options.onReset}.
 * - Open the popup: call {@link SettingsPopup.update} (to sync the current configuration) and then
 *   {@link Popup.show}.
 *
 * @example
 * ```ts
 * // 1) Keep the current configuration and (optionally) persist it yourself.
 * this.__columns = this.__getDefaultColumns();
 * this.__storage = new LocalStorage(this, { columns: this.__getDefaultColumns() });
 * this.__columns = this.__storage.get('columns') ?? this.__columns;
 *
 * // 2) Build the popup lazily. The onApply/onReset hooks make the required wiring visible right here.
 * const popup = new Helpers.ColumnSettingsPopup(this, {
 *     columns: this.__getColumnSettingsDefinitions(),
 *     defaultColumns: this.__getDefaultColumns(),
 *     texts: { header: '%l%...Header%/l%', ... },
 *     // Apply + persist on OK. The reset view is handled by the popup; you only discard your stored value.
 *     onApply: (columns) => {
 *         this.__columns = columns;
 *         this.__storage?.set('columns', columns);
 *         this.__applyColumnsToDatagrid();
 *     },
 *     onReset: () => this.__storage?.delete('columns'),
 * });
 *
 * // 3) Open it.
 * if (popup.requiresUpdate()) {
 *     popup.update(this.__columns);
 * }
 * popup.show();
 * ```
 *
 * For a complete, real-world usage example see the TcHmiAxesList control (Beckhoff.TwinCAT.HMI.Motion),
 * which uses this helper to configure its datagrid columns and persists the result in a `LocalStorage`.
 */
export declare class ColumnSettingsPopup extends SettingsPopup<ColumnSettingsPopup.Column[]> {
    /**
     * Creates a new ColumnSettingsPopup.
     * @param control The control owning the popup.
     * @param options The configuration of the popup.
     */
    constructor(control: TcHmiControl.Control, options: ColumnSettingsPopup.Options);
    protected __settings: ColumnSettingsPopup.Column[];
    protected __localization: ColumnSettingsPopup.Localization | undefined;
    protected __customColumnPrefix: string;
    protected __classColumn: string;
    protected __classToggle: string;
    protected __elementAvailableColumns: HTMLElement;
    protected __elementSelectedColumns: HTMLElement;
    protected __elementColumnName: HTMLElement;
    protected __elementColumnLabel: HTMLElement;
    protected __upButton: TcHmiButton;
    protected __downButton: TcHmiButton;
    protected __widthTextbox: TcHmiTextbox;
    protected __widthUnitCombobox: TcHmiCombobox.Control<DimensionUnit | 'factor', TcHmiCombobox.ListItemGeneric<DimensionUnit | 'factor'>[]>;
    protected __nameTextbox: TcHmiTextbox;
    protected __labelTextbox: TcHmiTextbox;
    protected __sortableCheckbox: TcHmiCheckbox;
    protected __availableColumns: Array<{
        name: string;
        element: HTMLElement;
    }>;
    protected __selectedColumns: Array<{
        name: string;
        element: HTMLElement;
    }>;
    protected __columns: {
        [name: string]: ColumnSettingsPopup.ColumnDefinition;
    };
    /** The default column configuration used by the reset button, or null if no defaults were provided. */
    protected __defaultColumns: ColumnSettingsPopup.Column[] | null;
    protected __localizedElements: Set<HTMLElement>;
    /** Active symbol watches of the built-in default localization, keyed by the localized element. */
    protected __localizationElementSymbols: Map<HTMLElement, {
        symbol: Symbol<string>;
        destroyWatch: DestroyFunction;
    }>;
    protected __activeElement: HTMLElement | null;
    protected __activeColumn: ColumnSettingsPopup.Column | null;
    /**
     * Creates the built-in default localization. It treats a text as a localization symbol expression and keeps the
     * elements text content in sync with the active language. Plain literal texts are set as is.
     */
    protected __createDefaultLocalization(): ColumnSettingsPopup.Localization;
    /**
     * Applies a text to an element. If a localization callback is provided, the text is treated as a localization
     * key, otherwise it is set as plain text content.
     * @param element The element to apply the text to.
     * @param text The text or localization key.
     * @param localize Whether the text should be localized (if a localization callback is provided).
     */
    protected __applyText(element: HTMLElement, text: string, localize: boolean): void;
    /**
     * Creates a property label span.
     * @param text The text or localization key of the label.
     */
    protected __createPropertyLabel(text: string): HTMLSpanElement;
    /**
     * Destroys the popup and all its controls. The footer and content controls are destroyed automatically by the
     * base popup; this override only cleans up the localization watches.
     */
    destroy(force?: boolean): void;
    /**
     * Updates the column configuration.
     * @param columns The current column configuration.
     * @param resetable Whether the reset button should be enabled or disabled. If omitted and default columns were
     * provided, the reset button is enabled automatically when the given columns differ from the defaults.
     */
    update(columns: ColumnSettingsPopup.Column[], resetable?: boolean): void;
    /**
     * Handles clicks inside the availableColumns element.
     * @param event The click event.
     */
    protected __onAvailableColumnClick(event: MouseEvent): void;
    /**
     * Handles clicks inside the selectedColumns element.
     * @param event The click event.
     */
    protected __onSelectedColumnClick(event: MouseEvent): void;
    /**
     * Handles the pressed event of the up button.
     */
    protected __onUpPressed(): void;
    /**
     * Handles the pressed event of the down button.
     */
    protected __onDownPressed(): void;
    /**
     * Handles the textChanged event of the width textbox
     */
    protected __onWidthChanged(): void;
    /**
     * Handles the selectionChanged event of the width unit combobox
     */
    protected __onWidthUnitChanged(): void;
    /**
     * Handles the textChanged event of the name textbox
     */
    protected __onNameChanged(): void;
    /**
     * Handles the textChanged event of the label textbox
     */
    protected __onLabelChanged(): void;
    /**
     * Handles the toggleStateChanged event of the sortable checkbox
     */
    protected __onSortableChanged(): void;
    /**
     * Marks a column element as active.
     * @param element The element to activate.
     */
    protected __activateColumn(element: HTMLElement | null): void;
    /**
     * Updates the select, deselect, up, down buttons according to the currently active column.
     */
    protected __updateButtons(): void;
    /**
     * Updates the column properties controls according to the currently active column.
     */
    protected __updateColumnProperties(): void;
    /**
     * Creates an element representing a column.
     * @param label The label of the column.
     * @param localize Whether the label should be localized (if a localization callback is provided).
     */
    protected __createColumnDiv(label: string, localize?: boolean): HTMLDivElement;
}
export declare namespace ColumnSettingsPopup {
    /**
     * A configured column.
     */
    interface Column {
        columnName: string;
        label?: string;
        width?: number;
        widthUnit?: DimensionUnit | 'factor';
        sortable?: boolean;
    }
    /**
     * The definition of a column that can be selected.
     */
    interface ColumnDefinition {
        /** The (technical) name of the column. */
        name: string;
        /** The label or localization key of the column. */
        label: string;
        /** Used to order the available columns. */
        order: number;
        /** Whether the column allows toggling the sortable property. */
        allowSortable: boolean;
        /**
         * Whether this definition is the template for custom columns. A custom column can be added multiple times
         * and allows editing its name and label. Its {@link ColumnDefinition.name} must equal the custom column prefix.
         */
        custom?: boolean;
    }
    /**
     * Callbacks used to localize the DOM text of the popup. If not provided, a built-in default is used that treats
     * the texts as localization symbol expressions (e.g. '%l%...%/l%') and watches them, while plain literal texts
     * are set as is.
     */
    interface Localization {
        /** Registers an element to be localized with the given key. */
        add: (element: HTMLElement, key: string, ...parameters: any[]) => void;
        /** Removes a previously registered element. */
        remove: (element: HTMLElement) => void;
    }
    /**
     * The texts of the popup.
     *
     * The label texts are applied to plain DOM elements: if a {@link Localization} callback is provided they are
     * used as localization keys, otherwise they are used as literal text. The tooltip texts are applied to controls
     * and may therefore be any {@link Localizable} expression.
     */
    interface Texts {
        header?: string;
        widthLabel?: string;
        nameLabel?: string;
        labelLabel?: string;
        sortableLabel?: string;
        columnUpTooltip?: Localizable;
        columnDownTooltip?: Localizable;
    }
    /**
     * The configuration of a {@link ColumnSettingsPopup}.
     */
    interface Options {
        /** The columns that can be selected. */
        columns: ColumnDefinition[];
        /**
         * The default column configuration. When provided, the reset button resets the popup view to these columns
         * and is automatically enabled whenever the current configuration differs from them.
         */
        defaultColumns?: Column[];
        /**
         * Called when the user confirms the popup with the OK button, with the resulting column configuration.
         * This is the place to apply the configuration (e.g. to a datagrid) and to persist it (e.g. in a
         * `LocalStorage`). Convenience shortcut for {@link SettingsPopup.registerOkButtonHandler}.
         */
        onApply?: (columns: Column[]) => void;
        /**
         * Called when the user presses the reset button. The popup already resets its own view to
         * {@link Options.defaultColumns}; use this to discard any persisted configuration (e.g. delete the stored
         * value). Convenience shortcut for {@link SettingsPopup.registerResetButtonHandler}.
         */
        onReset?: () => void;
        /** The localizable texts of the footer buttons. */
        buttonTexts?: Partial<SettingsPopup.ButtonTexts>;
        /** The localizable texts of the popup. */
        texts?: Texts;
        /**
         * Callbacks used to localize the DOM text of the popup. If omitted, a built-in default localization is used
         * that watches localization symbol expressions and sets plain literal texts as is.
         */
        localization?: Localization;
        /** The prefix that marks a column as a custom column. Defaults to 'params::'. */
        customColumnPrefix?: string;
        /** The css class prefix used for the generated elements. Defaults to 'tchmi-column-settings-popup'. */
        cssPrefix?: string;
    }
}
//# sourceMappingURL=ColumnSettingsPopup.d.ts.map