import React from 'react';
import { isNumber } from 'lodash';
import clsx from 'clsx';
import ui from '..';

export type ColorPortion = { color: string, percentage?: number };
export type ColorNameOrPortion = string|ColorPortion;

export type LinearGradientSpecification = {
    repeat?: boolean,
    angle?: number,
    colors?: ColorNameOrPortion[],
};

export function useLinearGradient(options: LinearGradientSpecification|LinearGradientSpecification[], dependencies: any[]) {
    const style = React.useMemo(() => generateLinearGradientStyle(options), dependencies);
    return style;
}

export function createLinearGradient(options: LinearGradientSpecification|LinearGradientSpecification[]) {
    return generateLinearGradientStyle(options);
}


function parseColor(color: ColorNameOrPortion) {
    function colorFromString(color: string) {
        const tokens = color.split(' ');
        if (tokens.length>2) {
            throw new Error('Due to current limitation of this function, colors should be canonical without any spaces, e.g.: rgb(255,128,0,0.8) 75% is a valid color and stop pair.')
        }
        return tokens;
    }    
    if (typeof color === 'string') return colorFromString(color);
    return [ color.color, color.percentage?.toString()];
}

function generateLinearGradientStyle(options: LinearGradientSpecification|LinearGradientSpecification[]) {
    
    const gradients: LinearGradientSpecification[] = Array.isArray(options) ? options : [options];

    const functions = gradients.map((g: any) => {
        const colors = g.colors.map((c: ColorNameOrPortion) => parseColor(c));
        const functionName = g.repeat ? 'repeating-linear-gradient' : 'linear-gradient';
        return `${functionName}(${g.angle}deg, ${colors.map((tuple: string[]) => tuple.join(' ')).join(', ')})`;
    })

    return { backgroundImage: functions.join(', ') };
}