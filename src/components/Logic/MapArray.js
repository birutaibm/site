import React from 'react';

import Encapsulated from './Encapsulated';

export default function MapArray({ array=[], mapFunction, header=null, footer=null }) {
  const map = (array && mapFunction) ? array.map(mapFunction) : null;

  return <Encapsulated header={header} body={map} footer={footer}/>
}