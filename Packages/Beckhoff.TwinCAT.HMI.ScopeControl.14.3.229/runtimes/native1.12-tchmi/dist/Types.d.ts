export interface ScopeEventPayload {
    sessionId: string;
    socketId: number;
    message: string;
    severity: TcHmi.Server.Events.Severity;
}
export interface ConfigEventPayload {
    configName: string;
    oldConfigName: string | null;
    configType: ConfigType;
    severity: TcHmi.Server.Events.Severity;
}
export declare enum ConfigType {
    Add = 0,
    Change = 1,
    Rename = 2,
    Delete = 3
}
export interface ScopeConfig {
    name: string;
    chart: string;
}
export declare enum ChartColorSource {
    ScopeConfig = 0,
    Theme = 1
}
export declare enum TriggerWindowPosition {
    Left = 0,
    Right = 1,
    Top = 2,
    Bottom = 3
}
export interface TriggerWindow {
    id: string;
    count: number;
    triggerGroup: string;
    releaseTime: string;
    comment?: string;
}
export interface LegendElement {
    id: string;
    text: string;
    enabled: boolean;
    color: string;
}
export interface Point {
    x: number;
    y: number;
}
export interface Window {
    xAxisStart: string;
    xAxisEnd: string;
    xAxisPosition: string;
    displayWidth: string;
    startDisplayTime: string;
    scopeState: string;
    liveState: boolean;
    undo: boolean;
    redo: boolean;
    overviewRect?: {
        dimensions: Dimensions;
        position: Position;
    };
}
export interface ActualWindow {
    xAxisStart: string;
    xAxisEnd: string;
    displayWidth: string;
    scopeState: string;
    liveState: boolean;
    undo: boolean;
    redo: boolean;
}
export interface GetDataDatatype {
    overview?: Chart;
    charts: Chart[] | DigitalChart[];
}
export interface Chart {
    graphs: TcHmi.Dictionary<Graph>;
    trigger: TriggerData[];
    xyTrigger: XYTriggerData[];
}
export interface DigitalChart {
    tiles: Tile[];
}
export interface Tile {
    digitalView: {
        labels: {
            name: string;
            value: string;
            visible: boolean;
            dimensions: Dimensions;
            position: Position;
            color: string;
            fontSize: number;
        }[];
        digits: Digit[];
        minus?: Segment;
        separator?: {
            color: string;
            polygon: Point[];
            seperatorType: string;
        };
    };
    labels: {
        name: string;
        value: string;
        visible: boolean;
        dimensions: Dimensions;
        position: Position;
        color: string;
        fontSize: number;
    }[];
}
export interface Digit {
    top: Segment;
    topLeft: Segment;
    topRight: Segment;
    middle: Segment;
    bottomLeft: Segment;
    bottomRight: Segment;
    bottom: Segment;
}
export interface Segment {
    color: string;
    polygon: Point[];
}
export interface Graph {
    axesData: Point[];
    lineSeries: LineSeries[];
    tooltipDelta: number;
    zeroPoint: Position;
}
export interface TriggerData {
    id: number;
    dimensions: Dimensions;
    position: Position;
    color: string;
    lineWidth: number;
    orientation: keyof typeof Orientation;
    locked: boolean;
    delta: number;
    group: string;
    text?: {
        dimensions: Dimensions;
        position: Position;
        color: string;
        backgroundColor: string;
        fontSize: number;
        text: string;
    };
    label?: {
        color: string;
        fontSize?: number;
        label: string;
        position: string;
    };
    icon?: {
        icon: string;
        dimensions: Dimensions;
        position: Position;
    };
}
export interface XYTriggerData {
    id: number;
    color: string;
    lineWidth: number;
    marker: {
        vertical: {
            point1: Position;
            point2: Position;
        };
        horizontal: {
            point1: Position;
            point2: Position;
        };
    };
    circle?: {
        middlePoint: Position;
        diameter: number;
    };
}
export interface LineSeries {
    index: number;
    lineStates: string[];
}
export declare enum ChartType {
    YT = 0,
    XY = 1,
    ArrayBarChart = 2,
    SingleBarChart = 3,
    Digital = 4
}
export declare enum Orientation {
    Vertical = 1,
    Horizontal = 2
}
export declare enum ButtonsEnabled {
    None = 0,
    RunButton = 1,
    PauseButton = 2,
    Splitter1 = 4,
    DisplaywidthTextBox = 8,
    Splitter2 = 16,
    ScrollBackBigButton = 32,
    ScrollBackSmallButton = 64,
    ScrollForwardSmallButton = 128,
    ScrollForwardBigButton = 256,
    Splitter3 = 512,
    GotoTextBox = 1024,
    Splitter4 = 2048,
    UndoButton = 4096,
    RedoButton = 8192,
    Splitter5 = 16384,
    PanToggleButton = 65536,
    PanYToggleButton = 33554432,
    PanXYToggleButton = 131072,
    ZoomToggleButton = 262144,
    ZoomYToggleButton = 67108864,
    ZoomXYToggleButton = 524288,
    UnzoomButton = 1048576,
    ZoomOutMaxButton = 2097152,
    OverviewButton = 4194304
}
export declare enum TimesEnabled {
    None = 0,
    StartTimeLabel = 1,
    Splitter1 = 2,
    EndTimeLabel = 4,
    Splitter2 = 8,
    PositionLabel = 16,
    Splitter3 = 32,
    AbsTimeLabel = 64,
    Splitter4 = 128,
    DateLabel = 256
}
export declare enum LineState {
    None = 0,
    Normal = 1,
    Bold = 2,
    MediumBold = 4,
    Invisible = 8,
    Up = 16,
    Down = 32,
    Dashed = 256,
    DashedLine = 4352,
    MarkerArrowRight = 17408,
    MarkerArrowLeft = 18432,
    ApplyToLine = 4096,
    ApplyToFillArea = 8192,
    ApplyToMark = 16384,
    ApplyToLineNMarkNFill = 28672,
    InvisibleLine = 4104,
    InvisibleMark = 16392,
    InvisibleLineNMark = 20488,
    LineUp = 4112,
    LineDown = 4128,
    MarkUp = 16400,
    MarkDown = 16416,
    LineNMarkUp = 20496,
    LineNMarkDown = 20512,
    NormalLine = 4097,
    NormalLineUp = 4113,
    NormalLineDown = 4129,
    NormalFill = 8193,
    NormalMark = 16385,
    NormalMarkUp = 16401,
    NormalMarkDown = 16417,
    NormalLineNMark = 20481,
    NormalLineNMarkUp = 20497,
    NormalLineNMarkDown = 20513,
    BoldLine = 4098,
    BoldLineUp = 4114,
    BoldLineDown = 4130,
    BoldMark = 16386,
    BoldMarkUp = 16402,
    BoldMarkDown = 16418,
    BoldLineNMark = 20482,
    BoldLineNMarkUp = 20498,
    BoldLineNMarkDown = 20514,
    MediumBoldLine = 4100,
    MediumBoldLineUp = 4116,
    MediumBoldLineDown = 4132,
    MediumBoldMark = 16388,
    MediumBoldMarkUp = 16404,
    MediumBoldMarkDown = 16420,
    MediumBoldLineNMark = 20484,
    MediumBoldLineNMarkUp = 20500,
    MediumBoldLineNMarkDown = 20516,
    Colored = 1099511562240,
    ColoredRed = 1095216660480,
    ColoredGreen = 4278190080,
    ColoredBlue = 16711680,
    Transparent = 280375465082880
}
export interface Menubar {
    visibleToolstrip: boolean;
    visibleTimestrip: boolean;
    enabledButtons: number;
    enabledTimeLabels: number;
    existsHistoricalAcquisition: boolean;
}
export interface Tooltip {
    displayText: string;
    timeoutMS: string;
    chartIndex: number;
    position: Position;
}
export interface ScopeLayout {
    chartType: keyof typeof ChartType;
    dimensions: Dimensions;
    position: Position;
    backgroundColor: string;
    foregroundColor: string;
    gradientBackground?: boolean;
    gradientBackgroundColor?: number;
    showTooltip: boolean;
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    overview?: ScopeLayoutOverview;
    charts: ScopeLayoutChart[] | ScopeLayoutDigitalChart[];
}
export interface ScopeLayoutAxis {
    visible: boolean;
    visibleTicks: boolean;
    dimensions: Dimensions;
    position: Position;
    color: string;
    lineWidth: number;
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    labels?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    }[];
    grid?: {
        visible: boolean;
        ticks: number;
        color: string;
        lineWidth: number;
    };
    subGrid?: {
        visible: boolean;
        ticks: number;
        color: string;
        lineWidth: number;
    };
}
export interface ScopeLayoutChart {
    visible: boolean;
    dimensions: Dimensions;
    preferredSize: Dimensions;
    position: Position;
    backgroundImage?: {
        image: string;
        dimensions: Dimensions;
        position: Position;
    };
    canvas: {
        dimensions: Dimensions;
        position: Position;
        backgroundColor: string;
    };
    gridSize: {
        dimensions: Dimensions;
        position: Position;
    };
    headline?: {
        dimensions: Dimensions;
        position: Position;
        label: string;
        color: string;
        fontSize: number;
    };
    verticalAxis: ScopeLayoutAxis[];
    horizontalAxis: ScopeLayoutAxis[];
    graphs: ScopeGraphLayout[];
}
export interface ScopeLayoutDigitalChart {
    visible: boolean;
    dimensions: Dimensions;
    position: Position;
    backgroundColor: string;
    foregroundColor: string;
    tiles: {
        name: string;
        dimensions: Dimensions;
        position: Position;
    }[];
}
export interface ScopeLayoutOverview {
    visible: boolean;
    dimensions: Dimensions;
    preferredSize: Dimensions;
    position: Position;
    canvas: {
        dimensions: Dimensions;
        position: Position;
        backgroundColor: string;
    };
    gridSize: {
        dimensions: Dimensions;
        position: Position;
    };
    verticalAxis: ScopeLayoutAxis[];
    horizontalAxis: ScopeLayoutAxis[];
    graphs: ScopeGraphLayout[];
}
export interface ScopeGraphLayout {
    graphName: string;
    graphType: GraphType;
    marks: boolean;
    lineColor: string;
    lineWidth: number;
    markColor: string;
    markWidth: number;
    fillMode: FillMode;
    fillColor: string;
    fillTransparency: number;
    showEndCap: boolean;
    showStartCap: boolean;
    capSize: number;
    capColor: string;
    antialias: boolean;
}
export interface UploadedRecord {
    fileName: string;
    guid: string;
    persist: boolean;
    userName: string;
}
export interface Dimensions {
    width: number;
    height: number;
}
export interface Position {
    x: number;
    y: number;
}
export declare enum MouseMode {
    None = 0,
    ZoomX = 1,
    ZoomY = 2,
    ZoomXY = 3,
    PanX = 4,
    PanY = 5,
    PanXY = 6
}
export declare enum Direction {
    Forward = "Forward",
    Reverse = "Reverse"
}
export declare enum GraphType {
    Line = "Line",
    Stair = "Stair",
    Bar = "Bar",
    MarksOnly = "MarksOnly",
    ExtendedLine = "ExtendedLine",
    RoundShape = "RoundShape"
}
export declare enum FillMode {
    None = "None",
    FromHorizontalZero = "FromHorizontalZero",
    FromBottom = "FromBottom",
    FromTop = "FromTop",
    FromCenter = "FromCenter",
    FromSource = "FromSource",
    FromFirst = "FromFirst"
}
export interface AnalyticsData {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
}
//# sourceMappingURL=Types.d.ts.map