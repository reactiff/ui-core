import React, { ReactNode } from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';

type DivProps = { children?: ReactNode, id?: string };
const Div = (directives: DivProps & PropsDirectives) => {
  const { children, ...other }      = directives;
  const { root, data, events } = useStyleDirectives<DivProps>(other, null);
  return (
    <div {...data} className={root.className} {...events}>
      {children}
    </div>
  );
}

export default Div;