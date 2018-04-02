import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Feature extends Component {
    state = {
        title: '',
        description: '',
        id: '',
        is_release: null,
        bugs: [],
        test_cases: []
    };

    LoadFeature(feature_id) {
        fetch(`/api/v1/feature/${feature_id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    async loadBugs(feature_id) {
        this.setState({
            bugs: await fetch(`/api/v1/bug/?feature=${feature_id}`).then(response => response.json())
        });
    };

    async loadTestCases(feature_id) {
        this.setState({
            test_cases: await fetch(`/api/v1/test_case/?feature=${feature_id}`).then(response => response.json())
        });
    };


    componentDidMount() {
        this.LoadFeature(this.props.match.params['feature_id']);
        this.loadBugs(this.props.match.params['feature_id']);
        this.loadTestCases(this.props.match.params['feature_id']);
    }

    render() {
        const {title, description, id, features} = this.state;

        return (
            <div className="feature">
                <h4 className="feature__title">{ title }</h4>
                <article dangerouslySetInnerHTML={ {__html: description} }/>
                <h3> Баги связной фичи: </h3>
                <ul className="content-list">
                    {this.state.bugs.map((bug, index) => (
                        <li className="content-list__item" key={index}>
                            <b> { bug.title } </b>
                            <div> { bug.description } </div>
                            <div> { bug.is_fixed.toString() } </div>
                        </li>
                    ))}
                </ul>
                    <h3> Тест-кейсы связной фичи: </h3>
                    <ul className="content-list">
                        {this.state.test_cases.map((test_case, index) => (
                            <li className="content-list__item" key={index}>
                                { test_case.case }
                            </li>
                        ))}
                    </ul>
            </div>
    );
    }

    }


    export default Feature