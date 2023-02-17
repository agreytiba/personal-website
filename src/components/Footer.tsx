import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { Row, Col, Container } from 'react-bootstrap';
const Footer = () => {
	return (
		<Container>

		
		<Row
			className="bg-dark justify-content-center align-items-center fs-3 mb-5  text-danger"
		>
			<Col md={2} >
				<BsFacebook />
			</Col >
			<Col md={2}>
				<AiFillInstagram />
			</Col>
			<Col md={2}>
				<AiFillYoutube />
			</Col>
			<Col md={2}>
				<AiFillGithub />
			</Col>
			<Col md={2}>
				<AiFillTwitterCircle />
			</Col>
			
			</Row>
			<div className='text-center'>
			
          <p className='fs-3 text-light'> Created by <span className='text-danger'>Grey Coder</span></p>
        </div>
</Container>
	);
};

export default Footer;
