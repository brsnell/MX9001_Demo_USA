/**
 * Provides functions for managing events.
 * @preserve (Part of the public API)
 */
export declare class EventProvider {
    /**
     * Register a callback to an event name.
     * If the name is a symbol expression the callback will be initially called when
     * there is a symbol with this name.
     * Returns a destroy function to remove the registration.
     * @param name Name of the event.
     * @param callback Callback which will be called
     * @param options Data an event can be given while registration.
     * @param registrationData Additional data and options for the event registration.
     * @param registrationData.ctx Context to be used when resolving %ctx% symbols.
     * @returns Destroy function which cleans up/unregisters
     * @preserve (Part of the public API)
     */
    static register(name: string, callback: (this: void, e: EventProvider.Event, ...args: any[]) => void, options?: any, registrationData?: {
        ctx?: TcHmi.Context<any>;
    }): TcHmi.DestroyFunction;
    /**
     * Calls all registered callbacks related to an event name.
     * @param name Name of the event.
     * @param args Optional parameter(s) which will be transfered to the callbacks
     * @preserve (Part of the public API)
     */
    static raise(name: string, ...args: any[]): void;
    /**
     * Calls the callback of a specific event registration.
     * @param event Event object
     * @param args optional parameter(s) which will be transfered to the callbacks
     * @preserve (Part of the public API)
     */
    static raiseEx(event: EventProvider.IEventEntry, ...args: any[]): void;
    /**
     * Watch for event registrations.
     * @param name Name of the event to watch
     * @param callback Callback which will be called
     */
    static watchEventRegistration(name: string, callback: (data: EventProvider.IEventRegResultObject) => void): TcHmi.DestroyFunction;
    /**
     * Check if event is registered.
     * @param name Name of the event
     */
    static has(name: string): boolean;
    /**
     * Event registration count
     * @param name Name of the event
     */
    static count(name: string): number;
    /**
     * Registers an event on DOM elements and returns an easy to use DestroyFunction to remove the event later.
     * @param element The element or elements to register the event on.
     * @param type The type of event to register.
     * @param listener The callback function that will handle the event.
     * @param options Options for the event registrations. Defaults to { passive: true }.
     */
    static registerDomEvent<K extends keyof HTMLElementEventMap>(element: Element | Document | Window | Iterable<Element>, type: K, listener: (this: EventTarget, event: HTMLElementEventMap[K]) => void, options?: AddEventListenerOptions): TcHmi.DestroyFunction;
    /**
     * Registers an event on DOM elements and returns an easy to use DestroyFunction to remove the event later.
     * @param element The element or elements to register the event on.
     * @param type The type of event to register.
     * @param listener The callback function that will handle the event.
     * @param options Options for the event registrations. Defaults to { passive: true }.
     */
    static registerDomEvent(element: Element | Document | Window | Iterable<Element>, type: string, listener: (this: EventTarget, event: globalThis.Event) => void, options?: AddEventListenerOptions): TcHmi.DestroyFunction;
}
export declare namespace EventProvider {
    enum EventRegWatchType {
        REGISTER = 100,
        DESTROY = 200
    }
    interface Event extends TcHmi.EventContext {
        /** Function to unregister from this event. */
        destroy: TcHmi.DestroyFunction;
    }
    interface IEventEntry {
        /** Id for internal event management. */
        id: number;
        /** Name of the event. */
        name: string;
        callback: (this: void, e: Event, ...data: any[]) => void;
        /** Data an event can be given while registration. */
        options?: any;
        /** Additional data and options for the event registration. */
        registrationData?: {
            /** Context to be used when resolving %ctx% symbols. */
            ctx?: TcHmi.Context<any>;
        };
        /** Function to unregister from an event. */
        destroy: TcHmi.DestroyFunction | null;
    }
    interface IEventRegResultObject extends TcHmi.IResultObject {
        type: EventRegWatchType;
        event: IEventEntry;
    }
}
declare const _register: typeof EventProvider.register;
declare const _raise: typeof EventProvider.raise;
declare const _raiseEx: typeof EventProvider.raiseEx;
declare const _watchEventRegistration: typeof EventProvider.watchEventRegistration;
declare const _has: typeof EventProvider.has;
declare const _count: typeof EventProvider.count;
declare const _registerDomEvent: typeof EventProvider.registerDomEvent;
declare const _EventRegWatchType: typeof EventProvider.EventRegWatchType;
type tEvent = EventProvider.Event;
type tIEventRegResultObject = EventProvider.IEventRegResultObject;
type tIEventEntry = EventProvider.IEventEntry;
type tEventRegWatchType = EventProvider.EventRegWatchType;
declare global {
    namespace TcHmi {
        /**
         * Provides functions for managing events.
         * @preserve (Part of the public API)
         */
        namespace EventProvider {
            const register: typeof _register;
            const raise: typeof _raise;
            const raiseEx: typeof _raiseEx;
            const watchEventRegistration: typeof _watchEventRegistration;
            const has: typeof _has;
            const count: typeof _count;
            const registerDomEvent: typeof _registerDomEvent;
            type Event = tEvent;
            type IEventRegResultObject = tIEventRegResultObject;
            type IEventEntry = tIEventEntry;
            const EventRegWatchType: typeof _EventRegWatchType;
            type EventRegWatchType = tEventRegWatchType;
        }
    }
}
export {};
//# sourceMappingURL=EventProvider.d.ts.map