import React from 'react';
import { Box, Grommet } from 'grommet';
import NavBar from './components/NavBar';
import PortfolioBody from './components/PortfolioBody';
import Footer from './components/Footer'

const theme = {
	global: {
		colors: {
			brand: '#228BE6',
		},
		font: {
			family: 'Roboto',
			size: '18px',
			height: '20px',
		},
	},
};

function App() {
	return (
		<Grommet theme={theme} full>
			<Box fill>
				<NavBar />
				<PortfolioBody />
        <Footer />
			</Box>
		</Grommet>
	);
}

export default App;
