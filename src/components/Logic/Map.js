import React from 'react';

import {returnOrEval as answer} from '../../library/utils'
import Encapsulated from './Encapsulated';

export default function Map({ collection, mapFunction, header=null, footer=null }) {
  function buildBody() {
    const itens = answer(collection);
    if (itens && mapFunction) {
      if (typeof collection === 'object') {
        if (Array.isArray(itens)) {
          return itens.map(mapFunction);
        } else {
          return Object.keys(itens).map(key => mapFunction(itens[key], key))
        }
      }
    }
    return null;
  }

  const body = buildBody();

  return <Encapsulated header={header} body={body} footer={footer}/>
}