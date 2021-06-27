import { isNullOrUndefined } from "../validation";
import copyToClipboard from "./copyToClipboard";

function roundTo(value: number, decimalPlaces?: number) {
    if (isNullOrUndefined(decimalPlaces)) return value;
    const nn = Math.pow(10, decimalPlaces!);
    return Math.round((value + Number.EPSILON) * nn) / nn;
}

function modulate(value: number, mod?: number) {
    if (!mod) return value;
    return value % mod;
}

function clamp(value: number, min?: number, max?: number) {
    const minVal = isNullOrUndefined(min) ? Number.NEGATIVE_INFINITY : min!;
    const maxVal = isNullOrUndefined(max) ? Number.POSITIVE_INFINITY : max!;
    const mx = Math.max(minVal, value);
    const mn = Math.min(maxVal, mx);
    return mn;
}

export default {
    copyToClipboard,

    roundTo,
    modulate,
    clamp,
}