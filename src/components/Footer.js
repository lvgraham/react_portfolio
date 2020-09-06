import React from 'react';
import { Anchor, Footer, Text } from 'grommet';

function PortfolioFooter() {
	return (
		<Footer background='brand' pad='medium'>
			<Text>Copyright</Text>
			<Anchor label='About' />
		</Footer>
	);
}

export default PortfolioFooter;
