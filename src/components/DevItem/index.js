import React from 'react';

import './styles.css';

export default function Dev({info}) {
  const {name, techs, bio, github_username, avatar_url} = info;
  const techsStr = techs.join(', ');
  const url = 'https://github.com/'+github_username;

  return (
    <li className="dev-item">
      <header>
        <img src={avatar_url} alt={name}/>
        <div className="user-info">
          <strong>{name}</strong>
          <span>{techsStr}</span>
        </div>
      </header>
      <p>{bio}</p>
      <a href={url}>Acessar perfil no Github</a>
    </li>
  );
}