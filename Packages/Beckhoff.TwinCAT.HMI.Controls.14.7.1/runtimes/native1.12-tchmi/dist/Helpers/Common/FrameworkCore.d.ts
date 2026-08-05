export interface ILog {
    error(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
    errorEx(message: string, ...optionalParameters: any[]): void;
    warn(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
    warnEx(message: string, ...optionalParameters: any[]): void;
    info(message: string | number | boolean | object | null | undefined, forceNoPrefix?: boolean): void;
    infoEx(message: string, ...optionalParameters: any[]): void;
}
export interface ITopMostLayer {
    addEx(element: HTMLElement): void;
    removeEx(element: HTMLElement): void;
}
export interface IFrameworkCore {
    log: ILog;
    topMostLayer: ITopMostLayer;
}
export declare function setFrameworkCore(api: IFrameworkCore | undefined): void;
export declare function getFrameworkCore(): IFrameworkCore;
export declare const Log: ILog;
export declare const TopMostLayer: ITopMostLayer;
//# sourceMappingURL=FrameworkCore.d.ts.map