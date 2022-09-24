import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav-bar'>
      <Container>
        <Navbar.Brand href="#home"><h3>TravelX</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown align={"end"} title="Edit" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/addPerson">Add a New Person</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;