import Menubar from '../Menubar/menubar'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';

function Home() {

  return (
    <div>
      <Menubar />
      <Container fluid>
        <Row className="body flex-wrap">
          <Col md={6} sm={12} xs={12} className="coluna1 d-flex justify-content-center align-items-center">
            <Container className="container-imagem-simulada">
              <p className="imagem-texto">Nossos Cursos</p>
            </Container>
          </Col>
          <Col md={6} sm={12} xs={12} className="coluna2 d-flex justify-content-center align-items-center flex-column">
            <Container className="container-imagem-simulada2" >
              <p className="imagem-texto">Nossa Estrutura</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
