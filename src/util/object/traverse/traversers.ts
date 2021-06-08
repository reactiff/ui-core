import isNullOrUndefined from './isNullOrUndefined';

import { RecursiveContext, CallbackContext } from './types';


export function traverseObject(value: any, ctx: RecursiveContext) {
  if (ctx.debug)
    console.log(
      new Array(ctx.depth).fill(' ').join('') + 'traverseObject value:',
      value,
      ' ctx:',
      ctx,
    );

  let results: any[] = [];

  if (isNullOrUndefined(value)) {
    return results;
  }

  const { path, depth, ...other } = ctx;

  // traverse own properties
  for (let key of Object.keys(value)) {
    results = results.concat(
      traverseLeaf(value[key], {
        ...other,
        path: path.concat(key),
        depth: depth + 1,
        key,
        index: key,
      }),
    );
  }

  // traverse symbol properties too
  const symbols = Object.getOwnPropertySymbols(value);
  if (symbols.length) {
    for (let symbol of symbols) {
      results = results.concat(
        traverseLeaf(value[symbol], {
          ...other,
          path: path.concat(symbol),
          depth: depth + 1,
          key: symbol,
          index: symbol,
        }),
      );
    }
  }

  return results;
}

export function traverseLeaf(value: any, ctx: RecursiveContext) {
  if (ctx.debug)
    console.log(
      new Array(ctx.depth).fill(' ').join('') + 'traverseLeaf value:',
      value,
      ' ctx:',
      ctx,
    );

  let results: any[] = [];

  const cbContext: CallbackContext = {
    value,
    type: typeof value,
    contructorName: value ? value.constructor.name : undefined,
    key: ctx.key,
    path: ctx.path
      .map((t: any) => {
        const token = typeof t === 'string' ? t : t.toString();
        return token[0] === '[' ? token : '.' + token;
      })
      .join('')
      .substring(1),
    tokens: ctx.path,
  };

  // if find and select are both present
  if (ctx.find && ctx.select && ctx.find(cbContext)) {
    return ctx.select(cbContext);
  }

  if (ctx.filter) {
    // if filter present
    if (ctx.filter(cbContext)) {
      if (ctx.visit) {
        ctx.visit(cbContext);
      }
      if (ctx.select) {
        results = results.concat(ctx.select(cbContext));
      }
    }
  } else {
    // no filter present
    if (ctx.visit) {
      ctx.visit(cbContext);
    }
    if (ctx.select) {
      results = results.concat(ctx.select(cbContext));
    }
  }

  if (Array.isArray(value)) {
    if (!ctx.expand || ctx.expand(cbContext)) {
      results = results.concat(traverseArray(value, ctx));
    }
  } else if (typeof value === 'object') {
    if (!ctx.expand || ctx.expand(cbContext)) {
      results = results.concat(traverseObject(value, ctx));
    }
  }

  return results;
}

export function traverseArray(value: any, ctx: RecursiveContext) {
  if (ctx.debug)
    console.log(
      new Array(ctx.depth).fill(' ').join('') + 'traverseArray value:',
      value,
      ' ctx:',
      ctx,
    );

  let results: any[] = [];

  const { path, depth, ...other } = ctx;

  for (let index = 0; index < value.length; index++) {
    results = results.concat(
      traverseLeaf(value[index], {
        ...other,
        path: path.concat(`[${index}]`),
        depth: depth + 1,
        key: index,
        index,
      }),
    );
  }

  return results;
}
