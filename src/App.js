import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import projects from './projects.json';
import About from './pages/AboutPage';
import Project from './pages/ProjectPage';
import Resume from './pages/ResumePage';

class App extends Component {
	state = {
		projects,
	};

	render() {
		return (
			<Router>
				<div>
					{/* main page */}
					<NavBar />
					<Switch>
            <Route path='/' exact component={About} />
						<Route path='/project' component={Project} />
						<Route path='/resume' component={Resume} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
