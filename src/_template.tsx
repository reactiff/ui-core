import React from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';

type Props = { children?: any };
export const Div = (directives: Props & PropsDirectives) => {
  
    const { children, ...other }      = directives;
    const { root, props, attr, data } = useStyleDirectives<Props>(other, null);

    return (
        <div className={root.className} {...data}>
            {children}
        </div>
    );
};