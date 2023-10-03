import './tabelaCursos.css';
import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function TabelaCursos() {

  const location = useLocation(); 
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  return (
    <div className='container'>
      <div className='header_site'>
        <div className='img_logo'></div>
        <div className='text-Container-header'>
          <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
          <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
          <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
          <div
            className={`menu-button ${showSubMenu ? 'active' : ''}`}
            onClick={toggleSubMenu}
            onMouseLeave={closeSubMenu}
          >
            Parceria
            {showSubMenu && (
              <div className='submenu'>
                <ul>
                  <ul><a href="https://obelico.com.br/">OBélico</a></ul>
                  <ul><a href="https://www.cabanadasarmas.com.br/">Cabana das Armas</a></ul>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
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
