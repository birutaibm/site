import React, { useState, useEffect } from 'react';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

export default function App() {
  const [position, setPosition] = useState({latitude:'', longitude:''})
  const [devs, setDevs] = useState([]);
  const [editingDev, setEditingDev] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const pos = {latitude, longitude};
        setPosition(pos);
      },
      err => console.log(err),
      {timeout: 30000}
    );
    
    loadDevs();
  }, []);

  async function loadDevs() {
    const response = await api.get('/devs');

    setDevs(response.data);
  }

  async function removeDev(id) {
    await api.delete('/devs/'+id);

    loadDevs();
  }

  async function editDev(id) {
    const dev = devs.find(d => d._id === id);
    setEditingDev(dev);
  }
  
  async function saveDev(dev) {
    if (editingDev) {
      await api.put('/devs/'+editingDev._id, dev);
      setEditingDev(null);
    } else {
      await api.post('/devs', dev);
    }

    loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm saveDev={saveDev} position={position} values={editingDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              key={dev._id}
              info={dev}
              remove={() => removeDev(dev._id)}
              edit={() => editDev(dev._id)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
