import { Localization } from '../Common/Localization.js';
import { Locale } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
export declare class ControlLocalization extends Localization {
    constructor(tchmiControlLocalization: Locale.ControlLocalization);
    private __localizationReader;
    private __destroyLocalizationWatch;
    getLocalizedText(contentKey: string): string;
    destroy(): void;
}
//# sourceMappingURL=ControlLocalization.d.ts.map