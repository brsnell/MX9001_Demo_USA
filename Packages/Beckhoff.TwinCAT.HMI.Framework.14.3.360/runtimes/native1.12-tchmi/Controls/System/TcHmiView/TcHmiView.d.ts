// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************

declare class TcHmiView extends TcHmi.Controls.System.TcHmiPartial {
    #private;
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    /**
     * Shows/hides the control depending of the current 'observe' right
     */
    __processAccessConfig(): void;
}
export { TcHmiView as Control };
declare const _TcHmiView: typeof TcHmiView;
type tTcHmiView = TcHmiView;
declare global {
    namespace TcHmi.Controls.System {
        const TcHmiView: typeof _TcHmiView;
        type TcHmiView = tTcHmiView;
    }
}
