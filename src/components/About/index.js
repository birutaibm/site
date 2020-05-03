import React from 'react';

import './style.css';

export default function About() {
  const urlWWW = 'https://fearp.usp.br/m-prme-eventos/item/5258-eventos-programados-de-03-a-07-de-julho-de-2017.html';

  return (
    <div id="about-container">
      <h2>Quem Somos</h2>
      <p className="about">
        O objetivo do grupo é desenvolver novas tecnologias educacionais para
        capacitar estudantes e pesquisadores e, por consequência, tomadores de
        decisão de negócios em geral para enfrentar o desafio do desenvolvimento
        sustentável.
      </p>
      <p className="about">
        O ensino da Contabilidade tem um papel preponderante neste contexto
        porque é uma área de conhecimento que tem o objetivo de sistematizar
        informações para apoiar os processos de decisão e de operações das
        organizações. Os profissionais de Contabilidade devem estar preparados
        para coletar informações e desenvolver ferramentas para mensurar e
        gerenciar aspectos sociais e ambientais das empresas, além dos aspectos
        econômicos e financeiros.
      </p>
      <p className="about">
        Em 2017 o Grupo organizou o evento <a href={urlWWW} target="_blank" rel="noopener noreferrer">
          Winter Working Week (WWW)
        </a> que contou com a participação de pesquisadores internacionais.
        Desde sua criação, o grupo conta com o apoio da FAPESP, através do
        Projeto registrado sob o Processo 2016/25123-6 que terá seu término em
        abril 2020.
      </p>
    </div>
  );
}
