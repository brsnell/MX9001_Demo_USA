import type { TcHmiScopeControl } from './TcHmiScopeControl.esm.js';
import { type Direction, type ScopeConfig, MouseMode } from './Types.js';
export declare class ServerSymbols {
    #private;
    /**
     * Creates a new ServerSymbol helper class.
     * @param scopeControl The parent scope control.
     */
    constructor(scopeControl: TcHmiScopeControl);
    protected __parentControl: TcHmiScopeControl;
    protected __fileUploader: TcHmi.FileUploader | null;
    /**
     * Called the setChartSize method from the scope extension.
     */
    setChartSize(setLoadingSpinner: boolean): void;
    /**
     * Called the startRecord method from the scope extension.
     */
    startRecord(recordTime?: number): void;
    /**
     * Called the stopRecord method from the scope extension.
     */
    stopRecord(): void;
    /**
     * Called the startDisplay method from the scope extension.
     */
    startDisplay(): void;
    /**
     * Called the stopDisplay method from the scope extension.
     */
    stopDisplay(): void;
    /**
     * Called the startRecord method from the scope extension.
     */
    __getDataAsRequest(): void;
    /**
     * Called the setDisplayWidth method from the scope extension.
     */
    setDisplayWidth(displayWidth: string): void;
    /**
     * Called the scroll method from the scope extension.
     */
    scroll(direction: Direction): void;
    /**
     * Called the scrollBig method from the scope extension.
     */
    scrollBig(direction: Direction): void;
    /**
     * Called the goTo method from the scope extension.
     */
    goTo(goTo: string): void;
    /**
     * Called the undo method from the scope extension.
     */
    undo(): void;
    /**
     * Called the undo method from the scope extension.
     */
    redo(): void;
    /**
     * Called the zoomToDefault method from the scope extension.
     */
    zoomToDefault(): void;
    /**
     * Called the zoomOutMax method from the scope extension.
     */
    zoomOutMax(): void;
    /**
     * Called the setOverviewMode method from the scope extension.
     */
    setOverviewMode(): void;
    /**
     * Set the mouseMode for interactions.
     */
    setMouseMode(valueNew: MouseMode | keyof typeof MouseMode): void;
    /**
     * Called the changeChannelState method from the scope extension.
     */
    changeChannelState(id: string, state: boolean): void;
    /**
     * Is called from onPressed for download the scope record file.
     */
    __downloadScopeRecord(element?: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
    } | null): void;
    /**
     * Called the uploadRecord method from the scope extension.
     */
    uploadRecord(file: File, persist: boolean, chunkSize: number): void;
    /**
     * Is raised if the requestDisplay callback is raised.
     */
    __uploadCallback(result: TcHmi.FileUploader.ProgressResult): void;
    /**
     * Called the saveCurrentRecord method from the scope extension.
     */
    saveCurrentRecord(): Promise<void>;
    /**
     * Called the DeleteScopeRecord method from the scope extension.
     */
    deleteScopeUpload(elements: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }[]): void;
    /**
     * Called the DeleteScopeRecord method from the scope extension.
     */
    changePersist(element: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the GetChartList method from the scope extension.
     */
    getChartList(element: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the download function.
     */
    download(element: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
    }): void;
    /**
     * Called the OpenConnectionToFile method from the scope extension.
     */
    openConnectionToFile(element: {
        userName: string;
        extensionName: string;
        fileName: string;
        guid: string;
        persist: boolean;
        chartName: string;
    }): void;
    /**
     * Called the closeConnection method from the scope extension.
     */
    detachFromScopeRecord(): void;
    /**
     * Called the closeConnection method from the scope extension.
     */
    closeConnection(scopeConfig: ScopeConfig | undefined): void;
    /**
     * Called the getAnalyticsData method from the scope extension.
     */
    getAnalyticsData(): void;
    /**
     * Called the SetAnalyticsRecord method from the scope extension.
     */
    setAnalyticsRecord(recordName: string, recordId: number, startTime: string, endTime: string): void;
}
//# sourceMappingURL=ServerSymbols.d.ts.map