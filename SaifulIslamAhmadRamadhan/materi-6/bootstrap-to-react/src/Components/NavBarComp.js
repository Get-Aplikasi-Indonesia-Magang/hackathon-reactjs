import { Navbar, Container, Nav } from "react-bootstrap";

const NavBarComp = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="text-white brand">MY FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white" href="#trending">
              TRENDING
            </Nav.Link>
            <Nav.Link className="text-white" href="#superhero">
              SUPERHERO
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComp;
