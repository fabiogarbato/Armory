import './home.css'
import { Link } from 'react-router-dom';

function Home(){
        return(      
            <div className='container'>
                <div className='header_site'>
                <div className='img_logo'></div>
                    <div className='text-Container-header'>
                        <div className='menu-button'>Página Inicial</div>
                        <div className='menu-button'>Sobre Nós</div>
                        <div className='menu-button'>Contato</div>
                    </div>
                </div>
                <div className='img-container1'></div>
                <div className='img-container2'></div>
            </div>                      
    )
}

export default Home;