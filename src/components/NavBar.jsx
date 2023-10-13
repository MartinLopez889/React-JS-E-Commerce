import React from "react"
import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

 
function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Todo DBZ!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/Pop">Pop!</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Keychain">Keychain</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Tees">Tees</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="position-absolute top-50 end-0 translate-middle bg-success p-2 text-white border border-black border-2 rounded">
      <CartWidget /></div>
    </Navbar>
  );
}


export default NavBar;
