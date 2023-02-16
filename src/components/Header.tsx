import {Card, Row,Col,Button} from 'react-bootstrap';

function Header() {
  return (
    <Row className='justify-content-center w-80  align-items-center mb-5' >
      <Col md={6}>
        <Card.Img variant="top" src="/img/header.png" style={{ width: "300px" }} />
      </Col>
     
      <Col className='text-light' md={6}>
        <Card.Title className='text-danger'>hello, I am agrey</Card.Title>
        <Card.Text  style={{maxWidth:"500px"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">About Me</Button>
      </Col>
     
      
    </Row>
  );
}

export default Header;