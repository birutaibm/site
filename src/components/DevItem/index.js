import React from 'react';
import MaterialIcon from 'material-icons-react'

import './styles.css';

export default function DevItem({info, remove, edit}) {
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
        <div className="menu">
          <button className="menu-item" onClick={remove} >
            <MaterialIcon icon="delete_forever" size={20} color="#ac7777" />
          </button>
          <button className="menu-item" onClick={edit} >
            <MaterialIcon icon="edit" size={20} color="#7d40e7" />
          </button>
        </div>
      </header>
      <p>{bio}</p>
      <a href={url}>Acessar perfil no Github</a>
    </li>
  );
}