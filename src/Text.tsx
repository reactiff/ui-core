import React from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';
import { fnOrValue } from './util/logic';

export class TextProps { 
    size?:     number|string;
    children?: any;    
}

const _ownProps = new TextProps();
const Text = (directives: TextProps & PropsDirectives) => {
    const { ...other }                = directives;
    const { root, props, attr, data } = useStyleDirectives<TextProps>(other, _ownProps);
    if (!root.className) {
        return fnOrValue(directives.children);
    }
    return (
        <div className={root.className}>
            {fnOrValue(directives.children)}
        </div>
    )
};

export default Text;
