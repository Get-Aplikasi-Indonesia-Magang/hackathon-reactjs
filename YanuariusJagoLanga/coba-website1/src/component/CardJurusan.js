import {Card, Button} from 'react-bootstrap';

const CardJurusan = (props)=>{
    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          {props.deskripsi}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}
export default CardJurusan;