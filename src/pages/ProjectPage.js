import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';
import './ProjectPage.css'

class Project extends Component {
	state = {
		projects,
	};

	render() {
		return (
			<div className="wrapper">
				{this.state.projects.map((project) => (
					<ProjectCard
						id={project.id}
						key={project.id}
						name={project.name}
						image={project.image}
						description={project.description}
					/>
				))}
			</div>
		);
	}
}

export default Project;
