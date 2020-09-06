import React from 'react';
import { Box, Image } from 'grommet';

function AboutMe() {
	return (
		<Box direction='row'>
			<Box height='medium' width='medium' margin='medium'>
				<Image fit='cover' src='../components/images/portfolio1.jpg' />
			</Box>
			<Box margin='medium'>
				I am an ambitious person with a background in customer service. I am
				just starting my journey as a full-stack web developer, and my
				background working with customers on an e-commerce platform is helpful
				in desigining and implementing beautiful, dynamic, user-friendly
				websites. 
                <br />
                <br />
                Though just starting on this path, I am passionate, focused,
				and excited to learn.
			</Box>
		</Box>
	);
}

export default AboutMe;
