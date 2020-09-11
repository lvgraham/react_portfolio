import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'

function ControlledCarousel() {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://i.imgur.com/ZLuMhhp.png'
						alt='Burger Time!'
					/>
					<Carousel.Caption>
						<p>
							An app to help you keep track of the delicious burgers you've
							eaten.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://i.imgur.com/etFVO5z.jpg'
						alt='Campsite Finder'
					/>

					<Carousel.Caption>
						<p>A website to help you find campsites within a selected state.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://i.imgur.com/nZtJof5.png'
						alt='Note Taker'
					/>

					<Carousel.Caption>
						<p> A one stop shop to house all of your bookmarks.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default ControlledCarousel;
