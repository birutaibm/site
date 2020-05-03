import React from 'react';

import MapList from '../Logic/MapList';
import members from './data';
import './style.css';

export default function Members() {
  console.log(members);

  return (
    <div id="members-container">
      <MapList
        header={(<h2>Membros</h2>)}
        collection={members}
        mapFunction={member => (
          <div className="member">
            <img src={member.avatar} alt={member.name}/>
            <p className="name">{member.name}</p>
            <p className="position">{member.position}</p>
          </div>
        )}
      />
    </div>
  );
}
