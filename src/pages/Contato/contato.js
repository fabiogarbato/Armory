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
      <Container fluid style={{ position: 'relative', margin:'0' }}>
        <Row className="body flex-wrap">
          <Col lg={6} md={6} sm={12} style={{  marginBottom: '20%' }} className="coluna d-flex flex-column justify-content-center align-items-center">
            <p style={{ marginBottom: '8%'}} className='text-center'>@armoryconsulting</p>
            <a href="https://www.instagram.com/armoryconsulting/" target="_blank">
              <Image src={Instagram} alt="Imagem 1" className="img-fluid imagem-social-insta" />
            </a>
          </Col>
          <Col lg={6} md={6} sm={12} style={{ marginBottom: '19%' }} className="coluna d-flex flex-column justify-content-center align-items-center">
              <p className='text-center'>Armory Consulting</p>
              <a href="https://www.facebook.com/armoryconsulting/" target="_blank">
                <Image src={Facebook} alt="Imagem 2" className="img-fluid imagem-social" />
              </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contato;
