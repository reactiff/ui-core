import React from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';
import { fnOrValue } from './util/lang';

export class TextProps { 
    size?:     number|string;
    children?: any;    
}

const Text = (directives: TextProps & PropsDirectives) => {
    const { size, children, ...other }                = directives;
    const { root, data, events } = useStyleDirectives<TextProps>(other, null);
    if (!root.className) {
        return fnOrValue(directives.children);
    }
    return (
        <div {...data} className={root.className} {...events}>
            {fnOrValue(directives.children)}
        </div>
    )
};

export default Text;
