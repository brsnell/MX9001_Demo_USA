import { Controls, type Locale, ObjectPath, ObjectResolver, Server, TcHmiControl, type DestroyFunction, type Dictionary } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Control as TcHmiButton } from '../TcHmiButton/TcHmiButton.esm.js';
import type { Control as TcHmiCombobox, ListItemGeneric } from '../TcHmiCombobox/TcHmiCombobox.esm.js';
import { SelectRecipePrompt } from '../TcHmiRecipeEdit/Popups/SelectRecipePrompt.js';
import { TextAndButtonsPrompt } from '../Helpers/TcHmiPopups/TextAndButtonsPrompt.js';
declare class TcHmiRecipeSelect extends TcHmiControl.Control {
    #private;
    /**
     * Constructor Creates a new control instance.
     * @param element The element that hosts the control.
     * @param pcElement Precompiled element.
     * @param attrs The control attributes.
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: Controls.ControlAttributeList);
    protected __elementTemplateRoot: HTMLElement;
    protected __elementSelectedRecipe: HTMLElement;
    protected __elementPathBox: HTMLDivElement;
    protected __buttonActivate: TcHmiButton;
    protected __buttonTeach: TcHmiButton;
    protected __selectRecipePrompt: SelectRecipePrompt;
    protected __serverDomain: string | undefined;
    protected __serverInterval: number | undefined;
    protected __allowedRecipeTypes: string[] | null | undefined;
    protected __promptBeforeActivating: boolean | undefined;
    protected __promptBeforeTeaching: boolean | undefined;
    protected __confirmationPrompt: TextAndButtonsPrompt<boolean> | null;
    protected __teachVersionPrompt: TextAndButtonsPrompt<'new' | 'overwrite' | 'cancel'> | null;
    protected __unwatchRecipeList: DestroyFunction | null;
    protected __unwatchRecipeManagementDomain: DestroyFunction | null;
    protected __watchRecipeConditions: {
        extensionLoaded: boolean;
        userHasRights: boolean;
    };
    protected __activeRecipesSubscriptionId: number | null;
    protected __watchActiveRecipeConditions: {
        extensionLoaded: boolean;
        userHasRights: boolean;
    };
    protected __symbolAccessSubscriptionId: number | null;
    protected __symbolAccess: {
        '{0}.Config': Server.ACCESS;
        '{0}.ActivateRecipe': Server.ACCESS;
        '{0}.ReadFromTarget': Server.ACCESS;
        '{0}.UpdateRecipe': Server.ACCESS;
        '{0}.GetActiveRecipes': Server.ACCESS;
    };
    protected __selectedRecipe: ObjectPath | null;
    /**
     * Tells you whether recipe versioning is enabled. This property is changed to a promise when the info is requested
     * from the server, but will be changed back to a boolean when as soon as the server response is received. That way
     * you can access this property synchronously when needed and otherwise safely await it.
     */
    protected __useVersioning: boolean | Promise<boolean>;
    protected __comboboxVersion: TcHmiCombobox<VersionComboboxData, ListItemGeneric<VersionComboboxData>[]>;
    protected __isEnabledLock: {
        locked: boolean;
        unlockValue: boolean | null;
    };
    protected __localizedElements: Map<HTMLElement, {
        key: string;
        parameters?: any[];
    }>;
    protected __localizationReader: Locale.LocalizationReader | undefined;
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
    protected __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
    /**
     * Remove a localized element.
     * @param element The element to remove.
     */
    protected __removeLocalizedElement(element: HTMLElement): void;
    /**
     * Event handler for the click event of the selected recipe element and the path box.
     * @param _event The event to handle.
     */
    protected __onRecipeClick(_event: MouseEvent): Promise<void>;
    /**
     * Selects the recipe with the given name.
     * @param fullName The path and name of the recipe to select.
     */
    protected __select(fullName: string): void;
    /**
     * Unselects the currently selected recipe.
     */
    protected __unselect(): void;
    /**
     * Returns a TextAndButtonsPrompt with a yes and a no button.
     * @param headerKey The localization key for the header text.
     * @param contentKey The localization key for the content text.
     */
    protected __getConfirmationPrompt(headerKey: string, contentKey: string): TextAndButtonsPrompt<boolean>;
    /**
     * Handler for the selectionChanged event of the verion combobox.
     */
    protected __onVersionChanged(): void;
    /**
     * Event handler for the onPressed event of the activate button.
     */
    protected __onActivatePressed(): Promise<void>;
    /**
     * Event handler for the onPressed event of the teach button.
     */
    protected __onTeachPressed(): Promise<void>;
    /**
     * Sets the current value of attribute ServerDomain.
     * @param valueNew
     */
    setServerDomain(valueNew: string | null): void;
    /**
     * Returns the current value of attribute ServerDomain.
     */
    getServerDomain(): string | undefined;
    /**
     * Processes the current value of attribute ServerDomain.
     */
    protected __processServerDomain(): void;
    /**
     * Sets the current value of attribute ServerInterval.
     * @param valueNew
     */
    setServerInterval(valueNew: number | null): void;
    /**
     * Returns the current value of attribute ServerInterval.
     */
    getServerInterval(): number | undefined;
    /**
     * Processes the current value of attribute ServerInterval.
     */
    protected __processServerInterval(): void;
    /**
     * Returns the current value of attribute SelectedRecipeFullName.
     */
    getSelectedRecipeFullName(): string | null;
    /**
     * Returns the current value of attribute SelectedRecipeVersion.
     */
    getSelectedRecipeVersion(): string | null;
    /**
     * Returns the current value of attribute SelectedRecipeName.
     */
    getSelectedRecipeName(): string | null;
    /**
     * Returns the current value of attribute SelectedRecipePath.
     */
    getSelectedRecipePath(): string | null;
    /**
     * Sets the current value of attribute AllowedRecipeTypes.
     * @param valueNew The new value.
     */
    setAllowedRecipeTypes(valueNew: string[] | null): void;
    /**
     * The watch callback for the AllowedRecipeTypes object resolver
     */
    protected __onResolverForAllowedRecipeTypesWatchCallback(data: ObjectResolver.IWatchResultObject<string[]>): void;
    /**
     * Returns the current value of attribute AllowedRecipeTypes.
     */
    getAllowedRecipeTypes(): string[] | null | undefined;
    /**
     * Processes the current value of attribute AllowedRecipeTypes.
     */
    protected __processAllowedRecipeTypes(): void;
    /**
     * Sets the current value of attribute PromptBeforeActivating.
     * @param valueNew
     */
    setPromptBeforeActivating(valueNew: boolean | null): void;
    /**
     * Returns the current value of attribute PromptBeforeActivating.
     */
    getPromptBeforeActivating(): boolean | undefined;
    /**
     * Sets the current value of attribute PromptBeforeTeaching.
     * @param valueNew
     */
    setPromptBeforeTeaching(valueNew: boolean | null): void;
    /**
     * Returns the current value of attribute PromptBeforeTeaching.
     */
    getPromptBeforeTeaching(): boolean | undefined;
    /**
     * Updates the RecipeManagementDomainWatch. Also unwatches the recipe list watch.
     * @param unwatchOnly Set to true to only destroy the existing watch. Defaults to false.
     */
    protected __updateRecipeWatches(unwatchOnly?: boolean): void;
    /**
     * Lock the isEnabled state to false.
     */
    protected __lockIsEnabled(): void;
    /**
     * Unlock the isEnabled state and apply the stored unlockValue.
     */
    protected __unlockIsEnabled(): void;
    /**
     * Sets the value of attribute IsEnabled.
     */
    setIsEnabled(valueNew: boolean | null): void;
    /**
     * Updates the recipe list watch, if the recipe extension is loaded and the user has the necessary access rights.
     * @param extensionLoaded Whether the recipe extension is loaded.
     * @param userHasRights Whether the user has the necessary access rights.
     */
    protected __updateRecipeListWatch(extensionLoaded: boolean | null, userHasRights: boolean | null): void;
    /**
     * Callback function for TcHmi.Server.RecipeManagement.watchRecipeList.
     * @param data The recipes.
     */
    protected __onRecipeListWatch(data: Server.RecipeManagement.IWatchResultObject<Server.RecipeManagement.FolderRecipe>): Promise<void>;
    /**
     * Update the subscription to GetActiveRecipes.
     * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
     */
    protected __updateActiveRecipesSubscription(extensionLoaded: boolean | null, userHasRights: boolean | null, recipeChanged?: boolean): void;
    /**
     * Update the subscription to GetSymbolAccess.
     * @param unsubscribeOnly Only unsubscribe. Should be used on detach.
     */
    protected __updateSymbolAccessSubscription(unsubscribeOnly?: boolean): void;
    /**
     * Forces the buttons operate rights to Deny if the user doesn't have the necessary symbol TcHmi.Access.
     */
    protected __updateButtonAccess(): void;
    /**
     * Expands the given localization key to a full symbol expression.
     * @param key The key to expand.
     */
    protected __expandLocalizationSymbol(key: string): string;
    /**
     * Fills the version combobox with the versions of the current item. Returns the number of versions.
     * @param currentItem The recipe containing the versions to fill the combobox with.
     * @param recipeName The name of the recipe.
     */
    protected __fillVersionCombobox(currentItem: Dictionary<Server.RecipeManagement.Recipe>, recipeName: string): number;
}
interface VersionComboboxData {
    path: string;
}
export { TcHmiRecipeSelect as Control };
declare const _TcHmiRecipeSelect: typeof TcHmiRecipeSelect;
type tTcHmiRecipeSelect = TcHmiRecipeSelect;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiRecipeSelect: typeof _TcHmiRecipeSelect;
        type TcHmiRecipeSelect = tTcHmiRecipeSelect;
    }
}
//# sourceMappingURL=TcHmiRecipeSelect.esm.d.ts.map