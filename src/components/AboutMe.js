import React from 'react';
import { Image, Box, Text } from 'grommet';

function AboutMe() {
	return (
		<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
			<Box
				width='medium'
				background='light-2'
				elevation='small'
				align='center'
				justify='center'
			>
				<Box height='medium' width='medium' margin='medium'>
					<Image fit='cover' alignSelf='center' src='../../public/assets/images/portfolio2.JPG' />
				</Box>
				<Text margin='medium'>
					I am an ambitious person with a background in customer service. I am
					just starting my journey as a full-stack web developer, and my
					background working with customers on an e-commerce platform is helpful
					in desigining and implementing beautiful, dynamic, user-friendly
					websites.
					<br />
					<br />
					Though just starting on this path, I am passionate, focused, and
					excited to learn.
				</Text>
			</Box>
		</Box>
	);
}

export default AboutMe;