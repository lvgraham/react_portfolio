import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Box, Grommet } from 'grommet';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ProjectPreview from './components/ProjectPreview';
import Footer from './components/Footer';
import projects from './projects.json';

class App extends Component {
	state = {
		projects,
	};

	render() {
		return (
			<div>
				<NavBar />
				<AboutMe />
        <ProjectPreview />
				<Footer />
			</div>
		);
	}
}

export default App;
