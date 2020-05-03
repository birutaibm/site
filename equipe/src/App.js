import React from 'react';

import './App.css';

function App() {
  return (
    <ul className="App">
      <Member
        image="logo512.png"
        name="Solange Garcia"
        text="Graduação em Matemática pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP), Mestrado em Matemática pela Universidade de Brasília (UNB), Doutorado em Controladoria e Contabilidade pela Faculdade de Economia, Administração e Contabilidade da Universidade de São Paulo (FEA-USP). Pós-doutorado na Heriot-Watt University na Escócia (Bolsa FAPESP). Atualmente é professora do Departamento de Contabilidade da FEARP-USP. Pesquisa na área de Contabilidade Social e Ambiental, com ênfase na integração de indicadores financeiros, sociais e ambientais nos sistemas de controle gerenciais e na divulgação de empresas (Relato Integrado, Global Reporting Initiative GRI, Objetivos do Desenvolvimento Sustentável ODS). Trabalha com metodologias ativas e simulação para ensino com modelos multicritério de apoio a decisão (MCDA). É líder dos Grupos de Pesquisa Tecnologias Educacionais para o Desenvolvimento Sustentável aplicadas à Contabilidade e Administração (AME4S) e Métricas para Sustentabilidade Corporativa (MP4S)."
        links={[{
          text: 'Lattes',
          url: 'http://lattes.cnpq.br/7916694153088223'
        }, {
          text: 'AME4S',
          url: 'http://dgp.cnpq.br/dgp/espelhogrupo/6776305049388088'
        }, {
          text: 'MP4S',
          url: 'http://dgp.cnpq.br/dgp/espelhogrupo/7458045610894337'
        }, {
          text: 'Research Gate',
          url: 'https://www.researchgate.net/profile/Solange_Garcia5'
        }, {
          text: 'ORCID',
          url: 'http://orcid.org/0000-0001-9865-2856'
        }]}
      />
    </ul>
  );
}

export default App;
