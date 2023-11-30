import CardComp from "../Conponents/CardComp";
import { Container, Row } from "react-bootstrap";

const ContainerCard = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </Row>
    </Container>
  );
};

export default ContainerCard;
