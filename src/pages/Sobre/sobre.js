import './sobre.css'
import { Link, useLocation } from 'react-router-dom';
import React, {useState} from 'react';

function Sobre(){

    const location = useLocation();
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const closeSubMenu = () => {
        setShowSubMenu(false);
    };

    const titulos = [
        'UMA BREVE APRESENTAÇÃO',
        'MUITA PESQUISA E PROFISSIONALISMO',
        'ONDE ATUAMOS E NOSSAS PARCERIAS'
    ]
    const textos = [
        'Somos uma empresa de consultoria e treinamento. Nosso principal foco é capacitar clientes com a nossa expertise. Compartilhar experiências e principalmente ensinar nossas técnicas do nível básico ao avançado.',
        'O cidadão brasileiro é prejudicado reiteradamente com informações desencontradas no quesito arma de fogo. Por esta razão, criamos um projeto inovador ao realizar um levantamento mais assertivo. Com uma base sólida de conhecimento, a Armory Consulting foi criada para promover consultoria, cursos e treinamento no crescente mercado nacional de armas.',
        'Atualmente exercemos nossos cursos exclusivamente em clubes de tiro. Curitiba e região metropolitana. Firmamos parcerias com despachantes, instrutores, estandes e armeiros credenciados. Isso garante que o profissional contratado esteja em conformidade com as normas e exigências da Polícia Federal e do Exército. A parceria com as lojas de armas e materiais táticos, fornece um vasto acervo para apresentarmos aos nossos clientes, diversos tipos de armas nacionais e importadas.'
      ];

    return(      
        <div className='container'>
            <div className='header_site'>  
                <div className='img_logo'></div>
                <div className='text-Container-header'>
                    <Link to='/' className={`menu-button ${location.pathname === '/' ? 'active' : ''}`}>Página Inicial</Link>
                    <Link to="/sobre" className={`menu-button ${location.pathname === '/sobre' ? 'active' : ''}`}>Sobre Nós</Link>
                    <Link to="/contato" className={`menu-button ${location.pathname === '/contato' ? 'active' : ''}`}>Contato</Link>
                    <div
                        className={`menu-button ${showSubMenu ? 'active' : ''}`}
                        onClick={toggleSubMenu}
                        onMouseLeave={closeSubMenu}
                    >
                        Parceria
                        {showSubMenu && (
                        <div className='submenu'>
                            <ul>
                            <ul><a href="https://obelico.com.br/">OBélico</a></ul>
                            <ul><a href="https://www.cabanadasarmas.com.br/">Cabana das Armas</a></ul>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='Title-container'>
                <div className='Title-text'>Sobre Nós</div>
            </div>
            <div className='Content-container'>
                <div className='column-1'>
                    <div className='title-text-column-1'> {titulos[0]}
                        <div className='text-column-1'>{textos[0]}</div>
                    </div>
                </div>
                <div className='column-2'> 
                    <div className='title-text-column-2'> {titulos[1]}
                        <div className='text-column-2'>{textos[1]}</div>
                    </div>
                </div>
            </div>
            <div className='Content-container-bottom'>
                <div className='title-text-bottom'>{titulos[2]}
                    <div className='text-bottom'> {textos[2]} </div>
                </div>
            </div>
        </div>                      
    )
}

export default Sobre;