import traverse from './traverse';
import assignPath from './assignPath';
import selectShape from './selectShape';
import intersect from './intersect';
import MapReduceObject from './mapReduceObject';

export default {
  traverse,
  assignPath,
  selectShape,
  intersect,
  mapReduce(obj: any) {
    return new MapReduceObject(obj);
  },
};
