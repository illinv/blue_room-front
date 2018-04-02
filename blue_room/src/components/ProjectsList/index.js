import React, {Component} from 'react'
import ProjectItem from '../ProjectItem'

import './style.sass'


class ProjectsList extends React.Component {
    state = {
        projects: []
    };

    async loadProjects() {
        this.setState({
            projects: await fetch("/api/v1/project/").then(response => response.json())
        });
    };

    componentDidMount() {
        this.loadProjects();
    };

    render() {
        return (
            <ul className="content-list">
                {this.state.projects.map((project, index) => (
                    <li className="content-list__item" key={index}>
                        <ProjectItem project={project} />
                    </li>
                    ))}
            </ul>
        )
    }
}


export default ProjectsList
