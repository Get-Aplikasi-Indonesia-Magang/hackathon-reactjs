import { Navbar, Container, InputGroup, Form, Button } from "react-bootstrap";

const NavComp = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="">
        <Container className="d-flex justify-content-center align-items-center">
          <Navbar.Brand href="/" className=" title">
            MY FILMS
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center align-items-center">
          <InputGroup>
            <Form.Control placeholder="Search films title..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComp;
