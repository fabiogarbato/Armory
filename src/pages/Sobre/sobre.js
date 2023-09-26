import './sobre.css'
import { Link } from 'react-router-dom';

function Sobre(){
        return(      
            <div className='container'>
                <div className='header_site'>  
                    <div className='img_logo'></div>
                        <div className='text-Container-header'>
                            <Link to='/' className='menu-button'>Página Inicial</Link>
                            <Link to="/sobre" className='menu-button'>Sobre Nós</Link>
                            <Link to="/contato" className='menu-button'>Contato</Link>
                        </div>
                </div>
            </div>                      
    )
}

export default Sobre;