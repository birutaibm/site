import React, { useState, useEffect } from 'react';

import Input from '../Input';
import './styles.css';
import api from '../../services/api';

export default function DevForm({onAddDev}) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude)
      },
      err => console.log(err),
      {timeout: 30000}
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');
    onAddDev(response.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Usuário do Github"
        name="github_username"
        settableValue={[github_username, setGithubUsername]}
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
          settableValue={[latitude, setLatitude]}
        />

        <Input
          label="Longitude"
          type="number"
          name="longitude"
          settableValue={[longitude, setLongitude]}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}