import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarport() {
  return (
    <div>
      {/* <header> */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#About me">About Me</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      {/* </header> */}
    </div>

  )
}

export default Navbarport