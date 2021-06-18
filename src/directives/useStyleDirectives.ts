// import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { StyleBag, createClass } from './functions';
import classSwitches from './classSwitches';
import styleAttributes, { StyleAttributes } from './styleAttributes';

function useStyleDirectives<T>(
  directives: any,
  ownProps: any,
  tagName?: string,
  ...baseClasses: string[]
) {

  const {
    id,
    children,
    style,
    className,
    ref,
    data,
    pseudo,
    innerProps,
    css,
    //events
    onBlur,
    onClick,
    onChange,
    onFocus,
    onMouseUp,
    onMouseDown,
    onMouseMove,
    // ...
    ...other
  } = directives;


  const ignoredProps = {
    id,
    children,
    style,
    className,
    ref,
    data,
    pseudo,
    innerProps,
    ownProps,
    css,
    onBlur,
    onClick,
    onChange,
    onFocus,
    onMouseUp,
    onMouseDown,
    onMouseMove,
  };

  const utilizedKeys: string[] = [];
  const keys = Object.keys(other);

  const bag: StyleBag = { 
    style: { 
      ...css, 
      ...style 
    }, 
    classes: [] 
  };
  
  // Process each directive (except ignored ones)
  keys.forEach((key: any) => {
    if (!Reflect.has(ignoredProps, key)) {
      const value = directives[key];

      if (Reflect.has(classSwitches, key)) {             
        createClass({ bag, key, value, debug: false });       // If its a CLASS SWITCH
        utilizedKeys.push(key);
        return;
      } 

      if (Reflect.has(styleAttributes, key)) {                // If its an ATTRIBUTE
        (styleAttributes as any)[key]({ bag, key, value });
        utilizedKeys.push(key);
        return;
      } 
            
      if (value === true) {
        createClass({ bag, key, value, debug: false });
      }
    
    }
  });

  const props = { ...other };
  utilizedKeys.forEach((key) => {
    delete props[key];
  });

  const pseudoStyles = Object.keys(directives.pseudo || {}).reduce(
    (acc: any, key) => {
      const s = directives.pseudo[key];
      const fullKey = key[0] === '&' ? key : `& :${key}`;
      return Object.assign(acc, { [fullKey]: s });
    },
    {},
  );

  const usedStyles: any = makeStyles(() => {
    const s: any = {};
    if (Object.keys(bag.style).length) s.bag = bag.style;
    if (Object.keys(pseudoStyles).length) s.pseudo = pseudoStyles;
    return s;
  })();

  const events = {
    onBlur,
    onClick,
    onChange,
    onFocus,
    onMouseUp,
    onMouseDown,
    onMouseMove,
  }

  const { dataProps, ...attr } = (directives as StyleAttributes);
  const result = {
    root: {
      className: clsx(
        className,
        baseClasses,
        tagName,
        bag.classes,
        usedStyles.bag,
        usedStyles.pseudo,
      ),
    },
    props: { ...(props as T), ...ignoredProps },
    attr,
    data: dataProps,
    events,
  };

  return result;
}

export default useStyleDirectives;
