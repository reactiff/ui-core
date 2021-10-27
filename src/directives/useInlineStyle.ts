import { useMemo } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { fnOrValue } from '../util/lang';

const useInlineStyle = (style: any, dependencies: any) => {
  const cb = useMemo(() => (
    makeStyles(() => (
      createStyles({ ...fnOrValue(style) })
    ))
  ), [style, dependencies]);
  return cb;
};
export default useInlineStyle;
