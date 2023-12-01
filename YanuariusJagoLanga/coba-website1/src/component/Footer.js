import { Navbar, Container } from "react-bootstrap";

const Footer = ()=>{
    return(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">SMPN 3 Boawae</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Copyright Allright reserved<a href="#login" className="text-decoration-none">2023</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default Footer;