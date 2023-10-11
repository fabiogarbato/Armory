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
      <Container fluid style={{ backgroundColor: 'pink', position: 'relative', height: '5vh', display: 'flex', justifyContent: 'center' }}>
        <Row style={{marginBottom: '0' }} className="align-items-center">
          <Col className='title-text'>Sobre Nós</Col>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: 'pink', position: 'relative', height: '20vh', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Row style={{ marginBottom: '0' }} className="align-items-center">
          <Col xs={6} className="bg-blue text-white text-center d-flex align-items-top" style={{ backgroundColor: 'blue', height: '20vh', width: '100vh'}}>
            Azul
          </Col>
          <Col xs={6} className="bg-red text-white text-center d-flex align-items-top" style={{ backgroundColor: 'red', height: '20vh', width: '100vh'}}>
            Vermelho
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
