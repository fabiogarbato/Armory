import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './contato.css';
import Instagram from '../../images/insta.png';
import Facebook from '../../images/face.png';

function Contato() {

  return (
    <div>
      <Menubar />
      <Container fluid style={{ position: 'relative', height: '5vh', display: 'flex', justifyContent: 'center' }}>
        <Row style={{marginBottom: '0' }} className="align-items-center">
          <Col className='title-text'>Contato</Col>
        </Row>
      </Container>
      <Container fluid className='container-contato'>
        <Row style={{ marginBottom: '0' }} className="align-items-center">
          <Col xs={6} sm={6} md={6} lg={6} className="bg-blue text-white text-center d-flex align-items-top column1-contact">
            <Container fluid className='title-column-container'> 
              <p className='text-style'>@armoryconsulting</p>
            </Container>
            <Image src={Instagram} alt="Imagem 1" className="img-fluid img-insta" />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} className="bg-red text-white text-center d-flex align-items-top column2-contact">
            <Container fluid className='title-column-container'> 
              <p className='text-style'>Armory Consulting</p>
            </Container>
            <Image src={Facebook} alt="Imagem 1" className="img-fluid img-face" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contato;
