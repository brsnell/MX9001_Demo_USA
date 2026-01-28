import type { ScopeLayoutChart, ScopeLayoutDigitalChart, Chart, DigitalChart } from './Types.js';
/**
 * Convert scopeString to iso 8601 string
 * @param scopeString scopeString
 */
export declare function __scopeStringToIso(scopeString: string): string;
/**
 * Convert iso 8601 string to scope string
 * @param t Iso 8601 string
 */
export declare function __isoToScopeString(t: string): string;
/**
 * Convert iso 8601 string to milliseconds
 * @param t Iso 8601 string
 */
export declare function __isoToMilliSec(t: string): number;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isDigitalChartLayout(value: ScopeLayoutChart | ScopeLayoutDigitalChart): value is ScopeLayoutDigitalChart;
/**
 * Check if an object is a Comparison
 * @param value object to test
 */
export declare function isDigitalChartData(value: Chart | DigitalChart): value is DigitalChart;
//# sourceMappingURL=ScopeHelper.d.ts.map