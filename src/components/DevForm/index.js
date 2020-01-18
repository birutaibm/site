import React, { useState, useEffect } from 'react';

import Input from '../Input';
import './styles.css';

export default function DevForm({saveDev, values, position}) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const cache = values || {};
    setGithubUsername(cache.github_username || '');
    setTechs(cache.techs || '');
    setName(cache.name || '');
    setBio(cache.bio || '');
    setLatitude(cache.latitude || position.latitude);
    setLongitude(cache.longitude || position.longitude);
  }, [values, position]);

  async function handleSubmit(e) {
    e.preventDefault();

    const dev = {
      github_username,
      techs,
      latitude,
      longitude
    };
    if (name) {
      dev.name = name;
    }
    if (bio) {
      dev.bio = bio;
    }
    saveDev(dev);

    setGithubUsername('');
    setTechs('');
    setName('');
    setBio('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Usuário do Github"
        name="github_username"
        required
        settableValue={values ? [github_username] : [github_username, setGithubUsername]}
      />
      <Input
        label="Nome"
        name="nome"
        settableValue={[name, setName]}
      />
      <Input
        label="Apresentação"
        name="bio"
        settableValue={[bio, setBio]}
      />
      <Input
        label="Tecnologias"
        name="techs"
        settableValue={[techs, setTechs]}
      />
      <div className="input-group">
        <Input
          label="Latitude"
          type="number"
          name="latitude"
          required
          settableValue={[latitude, setLatitude]}
        />
        <Input
          label="Longitude"
          type="number"
          name="longitude"
          required
          settableValue={[longitude, setLongitude]}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}