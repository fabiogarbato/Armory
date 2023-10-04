import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Utils/navigation';
import './home.css'

function Home() {
  const location = useLocation();
  return (
    <div className='container'>
      <Navigation/> 
      <Link to='/tabela' className={`img-container1 ${location.pathname === '/tabela' ? 'active' : ''}`}>Nossos Cursos</Link>
      <Link to='/estrutura' className={`img-container2 ${location.pathname === '/estrutura' ? 'active' : ''}`}>Nossa Estrutura</Link>
      <div className='text-img-container'>
        <div className='column-1'>
          <div className='text-name_image1'>Nossos Cursos</div>        
        </div>
        <div className='column-2'>
          <div className='text-name_image2'>Nossa Estrutura</div>        
        </div>
      </div>
    </div>
  );
}

export default Home;
