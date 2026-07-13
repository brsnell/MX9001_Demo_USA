import { Server } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import type { Localizable, TcHmiControl, Dictionary } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { OkCancelPrompt } from '../../Helpers/TcHmiPopups/OkCancelPrompt.js';
import { DirectoryBrowser } from '../../Helpers/TcHmiDirectoryBrowser/DirectoryBrowser.js';
import type { PathDisplay } from '../../Helpers/TcHmiDirectoryBrowser/PathDisplay.js';
export declare class SelectRecipePrompt extends OkCancelPrompt<{
    name: string;
    versioned: false;
    recipe: Server.RecipeManagement.Recipe;
} | {
    name: string;
    versioned: true;
    recipe: Dictionary<Server.RecipeManagement.Recipe>;
}> {
    #private;
    protected __parentControl: TcHmiControl.Control;
    protected __recipeBrowser: DirectoryBrowser<Server.RecipeManagement.Recipe | Dictionary<Server.RecipeManagement.Recipe>, Server.RecipeManagement.FolderRecipe>;
    protected __initialPath: string[] | null;
    protected __useVersioning: boolean;
    protected __emptyNotification: HTMLDivElement;
    protected __browserSelectionBehavior: 'recipe' | 'folder';
    /**
     * Creates a new SelectRecipePrompt instance.
     * @param pathDisplay The display to show the currently chosen path in.
     * @param browserSelectionBehavior Controls whether the directory browser is set to the selected recipe or its
     * parent folder when the selection is confirmed.
     * @param parentControl The control which owns the popup.
     */
    constructor(pathDisplay: PathDisplay, browserSelectionBehavior: 'recipe' | 'folder', parentControl: TcHmiControl.Control);
    /**
     * Handler for the PathChanged event of the recipe type browser.
     * @param currentItem The current item.
     * @param path The path to the current item.
     */
    protected __onPathChanged(currentItem: DirectoryBrowser.Item<Server.RecipeManagement.Recipe | Dictionary<Server.RecipeManagement.Recipe>, Server.RecipeManagement.FolderRecipe> | null, _path: string[] | null): void;
    /**
     * Handler for the SelectionChanged event of the recipe type browser.
     * @param selectedItem The selected item, or null if nothing is selected.
     * @param path The current path.
     * @param selectedItemName The name of the selected item, or null if nothing is selected.
     */
    protected __onSelectionChanged(selectedItems: DirectoryBrowser.DescendantItem<Server.RecipeManagement.Recipe | Dictionary<Server.RecipeManagement.Recipe>, Server.RecipeManagement.FolderRecipe>[] | null): void;
    /**
     * Destroys the popup and all its controls.
     * @param force If true, child controls will be removed from the parent control before destruction, to ensure destruction in case of keepAlive === true.
     */
    destroy(force?: boolean): void;
    /**
     * Suspends the RecipeBrowser of this popup.
     */
    suspend(): void;
    /**
     * Resumes the RecipeBrowser of this popoup.
     */
    resume(): void;
    /**
     * Sets the path of the RecipeBrowser to the specified value.
     * @param value The path.
     */
    setPath(value: string[]): Promise<{
        name: string;
        versioned: false;
        recipe: Server.RecipeManagement.Recipe;
    } | {
        name: string;
        versioned: true;
        recipe: Dictionary<Server.RecipeManagement.Recipe>;
    } | null>;
    /**
     * Sets the path of the RecipeBrowser to the root directory.
     */
    reset(): void;
    /**
     * Sets the recipe list to be displayed in the popup.
     * @param rootDirectory The root directory containing the recipes.
     * @param useVersioning Whether recipe versioning is active or not.
     */
    setRecipeList(rootDirectory: Server.RecipeManagement.FolderRecipe | null, useVersioning: boolean): void;
    /**
     * Checks whether the candidate should be treated as a recipe based on the value of __useVersioning.
     * @param candidate The candidate to check.
     */
    protected __isRecipe(candidate: Server.RecipeManagement.FolderRecipe | Server.RecipeManagement.Recipe): candidate is Server.RecipeManagement.Recipe | Dictionary<Server.RecipeManagement.Recipe>;
    /**
     * Performs the action for the OK button, i.e. calling prompt.answer(). Must be implemented by inheriting class.
     */
    protected __ok(): void;
    /**
     * Performs the action for the Cancel button.
     */
    protected __cancel(): void;
    /**
     * Shows the popup and waits for the user to answer the prompt. A Promise is returned that will be resolved with the value the user provides.
     */
    prompt(): Promise<{
        isOk: true;
        value: {
            name: string;
            versioned: false;
            recipe: Server.RecipeManagement.Recipe;
        } | {
            name: string;
            versioned: true;
            recipe: Dictionary<Server.RecipeManagement.Recipe>;
        };
    } | {
        isOk: false;
        value?: void | undefined;
    }>;
    /**
     * Sets localizable texts to the given localization symbols.
     * @param texts A collection of localization symbol expressions.
     */
    setTexts(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts extends OkCancelPrompt.LocalizableTexts {
    headerText: Localizable;
    noRecipesText: Localizable;
}
//# sourceMappingURL=SelectRecipePrompt.d.ts.map