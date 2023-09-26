import './home.css'
import { Link } from 'react-router-dom';

function Home(){
        return(      
            <div className='container'>
                <div className='header_site'>
                <div className='img_logo'></div>
                    <div className='text-Container-header'>
                        <Link to='/' className='menu-button'>Página Inicial</Link>
                        <Link to="/sobre" className='menu-button'>Sobre Nós</Link>
                        <Link className='menu-button'>Contato</Link>
                    </div>
                </div>
                <div className='img-container1'></div>
                <div className='img-container2'></div>
                <div className='text-img-container'>
                    <div className='text-name-img1'>Saiba Mais</div>
                    <div className='text-name-img2'>Conheça nosso trabalho</div>
                </div>
            </div>                      
    )
}

export default Home;