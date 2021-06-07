import React from 'react';
import useInlineStyle from './directives/useInlineStyle';

const defaultMinCount = 0;

export type UiCounter = { min?: number; title?: string };
export default (props: UiCounter) => {
  
  const ref = React.useRef({ count: 0 }).current; 

  if (
    ++ref.count <=
    (typeof props.min !== 'undefined' ? props.min : defaultMinCount)
  ) {
    return null;
  }
  
  const classes = useInlineStyle({
    root: {
      position: 'absolute',
      zIndex: 999999,
      top: 0,
      left: 0,
      padding: '0 3px',
      lineHeight: 1,
      fontSize: '.7rem',
      backgroundColor: 'red',
      color: 'white',
    }
  }, [])();


  return (
    <div
      title={props.title}
      className={classes.root}
    >
      {ref.count}
    </div>
  );
};
