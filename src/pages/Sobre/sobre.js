import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sobre.css';
import React, { useEffect } from 'react';


function Sobre() {

  useEffect(() => {
    document.body.classList.add('sobre-page');

    return () => {
        document.body.classList.remove('sobre-page');
    };
}, []);

  return (
    <div>
      <Menubar />
      <Container fluid style={{ position: 'relative', height: '5vh', display: 'flex', justifyContent: 'center' }}>
        <Row style={{marginBottom: '0', marginTop: '-30px'  }} className="align-items-center">
          <Col className='text-center-sobre'>Sobre Nós</Col>
        </Row>
      </Container>
      <Container fluid style={{ position: 'relative', margin: '0', minHeight: '30vh' }}> 
          <Row>
              <Col md={6}>
                  <p className='text-center-sobre'>UMA BREVE</p>
                  <p className='text-center-sobre'>APRESENTAÇÃO</p>
                  <p className='text-description'>Somos uma empresa de consultoria e treinamento. Nosso principal foco é capacitar clientes com a nossa expertise. Compartilhar experiências e principalmente ensinar nossas técnicas do nível básico ao avançado.</p>
              </Col>
              <Col md={6}>
                  <p className='text-center-sobre'>MUITA PESQUISA </p>
                  <p className='text-center-sobre'>E PROFISSIONALISMO</p>
                  <p className='text-description'>O cidadão brasileiro é prejudicado reiteradamente com informações desencontradas no quesito arma de fogo. Por esta razão, criamos um projeto inovador ao realizar um levantamento mais assertivo. Com uma base sólida de conhecimento, a Armory Consulting foi criada para promover consultoria, cursos e treinamento no crescente mercado nacional de armas.</p>
              </Col>
          </Row>
      </Container>
      <Container fluid style={{ minHeight: '20vh' }}>
          <Row>
              <Col>
                  <p className='text-center-sobre'>ONDE ATUAMOS E NOSSAS PARCERIAS</p>
                  <p className='text-description' style={{ textAlign: 'center'}}>Atualmente exercemos nossos cursos exclusivamente em clubes de tiro. Curitiba e região metropolitana. Firmamos parcerias com despachantes, instrutores, estandes e armeiros credenciados. Isso garante que o profissional contratado esteja em conformidade com as normas e exigências da Polícia Federal e do Exército. A parceria com as lojas de armas e materiais táticos, fornece um vasto acervo para apresentarmos aos nossos clientes, diversos tipos de armas nacionais e importadas.</p>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Sobre;
