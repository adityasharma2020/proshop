import React from 'react'; /*rafce shortcode for this template */
import { LinkContainer } from 'react-router-bootstrap';
import {Container,Navbar,Nav} from 'react-bootstrap';

const Header = () => {
  return <header>
     
     <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to= '/'>
      <Navbar.Brand href="/">Proshop</Navbar.Brand>
    </LinkContainer>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="auto">

        <LinkContainer to="/cart">
        <Nav.Link href="#/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
        </LinkContainer>
        
        <LinkContainer to="/login">
         <Nav.Link href="#/login"><i className="fas fa-user"></i> Sign in</Nav.Link>
        </LinkContainer>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </header>;
};

export default Header;
