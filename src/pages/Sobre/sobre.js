import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sobre.css';

function Sobre() {

  return (
    <div>
      <Menubar />
      <Container fluid style={{ position: 'relative', height: '5vh', display: 'flex', justifyContent: 'center' }}>
        <Row style={{marginBottom: '0' }} className="align-items-center">
          <Col className='title-text'>Sobre Nós</Col>
        </Row>
      </Container>
      <Container fluid style={{ position: 'relative', margin:'0', height: '30vh'}}>
        <Row className="body flex-wrap">
          <Col lg={6} md={6} sm={12} style={{ marginBottom: '46%' }} className="coluna d-flex flex-column justify-content-center align-items-center">
            <p className='text-center-sobre'>UMA BREVE APRESENTAÇÃO</p>
            <h3 className='text-sobre-content'>Somos uma empresa de consultoria e treinamento. Nosso principal foco é capacitar clientes com a nossa expertise. Compartilhar experiências e principalmente ensinar nossas técnicas do nível básico ao avançado.</h3>
          </Col>
          <Col lg={6} md={6} sm={12} style={{ marginBottom: '40%' }} className="coluna d-flex flex-column justify-content-center align-items-center">
              <p className='text-center-sobre'>MUITA PESQUISA E PROFISSIONALISMO</p>
              <h3 className='text-sobre-content'>O cidadão brasileiro é prejudicado reiteradamente com informações desencontradas no quesito arma de fogo. Por esta razão, criamos um projeto inovador ao realizar um levantamento mais assertivo. Com uma base sólida de conhecimento, a Armory Consulting foi criada para promover consultoria, cursos e treinamento no crescente mercado nacional de armas.</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
