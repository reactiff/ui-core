import React, { ReactNode } from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';

type ColProps = { children?: ReactNode, id?: string };
const Col = (directives: ColProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root, data, events  } = useStyleDirectives<ColProps>(
    other,
    null,
    '',
    'flex column',
  );
  return (
    <div {...data} className={root.className} {...events}>
      {children}
    </div>
  );
}

export default Col;
