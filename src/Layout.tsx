import React, { ReactNode } from 'react';


import { PropsDirectives, useStyleDirectives } from './directives';

type DivProps = { children?: ReactNode, id?: string };

export const div = (directives: DivProps & PropsDirectives) => {
  const { children, ...other }      = directives;
  const { root, props, attr, data } = useStyleDirectives<DivProps>(other, null);
  return (
    <div className={root.className} id={directives.id} {...data}>
      {children}
    </div>
  );
};

type RowProps = { children?: ReactNode, id?: string };
export const row = (directives: RowProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root } = useStyleDirectives<RowProps>(
    other,
    null,
    'Row',
    'flex row',
  );
  return (
    <div className={root.className} id={directives.id}>
      {children}
    </div>
  );
};

type ColProps = { children?: ReactNode, id?: string };
export const col = (directives: ColProps & PropsDirectives) => {
  const { children, ...other } = directives;
  const { root } = useStyleDirectives<ColProps>(
    other,
    null,
    'Col',
    'flex column',
  );
  return (
    <div className={root.className} id={directives.id}>
      {children}
    </div>
  );
};

