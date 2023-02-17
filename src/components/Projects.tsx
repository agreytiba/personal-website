import React from 'react'
import { Row, Card, Col, Container, Button } from "react-bootstrap"
import {AiOutlineArrowRight} from "react-icons/ai"
import  projectsInfo from "../Data/projects.json"
const Projects = () => {
  return (

    <Container className='text-light '>
      <Row className='mb-2 align-items-center'>
        <Col>
         <h2>FEATURED PROJECTS</h2>
     <p>Lorem ipsum dolor sit amet.</p>
        </Col>
        <Col md={{ span: 1 ,offset:2}}>
         <Button className='bg-danger me-1 button ' style={{border: "none", width:"100%",minWidth:"100px",height:"50px"}}>VIEW ALL</Button>
        </Col>
      </Row>
     
    <Row>
      
      {
        projectsInfo.map(project =>
          <Col md={6} className="bg-dark mb-4">
            <Card className='text-light rounded' style={{border:"none"}}>
              <Card.Header style={{ backgroundColor:"#444", height: "350px"}} className="d-flex justify-content-center align-items-center rounded">
                <Card.Img src={project.img}  style={{width:"100%", height:"300px"}} />
              </Card.Header>
            
            <Card.Body className='bg-dark'>
              <Card.Subtitle className='fs-3 fw-500' style={{textTransform:"capitalize"}}>{project.name}</Card.Subtitle>
                <Card.Text>{project.desc.slice(0, 20)}</Card.Text>
                <Card.Link style={{color:"tomato",textDecoration:"none",fontSize:"14px"}}>Know More  <AiOutlineArrowRight/></Card.Link>
           </Card.Body>
            
          </Card>
          </Col> 
        )
      }
      </Row>
      <Row className=' mb-5 mt-5 py-5 align-items-center'style={{backgroundColor:"#333"}}>
        <Col className="mb-3">
        <Card.Title className='fs-2' style={{maxWidth:"400px"}}>
          Let's work together on  your next project
        </Card.Title>
        <Card.Text className='mt-2' style={{maxWidth:"450px",lineHeight:"2",fontSize:"14px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum ratione vero. Perferendis maiores eveniet expedita quos veritatis voluptatum eius.
        </Card.Text>
        </Col >
        <Col md={{ span: 2 }} className="mb-4">
        <Button className='justify-self-end bg-danger button' style={{border:"none",width:"100%",height:"50px"}}>Contact</Button>
        </Col>
      </Row>
    
     </Container>
  )
}

export default Projects