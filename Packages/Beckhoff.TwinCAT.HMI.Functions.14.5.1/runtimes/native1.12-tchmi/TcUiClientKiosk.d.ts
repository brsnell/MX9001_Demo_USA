import type { Context, SelectableRequired } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Enables or disables kiosk mode via the TcUiClient API (available in TcUiClient).
 * @param ctx An object holding functions for success and error.
 * @param enable Whether to enable or disable kiosk mode.
 */
export declare function TcUiClientKiosk(ctx: SelectableRequired<Context<void>, 'success' | 'error'>, enable: boolean): void;
declare const _TcUiClientKiosk: typeof TcUiClientKiosk;
declare global {
    namespace TcHmi.Functions.Beckhoff {
        let TcUiClientKiosk: typeof _TcUiClientKiosk;
        type TcUiClientKiosk = typeof _TcUiClientKiosk;
    }
}
export {};
//# sourceMappingURL=TcUiClientKiosk.d.ts.map