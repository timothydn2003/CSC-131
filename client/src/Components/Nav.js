import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import {Link} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav-bar'>
      <Container>
        <Navbar.Brand><Link to={'/'}><h3>TravelX</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link><Link to = {'/'}>Home</Link></Nav.Link>
                <NavDropdown align={"end"} title="Edit" id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to={'/addPerson'}>Add a New Person</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;