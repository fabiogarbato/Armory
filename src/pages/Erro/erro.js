import './erro.css' 
import { Link, useLocation } from 'react-router-dom';

function Erro(){
    const location = useLocation();
    return(      
        <div className='container'>
            <div className='header_site'>  
            <div className='img_logo'></div>
                <div className='text-Container-header'>
                    <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
                    <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
                    <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
                </div>
            </div>
            <div className='Content-container-error'>
                <div className='text-error'>ERRO 404 - PÁGINA NÃO ENCONTRADA</div>  
            </div>
        </div>                      
    )
}

export default Erro;