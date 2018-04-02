import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.sass'


class Project extends Component {
    state = {
        title: '',
        description: '',
        id: '',
        features: [],
    };

    loadProject(project_id) {
        fetch(`/api/v1/project/${project_id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    async loadFeatures(project_id) {
        this.setState({
            features: await fetch(`/api/v1/project/${project_id}/features`).then(response => response.json())
        });
    };

    async loadReleaseFeatures(project_id) {
        this.setState({
            features: await fetch(`/api/v1/project/${project_id}/features`).then(response => response.json())
        });
    };


    componentDidMount() {
        this.loadProject(this.props.match.params['project_id']);
        this.loadFeatures(this.props.match.params['project_id']);
    }

    render(){
        const { title, description, id, features } = this.state;
        if (this.state.features.length > 0){
            return(
                <div className="project">
                    <h3 className="project__title">{ title }</h3>
                    <article dangerouslySetInnerHTML={ {__html: description} } />
                    <div className="release_number"><b>Номер текущего релиза:</b> (не реализовано)</div>
                    <div className="next_release_date"><b>Ожидаемая дата следующего релиза:</b> (не реализовано)</div>
                    <h4> Фичи проекта: </h4>
                    <ul className="content-list">
                    {this.state.features.map((feature, index) => (
                        <li className="content-list__item" key={index}>
                            <Link to={`/feature/${feature.id}`}>{ feature.title }</Link>
                        </li>
                        ))}
                </ul>
                </div>
            );
        }
        else{
            return(
                <div className="Project">
                    <h4 className="project__title">{ title }</h4>
                    <article dangerouslySetInnerHTML={ {__html: description} } />
                </div>
            );
        }
    }

}


export default Project