import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
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
          <Link to="/" className="text-color link-style" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-80px' }}>Pagina Inicial</Link>
          <Link to="/sobre" className="text-color link-style" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-80px' }}>Sobre Nós</Link>
          <Link to="/contato" className="text-color link-style" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-80px' }}>Contato</Link>
          <NavDropdown title="Parceiros" id="basic-nav-dropdown" className="custom-dropdown-item custom-dropdown-menu" style={{ fontSize: '30px', fontFamily: 'Korataki, serif', marginLeft: '30px', marginTop: '-86px'}}>
            <Link to="/parceiro/obelico" className="text-color link-style">OBelico</Link>
            <NavDropdown.Divider />
            <Link to="/parceiro/cabana-das-armas" className="text-color link-style">Cabana Das Armas</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Menubar;