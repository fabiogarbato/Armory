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
      <Container fluid className='container-sobre'>
        <Row style={{ marginBottom: '0' }} className="align-items-center">
          <Col xs={6} sm={6} md={6} lg={6} className="bg-blue text-white text-center d-flex align-items-top column1">
            <p className='text-style'>UMA BREVE APRESENTAÇÃO</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} className="bg-red text-white text-center d-flex align-items-top column2">
            <p className='text-style'>MUITA PESQUISA E PROFISSIONALISMO</p> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
