import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function PortfolioFooter() {
	return (
		<Navbar fixed="bottom" bg='light' variant='light' className='justify-content-center'>
			<p>Made with <span role='img' aria-label='love'>&#128151;</span></p> 
		</Navbar>
	);
}

export default PortfolioFooter;
