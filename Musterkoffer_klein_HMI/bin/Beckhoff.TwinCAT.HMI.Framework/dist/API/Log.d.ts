import { Controls as ControlsLog, type AdditionalInfo as ControlsAdditionalInfo } from './Log.Controls.js';
/**
 * Logging functions
 * @preserve (Part of the public API)
 */
export declare class Log {
    /** When set to true no prefix will be printed with log messages. */
    static Prefix: boolean;
    /** When set to true the configured log level will be ignored and the messages logged anyway. */
    static Force: boolean;
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
     * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static error(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 1 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static errorEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
     * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static warn(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 2 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static warnEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
     * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static info(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 3 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static infoEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
     * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param forceNoPrefix If set the date will be hidden
     * @preserve (Part of the public API)
     */
    static debug(message: string | object | null | undefined, forceNoPrefix?: boolean): void;
    /**
     * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
     * Writes to browser database (IndexedDB) if TCHMI_PERSISTENT_LOG_LEVEL is set to 4 or higher.
     * See "client" page in config page of the server for live overrides.
     * @param message The text which will be printed out in the browsers console and/or written to the browser database.
     * @param optionalParameters Optional parameters
     * @preserve (Part of the public API)
     */
    static debugEx(message: string, ...optionalParameters: any[]): void;
    /**
     * Starts a new timer for performance analysis and stops the current timer
     * Is also responsible for console grouping
     * @param timerName Human readable name of the starting Timer or null to end timer
     */
    static performanceLog(timerName: string | null): void;
    /**
     * Starts a new timer for performance analysis
     * @param timerName Human readable name of the starting Timer
     */
    static performanceLogStart(timerName: string): void;
    /**
     * Stops an existing timer for performance analysis
     * @param timerName Human readable name of the starting Timer
     */
    static performanceLogEnd(timerName: string): void;
    /**
     * Builds a formatted message of hierarchical error objects.
     * @param error Error object to show nicely
     * @preserve (Part of the public API)
     */
    static buildMessage(error: TcHmi.IErrorDetails | undefined): string;
}
export declare namespace Log.Controls {
    let error: typeof _Cerror;
    let warn: typeof _Cwarn;
    let info: typeof _Cinfo;
    let debug: typeof _Cdebug;
    type AdditionalInfo = tCAdditionalInfo;
}
declare const _Prefix: boolean;
declare const _Force: boolean;
declare const _error: typeof Log.error;
declare const _errorEx: typeof Log.errorEx;
declare const _warn: typeof Log.warn;
declare const _warnEx: typeof Log.warnEx;
declare const _info: typeof Log.info;
declare const _infoEx: typeof Log.infoEx;
declare const _debug: typeof Log.debug;
declare const _debugEx: typeof Log.debugEx;
declare const _performanceLog: typeof Log.performanceLog;
declare const _performanceLogStart: typeof Log.performanceLogStart;
declare const _performanceLogEnd: typeof Log.performanceLogEnd;
declare const _buildMessage: typeof Log.buildMessage;
declare const _Cerror: typeof ControlsLog.error;
declare const _Cwarn: typeof ControlsLog.warn;
declare const _Cinfo: typeof ControlsLog.info;
declare const _Cdebug: typeof ControlsLog.debug;
type tCAdditionalInfo = ControlsAdditionalInfo;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for logging.
         * @preserve (Part of the public API)
         */
        namespace Log {
            let Prefix: typeof _Prefix;
            let Force: typeof _Force;
            let error: typeof _error;
            let errorEx: typeof _errorEx;
            let warn: typeof _warn;
            let warnEx: typeof _warnEx;
            let info: typeof _info;
            let infoEx: typeof _infoEx;
            let debug: typeof _debug;
            let debugEx: typeof _debugEx;
            let performanceLog: typeof _performanceLog;
            let performanceLogStart: typeof _performanceLogStart;
            let performanceLogEnd: typeof _performanceLogEnd;
            let buildMessage: typeof _buildMessage;
            /**
             * Logging functions with contextual information for controls.
             * @preserve (Part of the public API)
             */
            namespace Controls {
                const error: typeof _Cerror;
                const warn: typeof _Cwarn;
                const info: typeof _Cinfo;
                const debug: typeof _Cdebug;
                type AdditionalInfo = tCAdditionalInfo;
            }
        }
    }
}
export {};
//# sourceMappingURL=Log.d.ts.map