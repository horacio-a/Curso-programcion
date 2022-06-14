import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">CriptoWord</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/nosotros">¿Quienes somos?</Nav.Link>
            <Nav.Link href="/contacto">Contacta con nosotros</Nav.Link>

            <NavDropdown title="Nuestros servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mineria">Mineria</NavDropdown.Item>
              <NavDropdown.Item href="/staking">
                Staking
              </NavDropdown.Item>
              <NavDropdown.Item href="/NFT">NFT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/criptocard">
               Aproximamente cryptocard
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>s
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;