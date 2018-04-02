import React, { Component } from 'react'
import { Route, Link } from 'react-router'
import { BrowserRouter} from 'react-router-dom'
import ProjectsList from '../ProjectsList'
import Project from '../Project'
import Feature from '../Feature'

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="/projects/" component={ProjectsList} />
                    <Route path="/project/:project_id" component={Project} />
                    <Route path="/feature/:feature_id" component={Feature} />
                </div>
            </BrowserRouter>
        );
    }
}


export default App