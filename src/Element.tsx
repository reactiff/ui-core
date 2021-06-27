import React, { ReactNode } from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';

type Props = { type: string, children?: ReactNode[] };
const Element = (directives: Props & PropsDirectives) => {
  const { children, type, ...other }      = directives;
  const { root, data, events } = useStyleDirectives<Props>(other, null);
  return React.createElement(
    type, 
    { ...data, className: root.className, ...events },
    ...children||[]
  );
}

export default Element;