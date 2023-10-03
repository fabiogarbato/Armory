import './sobre.css'
import React from 'react';
import Navigation from '../Utils/navigation';

function Sobre(){
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
            <Navigation/> 
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