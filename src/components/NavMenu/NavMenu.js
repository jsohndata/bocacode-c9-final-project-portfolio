import { Container, Navbar, Nav } from "../../utilis/Bootstrap.js";

export default function NavMenu() {

  return (
    <Navbar expand={'xl'} sticky="top">
      <Container>
        <Navbar.Brand href="/"><h1>C-9: Portfolio</h1></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar" />

        <Navbar.Collapse id="basic-navbar">
          <Nav className="me-auto">
            <Nav.Link href="https://photos.app.goo.gl/53iZfYyER9xnRaHX9" target="_blank">Gallery</Nav.Link>
            <Nav.Link href="https://bocacode.com/candidates" target="_blank">Boca Candidate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
