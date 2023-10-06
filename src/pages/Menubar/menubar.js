import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import './menubar.css';

function Menubar() {

  return (
    <Navbar expand="lg" className="background-color" style={{ height: '300px' }}>
      <Container>
      <Navbar.Brand href="#home">
        <Image src="../../images/logo.png" alt="Armory" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-menu-icon"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="text-color" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-90px' }}>Pagina Inicial</Nav.Link>
          <Nav.Link href="#link" className="text-color" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-90px' }}>Sobre Nós</Nav.Link>
          <Nav.Link href="#contato" className="text-color" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-90px' }}>Contato</Nav.Link>
          <NavDropdown title="Parceiros" id="basic-nav-dropdown" className="custom-dropdown-item" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-90px'}}>
            <NavDropdown.Item href="#action/3.1" className="text-color">OBelico</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="text-color">
                Cabana Das Armas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Menubar;