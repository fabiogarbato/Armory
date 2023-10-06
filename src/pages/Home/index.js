import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Arma1 from '../../images/arma1.jpg';
import Arma2 from '../../images/arma2.jpg';
import './home.css';

function Home() {

  return (
    <div>
      <Menubar/>
      <Container fluid>
        <Row className="body flex-wrap">
          <Col lg={6} md={6} sm={12} className="coluna d-flex flex-column justify-content-center align-items-center">
            <Image src={Arma1} alt="Imagem 1" className="img-fluid imagem-custom" />
          </Col>
          <Col lg={6} md={6} sm={12} className="coluna d-flex flex-column justify-content-center align-items-center">
            <Image src={Arma2} alt="Imagem 2" className="img-fluid imagem-custom" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
