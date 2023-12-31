import './tabelaCursos.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import Navigation from '../Utils/navigation';

function TabelaCursos() {

  const location = useLocation(); 

  return (
    <div className='container'>
      <Navigation/> 
      <div className='Table-Content-container'>
        <div className="custom-table">
          <div className="custom-table-row header">
            <div className="custom-table-title-cell">Nível</div>
            <div className="custom-table-title-cell">Descrição</div>
          </div>
          <div className="custom-table-row">
            <div className="custom-table-cell-nivel">Básico</div>
            <div className="custom-table-cell">Ideal para iniciantes acima de 18 anos, com baixa ou nenhuma experiência com armas de fogo. Optando por esporte ou defesa pessoal.</div>
          </div>
          <div className="custom-table-row">
            <div className="custom-table-cell-nivel">Intermediário</div>
            <div className="custom-table-cell">Para atiradores que já possuem um nível de conhecimento elevado de armas curtas. Querendo aprimorar seu aprendizado no emprego de armas portáteis.</div>
          </div>
          <div className="custom-table-row">
            <div className="custom-table-cell-nivel">Avançado</div>
            <div className="custom-table-cell">Treinamento tático para civil ou forças armadas. Abrangendo destreza, disciplina e técnicas avançadas de armas semi-automáticas e de repetição.</div>
          </div>
          <div className="custom-table-row">
            <div className="custom-table-cell-nivel">Consultoria</div>
            <div className="custom-table-cell">Iniciamos os trâmites no momento do aceite do cliente em adquirir uma arma de fogo, até sua conclusão final. Com seriedade e competência.</div>
          </div>
        </div>
      </div>
      <div className='contact_button_container'>
        <Link to="/contato" className={`botao_contato ${location.pathname === '/contato' ? 'active' : ''}`}>Faça uma cotação conosco</Link>
      </div>
    </div>
  );
}

export default TabelaCursos;
