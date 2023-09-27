import './home.css';
import { Link, useLocation } from 'react-router-dom'; 
import React from 'react';

function Home() {
  const location = useLocation(); 

  return (      
    <div className='container'>
      <div className='header_site'>
        <div className='img_logo'></div>
        <div className='text-Container-header'>
          <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
          <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
          <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
        </div>
      </div>
      <Link to='/sobre' className={`img-container1 ${location.pathname === '/sobre' ? 'active' : ''}`}></Link>
      <Link to='/contato' className={`img-container2 ${location.pathname === '/contato' ? 'active' : ''}`}></Link>
      <div className='text-img-container'>
        <div className='column-1'>
          <div className='text-name-img1'>Sobre Nós</div>        
        </div>
        <div className='column-2'>
          <div className='text-name-img2'>Entre em contato conosco</div>        
        </div>
      </div>
    </div>
  );
}

export default Home;
