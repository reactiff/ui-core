import { isNumber } from 'lodash';

export type ColorPortion = { color: string, parts?: number };
export type ColorNameOrPortion = string|ColorPortion;

interface ParsedColor { color: string, parts: number };

export type StripeOptionsType = {
    angle?: number,
    size?: any,
    colors?: ColorNameOrPortion[],
};

const defaultProps = { angle: 90 };
function colorFromString(color: string) {
    const tokens = color.split(' ');
    if (tokens.length === 1) return { color: tokens[0], parts: 1 };
    if (tokens.length === 2) return { color: tokens[0], parts: +tokens[1] };
    throw new Error('Max number of color tokens expected is 2');
}
function parseColor(color: ColorNameOrPortion) {
    if (typeof color === 'string') return colorFromString(color);
    return color as ParsedColor;
}
function generateStripesStyle(params: any) {
    const type = 'linear-gradient';
    const { angle } = params;
    const colors = params.colors ? params.colors.map((c: ColorNameOrPortion) => parseColor(c)) : null;
    
    const partCount: number = colors.reduce((total: number, c: ParsedColor) => (+total) + c.parts, 0);
    const steps = partCount * 2;
    const step = 100 / steps;

    const colorCount = colors.length;
    const n = colorCount * 2;

    const outSegments: string[] = [];
    let distance = 0;
    
    for (let i = 0; i < n; i++) {
        const index = i % colorCount;
        const nextIndex = (i + 1) % colorCount;
        distance += step * colors[index].parts;
        outSegments.push(colors[index].color + ' ' + distance.toFixed(2) + '%');
        if (i < n - 1) {
            outSegments.push(colors[nextIndex].color + ' ' + distance.toFixed(2) + '%');
        }
    }

    const size = params.size || steps;

    const styleProps = {
        backgroundImage: `${type}(${angle}deg, ${outSegments.join(', ')})`,
        backgroundSize: isNumber(size) ? `${size.toFixed(2)}px ${size.toFixed(2)}px` : size,
    };

    return styleProps;
}

export function createStripes(options: StripeOptionsType) {
    const params = { ...defaultProps, ...options };
    return generateStripesStyle(params);
}
