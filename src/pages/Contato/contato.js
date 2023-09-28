import './contato.css'
import { Link, useLocation } from 'react-router-dom';

function Contato(){
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
            <div className='Title-container'>
                <div className='Title-text'> Contato</div>
            </div>
            <div className='Content-contact-container'>
                <div className='column-contact-1'>
                   <div className='title-column-contact-1'>INSTAGRAM</div> 
                    <Link to='https://www.instagram.com/armoryconsulting/' target='_blank'>
                        <div className='img-contact1'></div>
                    </Link>
                    <div className='container-nameSocialMedia'>
                        <div className='img2-socialMedia-logo'></div>
                        <div className='text-nameSocialMedia'>@armoryconsulting</div>
                    </div>
                </div>
                <div className='column-contact-2'>
                    <div className='title-column-contact-2'>FACEBOOK</div> 
                    <Link to='https://www.facebook.com/armoryconsulting/' target='_blank'>
                        <div className='img-contact2'></div>
                    </Link>
                    <div className='container-nameSocialMedia'>
                        <div className='img-socialMedia-logo'></div>
                        <div className='text-nameSocialMedia'>Armory Consulting</div>
                    </div>
                </div>
            </div>
            <a class="whatsapp-link" href="https://wa.me/5541997388481?text=%20Ola%21%20Conheci%20os%20servi%C3%A7os%20atrav%C3%A9s%20do%20site%2C%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os" target="_blank"></a>
        </div>                      
    )
}

export default Contato;