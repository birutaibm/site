import React from 'react';

import {returnOrEval as answer} from '../../library/utils'
import Encapsulated from './Encapsulated';

export default function MapList({ collection, mapFunction, ulClass, liClass, header=null, footer=null }){
  function getCorrectFormatOfCollection() {
    const itens = answer(collection);
    if (itens && (typeof itens === 'object') && Object.keys(itens).length) {
      return itens;
    } else {
      return null;
    }
  }
  
  function formatData() {
    const itens = getCorrectFormatOfCollection();
    if (mapFunction && itens) {
      const result = {};
      Object.keys(itens).forEach(key => result[key] = mapFunction(itens[key], key));
      return result;
    }
    return null;
  }

  function buildElements(data) {
    if (liClass) {
      return Object.keys(data).map(key => (
        <li key={key} className={liClass}>{data[key]}</li>
      ));
    } else {
      return Object.keys(data).map(key => (
        <li key={key}>{data[key]}</li>
      ));
    }
  }

  function buildBody() {
    const data = formatData();
    if (data) {
      return (ulClass) ? (
        <ul className={ulClass}>{buildElements(data)}</ul>
      ) : (
        <ul>{buildElements(data)}</ul>
      );
    }
    return null;
  }

  const body = buildBody();

  return body ? (
    <Encapsulated header={header} body={body} footer={footer}/>
  ) : null;
}