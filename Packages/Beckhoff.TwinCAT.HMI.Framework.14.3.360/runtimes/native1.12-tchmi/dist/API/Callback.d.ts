import { CallbackCollection as Collection, AsyncCallbackCollection as AsyncCollection } from './CallbackCollection.js';
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */
export declare function callSafe<T extends object | null, A extends any[]>(callback: ICallback<T, A> | null | undefined, thisArg: T, ...args: A): Error | undefined;
/**
 * Calls a callback and catches exceptions to return them as value of type {Error} for further processing and prints it to console for proper call stack.
 * @param callback function to call
 * @param thisArg the this pointer in the function call
 * @param args parameters for the function call
 * @returns undefined or the Error in case of an exception
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 * @preserve (Part of the public API)
 */
export declare function callSafeEx<T extends object | null, A extends any[]>(callback: ICallback<T, A> | null | undefined, thisArg: T, ...args: A): Error | undefined;
/**
 * @template T this for the call
 * @template A Array of types for all parameter for the function
 */
export interface ICallback<T extends object | null, A extends any[]> {
    (this: T, ...args: A): void;
}
export { Collection, AsyncCollection };
declare const _callSafe: typeof callSafe;
declare const _callSafeEx: typeof callSafeEx;
declare const _Collection: typeof Collection;
declare const _AsyncCollection: typeof AsyncCollection;
type tICallback<T extends object | null, A extends any[]> = ICallback<T, A>;
type tCollection<C extends (...args: any[]) => any> = Collection<C>;
type tAsyncCollection<C extends (...args: any[]) => any> = AsyncCollection<C>;
declare global {
    namespace TcHmi {
        /**
         * Provides resources for safely calling callback functions.
         */
        namespace Callback {
            let callSafe: typeof _callSafe;
            let callSafeEx: typeof _callSafeEx;
            type ICallback<T extends object | null, A extends any[]> = tICallback<T, A>;
            let Collection: typeof _Collection;
            let AsyncCollection: typeof _AsyncCollection;
            type Collection<C extends (...args: any[]) => any> = tCollection<C>;
            type AsyncCollection<C extends (...args: any[]) => any> = tAsyncCollection<C>;
        }
    }
}
//# sourceMappingURL=Callback.d.ts.map