import React from 'react';
import { Box } from 'grommet';
import AboutMe from './AboutMe'

function PortfolioBody() {
	return (
		<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
			<Box flex align='start' justify='start'>
				<AboutMe />
			</Box>
			{/* <Box
				flex
				width='medium'
				background='light-2'
				elevation='small'
				align='center'
				justify='center'
			>
				sidebar
			</Box> */}
		</Box>
	);
}

export default PortfolioBody;