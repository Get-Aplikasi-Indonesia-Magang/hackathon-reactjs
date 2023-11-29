import { Container, Row, Col, Button } from "react-bootstrap";

const IntroComp = () => {
  return (
    <div className="title">
      <Container className="d-flex text-center justify-content-center align-items-center mt-4">
        <Row className="mt-4">
          <Col>
            <div className="intro">Welcome to our movie streaming site!</div>
            <div className="intro">Enjoy Your Time</div>
            <div>
              <Button variant="light">More List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroComp;
