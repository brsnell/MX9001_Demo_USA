import { Callback } from 'Beckhoff.TwinCAT.HMI.Framework/index.esm.js';
/**
 * Class that buffers a value until it needs to be processed.
 */
export declare class ValueBuffer<T> {
    protected __processingPoint: InputProcessingPoint;
    protected __setter: (valueNew: T) => void;
    protected __value: T | undefined;
    protected __onValueSet: Callback.Collection<(value: T) => void>;
    onValueSet: Readonly<{
        add: (callback: (value: T) => void) => () => void;
        remove: (callback: (value: T) => void) => void;
    }>;
    /**
     * Creates a new ValueBuffer.
     * @param processingPoint When to process the value.
     * @param setter The setter to call when the value should be processed.
     */
    constructor(processingPoint: InputProcessingPoint, setter: (valueNew: T) => void);
    /**
     * When to process the value.
     * @param processingPoint When to process the value.
     */
    set processingPoint(processingPoint: InputProcessingPoint);
    /**
     * When to process the value.
     */
    get processingPoint(): InputProcessingPoint;
    /**
     * Sets a new value to be buffered. If processingPoint is set to Change it will be immediately processed.
     * @param value The value to be buffered.
     */
    setValue(value: T): void;
    /**
     * Gets the currently buffered value.
     * @returns
     */
    getValue(): T | undefined;
    /**
     * Clears the currently buffered value by resetting it to undefined.
     *
     * This must be called by the owning control when an external value is applied (e.g. from a binding/symbol update),
     * so that a subsequent interactionFinished() call does not write back the stale buffered value from a previous
     * user interaction.
     *
     * Without this, the following sequence causes data corruption when processingPoint is InteractionFinished:
     *   1. User edits value on array index 1 → buffer stores the user's input
     *   2. interactionFinished() fires → value written to PLC at index 1 (correct)
     *   3. Array index changes to 0 → binding pushes new value via setValue() → control displays it,
     *      but the buffer still holds the value from step 1
     *   4. User focuses and immediately cancels → interactionFinished() fires again →
     *      stale buffer value is written to PLC at index 0 (WRONG)
     *
     * Only call this when the external value is actually accepted (i.e. after lock, init, and validity checks).
     * Do NOT clear the buffer when the external setValue is rejected (locked during interaction, invalid value
     * filtered by ignoreInvalidValues, etc.) — the user's in-progress input must be preserved.
     */
    clearValue(): void;
    /**
     * Tells the buffer that the user interaction is finished. If processingPoint is set to InteractionFinished, the
     * value will then be processed.
     */
    interactionFinished(): void;
}
export declare enum InputProcessingPoint {
    Change = 0,
    InteractionFinished = 1
}
declare const _ValueBuffer: typeof ValueBuffer;
type tValueBuffer<T> = ValueBuffer<T>;
declare const _InputProcessingPoint: typeof InputProcessingPoint;
type tInputProcessingPoint = InputProcessingPoint;
declare global {
    namespace TcHmi.Controls.Helpers {
        let ValueBuffer: typeof _ValueBuffer;
        type ValueBuffer<T> = tValueBuffer<T>;
        let InputProcessingPoint: typeof _InputProcessingPoint;
        type InputProcessingPoint = tInputProcessingPoint;
    }
}
export {};
//# sourceMappingURL=ValueBuffer.d.ts.map