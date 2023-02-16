import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGithub, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { Row, Col, Container } from 'react-bootstrap';
const Footer = () => {
	return (
		<Row
			className="bg-dark justify-content-center align-items-center fs-3 mb-4 py-5"
			style={{ maxWidth: '400px', color: 'tomato' }}
		>
			<Col>
				<BsFacebook />
			</Col>
			<Col>
				<AiFillInstagram />
			</Col>
			<Col>
				<AiFillYoutube />
			</Col>
			<Col>
				<AiFillGithub />
			</Col>
			<Col>
				<AiFillTwitterCircle />
			</Col>
		</Row>
	);
};

export default Footer;
