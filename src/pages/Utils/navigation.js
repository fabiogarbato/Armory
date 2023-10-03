import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  return (
    <div className='header_site'>
      <div className='img_logo'></div>
      <div className='text-Container-header'>
        <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
        <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
        <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
        <div
          className={`menu-button ${showSubMenu ? 'active' : ''}`}
          onClick={toggleSubMenu}
        >
          Parceria
        </div>
        {showSubMenu && (
          <div className='submenu'>
            <ul>
              <li><a href="https://obelico.com.br/" target='_blank' className='texto-submenu'>OBélico</a></li>
              <li><a href="https://www.cabanadasarmas.com.br/" target='_blank' className='texto-submenu'>Cabana das Armas</a></li>
            </ul>
            <button className='close-submenu-button' onClick={closeSubMenu}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
