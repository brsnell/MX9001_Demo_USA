// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************

declare class TcHmiPolyline extends TcHmi.Controls.Beckhoff.TcHmiPolygon {
    #private;
}
export { TcHmiPolyline as Control };
declare const _TcHmiPolyline: typeof TcHmiPolyline;
type tTcHmiPolyline = TcHmiPolyline;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiPolyline: typeof _TcHmiPolyline;
        type TcHmiPolyline = tTcHmiPolyline;
    }
}
