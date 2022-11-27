import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import Theme from '../Theme';
import Button from '@mui/material/Button';
import { useContext } from 'react'
import { AppContext } from "../App";


function Navigation(props) {
  const{signedIn} = useContext(AppContext)
  return (
    <Navbar fixed = "top" collapseOnSelect expand="lg" variant="light" className='nav-bar'>
      <Container className='navbar-container'>
        <LinkContainer to = '/'>
          <Navbar.Brand>
              <div className="nav-seal"/>
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to = '/'><Navbar.Brand><h3 className='nav-title'>TravelX</h3></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{color: '#680101'}}>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
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
            {signedIn?  <Button 
              disableElevation
              id='signout-btn' 
              variant='contained'
              color='success'
              size='large'
              style={{padding: ".5rem",
                      textTransform: "capitalize"}}
              onClick={props.logout} >Logout
          </Button>:''}
          </Nav>
          <Theme/>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Navigation;