import React from 'react';
import * as ui from '@reactiff/ui-core';
import data from './data.json';

export default function Table() {
  return <ui.table cols={data.columns} items={data.array} />
}


