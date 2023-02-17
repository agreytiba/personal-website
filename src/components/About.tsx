import React from 'react'
import {Row,Col,Card,Container} from "react-bootstrap"
const About = () => {
 
  return (
    <Container>
      <style type='text/css'>
        {`
        .about-card{
          background-color: #444;
          color:tomato;
        }
        .subtitle{
          color:white;
        }
        .fs-title{
          font-size:60px;
        }
        .card-small{
          height: 120px;
        }
        `}
      </style>
      <Row className='text-light text-center mb-5 mt-5'>
          <Col className='about-card pt-5 pb-5 text-center mb-2' md={6} style={{height:"250px"}}> 
              <Card.Title className='fs-title'>12</Card.Title>
              <Card.Text className='subtitle'>Years Experience</Card.Text>
             
          </Col>
          <Col  md={3}>
              <Card className='about-card card-small p-4 mb-2'>
                <Card.Subtitle className='fs-2'>60+</Card.Subtitle>
              <Card.Text className='subtitle'>Client</Card.Text>   
              </Card>
              <Card className='about-card card-small p-4 mb-2'>
                <Card.Title className='fs-2'>122+</Card.Title>
              <Card.Text className='subtitle'>completed projects</Card.Text>   
              </Card>
          
          </Col>
          <Col md={3}>
              <Card className='about-card card-small p-4 mb-2'>
                <Card.Subtitle className='fs-2'>08</Card.Subtitle>
              <Card.Text className='subtitle'>ongoing project</Card.Text>   
              </Card>
              <Card className='about-card  card-small p-4 mb-2'>
                <Card.Subtitle className='fs-2'>10</Card.Subtitle>
              <Card.Text className='subtitle'>achievement</Card.Text>   
              </Card>
             
          
          </Col>
          
       

      </Row>
       
     
    </Container>
  )
}

export default About