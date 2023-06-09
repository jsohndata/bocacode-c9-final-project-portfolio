import {  Navbar, Nav } from "../../utilis/Bootstrap.js";

export default function NavMenu() {

  return (
    <Navbar expand={'sm' |  'xxl'} >
        <Navbar.Brand><h1>C-9 <span>Portfolio</span></h1></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar" />

        <Navbar.Collapse id="basic-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="https://photos.app.goo.gl/53iZfYyER9xnRaHX9" target="_blank">Photo Gallery </Nav.Link>
            <Nav.Link href="https://bocacode.com/candidates" target="_blank">BocaCode Candidates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
