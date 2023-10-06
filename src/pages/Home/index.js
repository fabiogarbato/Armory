import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

function Home() {

  return (
    <Navbar expand="lg" className="bg-primary" style={{ height: '150px' }}>
      <Container>
      <Navbar.Brand href="#home">
        <Image src="../../images/logo.png" /> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" style={{ fontSize: '30px', fontFamily: 'Korataki, serif' }}>Home</Nav.Link>
          <Nav.Link href="#link" style={{ fontSize: '30px' }}>Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{ fontSize: '30px' }}>
            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Home;
