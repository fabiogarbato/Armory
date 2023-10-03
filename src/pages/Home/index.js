import './home.css';
import { Link, useLocation } from 'react-router-dom'; 
import React, {useState} from 'react';

function Home() {
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
      <Link to='/tabela' className={`img-container1 ${location.pathname === '/tabela' ? 'active' : ''}`}></Link>
      <Link to='/estrutura' className={`img-container2 ${location.pathname === '/estrutura' ? 'active' : ''}`}></Link>
      <div className='text-img-container'>
        <div className='column-1'>
          <div className='text-name-img1'>Nossos Cursos</div>        
        </div>
        <div className='column-2'>
          <div className='text-name-img2'>Nossa Estrutura</div>        
        </div>
      </div>
    </div>
  );
}

export default Home;
