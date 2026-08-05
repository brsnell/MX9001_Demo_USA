export interface ILog {
    errorEx(message: string, ...optionalParameters: any[]): void;
    warnEx(message: string, ...optionalParameters: any[]): void;
    infoEx(message: string, ...optionalParameters: any[]): void;
}
export interface ITopMostLayer {
    addEx(element: HTMLElement): void;
    removeEx(element: HTMLElement): void;
}
export type ContentTabs = HTMLElement & {
    addTabChangeCallback(callback: (tabName: string) => void): void;
    openTab(tabName: string): void;
    remove(): void;
};
export interface IFrameworkCore {
    log: ILog;
    topMostLayer: ITopMostLayer;
}
export declare function setFrameworkCore(api: IFrameworkCore): void;
export declare function getFrameworkCore(): IFrameworkCore;
export declare const Log: ILog;
export declare const TopMostLayer: ITopMostLayer;
