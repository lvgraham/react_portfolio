import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import Wrapper from '../components/Wrapper'
import projects from '../projects.json';

class Project extends Component {
	state = {
		projects,
	};

	render() {
		return (
			<Wrapper>
				{this.state.projects.map((project) => (
					<ProjectCard
						id={project.id}
						key={project.id}
						name={project.name}
						image={project.image}
						description={project.occupation}
					/>
				))}
			</Wrapper>
		);
	}
}

export default Project;
