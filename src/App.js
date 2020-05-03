import React from 'react';

import './style.css';

import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Members from './components/Members';
import Projects from './components/Projects';
import Events from './components/Events';
import Gallery from './components/Gallery';

export default function App() {
  const links = {
    'title-container': 'Nome',
    'about-container': 'Quem Somos',
    'members-container': 'Membros',
    'projects-container': 'Projetos',
    'events-container': 'Eventos',
    'gallery-container': 'Galeria de Fotos',
  };

  return (
    <div id="content">
      <Header itens={links}/>
      <Title />
      <About />
      <Members />
      <Projects />
      <Events />
      <Gallery />
    </div>
  );
}
