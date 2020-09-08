import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar bg='light' variant='light'>
			<Navbar.Brand href='#home'>Lia Graham</Navbar.Brand>
			<Nav className='mr-auto'>
				<ul>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/project'>
					<li>Projects</li>
				</Link>
				<Link to='/resume'>
					<li>Resume</li>
				</Link>
				</ul>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
