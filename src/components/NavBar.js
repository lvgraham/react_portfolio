import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
	return (
		<Navbar bg='light' variant='light'>
			<Navbar.Brand href='#home'>Lia Graham</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='#home'>Home</Nav.Link>
				<Nav.Link href='#features'>Projects</Nav.Link>
				<Nav.Link href='#pricing'>Resume</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
