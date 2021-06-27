import React, { ReactNode } from 'react';
import { PropsDirectives, useStyleDirectives } from './directives';

type RowProps = { children?: ReactNode, id?: string };
const Row = (directives: RowProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root, data, events  } = useStyleDirectives<RowProps>(
    other,
    null,
    '',
    'flex row',
  );
  return (
    <div {...data} className={root.className} {...events}>
      {children}
    </div>
  );
}

export default Row;
