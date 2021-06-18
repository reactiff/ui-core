import React, { ReactNode } from 'react';


import { PropsDirectives, useStyleDirectives } from './directives';

type DivProps = { children?: ReactNode, id?: string };

export const div = (directives: DivProps & PropsDirectives) => {
  const { children, ...other }      = directives;
  const { root, props, attr, data } = useStyleDirectives<DivProps>(other, null);
  return (
    <div {...data} {...props} {...attr} className={root.className}>
      {children}
    </div>
  );
};

type RowProps = { children?: ReactNode, id?: string };
export const row = (directives: RowProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root, props, attr, data  } = useStyleDirectives<RowProps>(
    other,
    null,
    'Row',
    'flex row',
  );
  return (
    <div {...data} {...props} {...attr} className={root.className}>
      {children}
    </div>
  );
};

type ColProps = { children?: ReactNode, id?: string };
export const col = (directives: ColProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root, props, attr, data  } = useStyleDirectives<ColProps>(
    other,
    null,
    'Col',
    'flex column',
  );
  return (
    <div {...data} {...props} {...attr} className={root.className}>
      {children}
    </div>
  );
};

