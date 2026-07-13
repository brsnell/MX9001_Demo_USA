import { type Localizable, type FontSizeUnit, type TcHmiControl } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
import { Popup } from '../Helpers/TcHmiPopups/Popup.js';
import { TextAndButtonsPrompt } from '../Helpers/TcHmiPopups/TextAndButtonsPrompt.js';
export declare abstract class UserManagementPopup extends Popup<void> {
    /**
     * Creates a new Popup.
     * @param element The HTML element that hosts the popup.
     * @param parentControl The control owning the popup.
     */
    constructor(parentControl?: TcHmiControl.Control | null);
    /** Localized Texts */
    protected __localizedTexts: Partial<LocalizableTexts> | null;
    /**font size of the displayed text*/
    protected __textFontSize: number | null;
    /**font size unit of the displayed text*/
    protected __textFontSizeUnit: FontSizeUnit;
    /**font size of the displayed drop down text*/
    protected __dropDownFontSize: number | null;
    /**font size unit of the displayed drop down text*/
    protected __dropDownFontSizeUnit: FontSizeUnit;
    /**headline font size */
    protected __headlineFontSize: number | null;
    /**headline font size unit */
    protected __headlineFontSizeUnit: FontSizeUnit;
    /**sub headline font size */
    protected __subHeadlineFontSize: number | null;
    /** subheadline font size unit */
    protected __subHeadlineFontSizeUnit: FontSizeUnit;
    /** The domain used for the api function */
    protected __selectedDomain: string | undefined;
    /** Feedback Popup */
    protected __feedbackPrompt: TextAndButtonsPrompt<undefined> | null;
    /**
     * Sets the domain of the usermanagement extentison.
     */
    setDomain(domain: string | undefined): void;
    /**
     * Get all font sizes from the parent control and set them to the elements.
     */
    protected __updateFontSizes(): void;
    /**
     * DEPRECATED please use the setters of the specific properties.
     */
    refreshParentControlResources(): void;
    setTextFontSize(valueNew: number | null): void;
    setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
    setDropDownFontSize(valueNew: number | null): void;
    setDropDownFontSizeUnit(valueNew: FontSizeUnit | null): void;
    setHeadlineFontSize(valueNew: number | null): void;
    setHeadlineFontSizeUnit(valueNew: FontSizeUnit | null): void;
    setSubHeadlineFontSize(valueNew: number | null): void;
    setSubHeadlineFontSizeUnit(valueNew: FontSizeUnit | null): void;
    /**
     * Create a feedback prompt
     **/
    protected __createFeedbackPrompt(): TextAndButtonsPrompt<undefined>;
    /**
     * Sets texts which can either be localizable or static.
     */
    setTexts(texts: Partial<LocalizableTexts>): void;
}
export interface LocalizableTexts {
    headerText: Localizable;
    feedbackPromptButtonOk: Localizable;
}
//# sourceMappingURL=UserManagementPopup.d.ts.map