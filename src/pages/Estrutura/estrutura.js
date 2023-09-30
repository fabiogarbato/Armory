import './estrutura.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Estrutura() {

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
      <div className='container_body'>
        <div className='row-1'>
            <div className='img1'></div>
            <div className='text-container'>
                <div className='text-name-img1'>Realismo</div>
            </div>
        </div>              
        <div className='row-2'>
            <div className='text-container'>
                <div className='text-name-img2'>Visibilidade mais assertiva</div>
            </div>
            <div className='img2'></div>            
        </div>      
        <div className='row-3'>
            <div className='img3'></div>
            <div className='text-container'>
                <div className='text-name-img3'>Noção de profundidade</div>
            </div>
        </div>    
        <div className='row-4'>
            <div className='text-container'>
                <div className='text-name-img4'>Melhor enquadramento nas áreas predefinido</div>
            </div>
            <div className='img4'></div>            
        </div>                     
        <div className='row-5'>
            <div className='img5'></div>
            <div className='text-container'>
                <div className='text-name-img5'>Visualização mais ampla na cadência de tiro</div>
            </div>
        </div>                     
      </div>    
    </div>
  );
}

export default Estrutura;
