import React from 'react';
import { Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import './AboutMe.css';

function AboutMe() {
	return (
		<Jumbotron fluid>
			<Container>
				<Row>
					<Col xs={4}>
						<Image className='profile-image' alt='Photo of Lia Graham' src={require('../images/portfolio2.JPG')} roundedCircle />
					</Col>
					<Col className='aboutMe'>
						<p>
							I am an ambitious person with a background in customer service. I
							am just starting my journey as a full-stack web developer, and my
							background working with customers on an e-commerce platform is
							helpful in desigining and implementing beautiful, dynamic,
							user-friendly websites.
							<br />
							<br />
							Though just starting on this path, I am passionate, focused, and
							excited to learn.
						</p>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
}

export default AboutMe;
