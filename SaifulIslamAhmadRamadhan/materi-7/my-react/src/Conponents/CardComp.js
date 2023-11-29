import { Col, Card } from "react-bootstrap";

const CardComp = () => {
  return (
    <>
      <Col md={4} className="mb-3">
        <Card className="card">
          <Card.Img variant="top" src="https://source.unsplash.com/300x350?ultraman" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComp;
