
import {Navbar as NavbarBs , Nav, Container} from 'react-bootstrap';
import {FaWolfPackBattalion} from "react-icons/fa"
function Navbar() {
  return (
 <NavbarBs collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarBs.Brand href="#home"className='text-danger fs-2'><FaWolfPackBattalion/></NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBs.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;