import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contato.css';

function Contato() {

  return (
    <div>
      <Menubar />
      <Container fluid style={{ position: 'relative', height: '5vh', display: 'flex', justifyContent: 'center' }}>
        <Row style={{marginBottom: '0' }} className="align-items-center">
          <Col className='title-text'>Contato</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contato;
