import React from 'react';

import './style.css';
import MapList from '../Logic/MapList';

export default function Header({ itens={} }) {

  return (
    <div id="header-container">
      <MapList
        collection={itens}
        mapFunction={(text, name) => (
          <a href={'#'+name}>{text}</a>
        )}
      />
    </div>
  );
}
