import {Card, Row,Col,Button} from 'react-bootstrap';

function Header() {
  return (
    <Row className='justify-content-center   align-items-center mb-5' >
      <Col md={6}>
        <Card.Img variant="top" src="/img/header.png" style={{ width: "100%" }} />
      </Col>
     
      <Col className='text-light' md={6} style={{ lineHeight: "2.5" }}>
        <Card.Subtitle className='fs-5 text-danger'>hello, I am agrey</Card.Subtitle>
        <Card.Title className='text-light fs-1'>Visual Desinger</Card.Title>
        
        <Card.Text  style={{maxWidth:"500px"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger"className='button' style={{height:"50px"}}>About Me</Button>
      </Col>
     
      
    </Row>
  );
}

export default Header;