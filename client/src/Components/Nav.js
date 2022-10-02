import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import Theme from '../Theme';

function CollapsibleExample() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav-bar'>
      <Container >
        <Navbar.Brand href="/"><h3>TravelX</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown align={"end"} title="Edit" id="collasible-nav-dropdown">
              <LinkContainer to="/DMV">
                <NavDropdown.Item>Department of Motor Vehicles</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/SocialSecurity">
                <NavDropdown.Item>Social Security</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/DepartmentOfState">
                <NavDropdown.Item>Department of State</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Theme/>
    </Navbar>
  );
}

export default CollapsibleExample;