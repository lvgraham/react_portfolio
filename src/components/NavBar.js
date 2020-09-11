import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<nav>
			<h3>Lia Graham</h3>
			<ul className='nav-links'>
				<Link to='/react_portfolio'>
					<li>Home</li>
				</Link>
				<Link to='/project'>
					<li>Projects</li>
				</Link>
				<Link to='/resume'>
					<li>Resume</li>
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
