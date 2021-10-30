import React, { Component } from "react";

class ProjectTemplate extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col my-2">
                    <div className="project-container p-3">
                        <img src={this.props.photo} alt={this.props.project.name} className="shadow"/>
                        <button className="btn-project my-3 shadow">VER DETALLES</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProjectTemplate;