
import React from 'react'
import { Link } from 'react-router-dom'


export default ({ project }) => (
    <div>
        <h4>
            <Link to={`/project/${project.id}`}>{ project.title }</Link>
        </h4>
        <div>{ project.description }</div>
    </div>
)
