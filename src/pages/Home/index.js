import './home.css';
import { Link, useLocation } from 'react-router-dom'; 
import React, {useState} from 'react';

function Home() {
  const location = useLocation(); 
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (      
    <div className='container'>
      <div className='header_site'>
        <div className='img_logo'></div>
        <div className='text-Container-header'>
          <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
          <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
          <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
          <div className='menu-button' id='parceiros' onClick={toggleSubmenu}>
            Parceiros
          </div>
          {showSubmenu && (
            <div className='submenu-content'>
              <Link to="/youtube" className={`submenu-button ${location.pathname === '/youtube' ? 'active' : ''}`}>YouTube</Link>
              <Link to="/google" className={`submenu-button ${location.pathname === '/google' ? 'active' : ''}`}>Google</Link>
            </div>
          )}
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
