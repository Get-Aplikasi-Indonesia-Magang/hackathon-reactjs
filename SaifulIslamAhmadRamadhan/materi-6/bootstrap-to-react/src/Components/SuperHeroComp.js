import { Container, Row, Col, Card } from "react-bootstrap";

const SuperHeroComp = () => {
  return (
    <Container id="superhero">
      <Row className="justify-content-center mt-4">
        <div className="text-center mb-3 trending-title">TRENDING FILMS</div>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?ultraman" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?power-ranger" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?kamen-rider" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?naruto" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?bokuno-hero-academia" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-3 overflow-hidden border-4 border-white">
            <Card.Img variant="top" src="https://source.unsplash.com/300x350?one-piece" />
            <Card.Body className="bg-dark text-white">
              <Card.Title>FIRST FILM</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SuperHeroComp;
