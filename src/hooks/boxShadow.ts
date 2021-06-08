import React from 'react';

export type RGBA = { r: number, g: number, b: number, a: number };

export type BoxShadowOptions = { 
    inset?: boolean,
    xOffset?: number,
    yOffset?: number,
    blur?: number,
    spread?: number,
    rgba?: RGBA,
    hex?: string,
};

export const BoxShadowDefaults = {
    xOffset: 0,
    yOffset: 0,
    blur: 5,
    spread: 0,
    rgba: { r: 0, g: 0, b: 0, a: 0.75 } as RGBA,
};
export default (props: BoxShadowOptions) => {
    const init = () => {
        const x = { ...BoxShadowDefaults, ...props };
        const colorString = props.rgba 
            ? `rgba(${x.rgba.r}, ${x.rgba.g}, ${x.rgba.b}, ${x.rgba.a})`
            : props.hex;

        const inset = props.inset ? 'inset ' : '';
        const value = inset + `${x.xOffset}px ${x.yOffset}px ${x.blur}px ${x.spread}px ${colorString}`;
        return {
            "-webkit-box-shadow": value,
            "-moz-box-shadow": value,
            "box-shadow": value,
        }
    }; 
    return React.useState(init)[0];
}