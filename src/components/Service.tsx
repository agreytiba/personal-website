import { Card, Col, Row } from 'react-bootstrap';
import { FaClipboardList } from 'react-icons/fa';
import { BsFillCameraFill } from "react-icons/bs"
import { AiOutlineArrowRight } from "react-icons/ai"
import {TbBrandAdobe} from "react-icons/tb"
import contents from '../Data/services.json';
function Service() {
	return (
		<Row className="mb-5 mt-5 justify-content-center align-items-center">
			{contents.map((content) => (
				<Col key={content.id} className={content.cname}>
					<Card
						bg={content.bground.toLowerCase()}
						key={content.bground}
						text={content.bground.toLowerCase() === 'light' ? 'dark' : 'white'}
						style={{ minWidth:"250px", minHeight: '300px', backgroundColor: '#444' }}
						className="mb-2"
					>
						<Card.Header className="text-center p-4">
							{content.icon === 'board' && <FaClipboardList style={{ color: 'white' }} className="fs-2 " />}
							{content.icon === 'camera' && <BsFillCameraFill style={{ color: 'tomato' }} className="fs-2" />}
							{content.icon === 'branding' && <TbBrandAdobe style={{ color: 'tomato' }} className="fs-2" />}
						</Card.Header>
						<Card.Body>
							<Card.Title className="">{content.title}</Card.Title>
							<Card.Text>{content.desc.slice(0, 50)}</Card.Text>
							{content.icon === 'branding' && <Card.Link style={{ color: "red", textDecoration: "none", fontSize: "14px" }}>Know More  <AiOutlineArrowRight /></Card.Link>}
							{content.icon === 'camera' && <Card.Link style={{ color: "tomato", textDecoration: "none", fontSize: "14px" }}>Know More  <AiOutlineArrowRight /></Card.Link>}
							{content.icon === 'board' && <Card.Link style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Know More  <AiOutlineArrowRight /></Card.Link>}
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Service;
