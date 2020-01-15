import React, { useState, useEffect } from 'react';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  function addDev(dev) {
    setDevs([...devs, dev]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onAddDev={addDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (<DevItem info={dev} key={dev._id}/>))}
        </ul>
      </main>
    </div>
  );
}
