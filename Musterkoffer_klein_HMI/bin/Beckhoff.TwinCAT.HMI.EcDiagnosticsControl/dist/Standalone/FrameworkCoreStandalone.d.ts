import type { IFrameworkCore } from '../Common/FrameworkCore.js';
export interface DestroyFunction {
    (): void;
}
export declare function addEx(element: HTMLElement): void;
export declare function removeEx(element: HTMLElement): void;
export declare let logLevel: string;
export declare function setLogLevel(level: string): void;
export declare const Prefix: boolean;
export declare function errorEx(message: string, ...optionalParameters: any[]): void;
export declare function warnEx(message: string, ...optionalParameters: any[]): void;
export declare function infoEx(message: string, ...optionalParameters: any[]): void;
export declare const FrameworkCore: IFrameworkCore;
