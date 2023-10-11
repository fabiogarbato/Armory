import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Logo from '../../images/logo.png';
import './menubar.css';

function Menubar() {

  return (
    <Navbar expand="lg" className="background-color" style={{ height: '220px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Armory" className='img_logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-menu-icon"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to="/" className="text-color link-style custom-link">Pagina Inicial</Link>
          <Link to="/sobre" className="text-color link-style custom-link">Sobre Nós</Link>
          <Link to="/contato" className="text-color link-style custom-link">Contato</Link>
            <NavDropdown title={<span style={{ color: '#ff7300' }}>Parceiros</span>} id="basic-nav-dropdown" className="custom-dropdown-item custom-dropdown-menu custom-link-menu" style={{ zIndex: 9999 }}>
              <Link to="https://obelico.com.br" target="_blank" className="text-color link-style custom-link-Submenu">OBelico</Link>
              <NavDropdown.Divider />
              <Link to="https://www.cabanadasarmas.com.br" target="_blank" className="text-color link-style custom-link-Submenu">Cabana Das Armas</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;