import React, { Component } from "react";
import ProjectsJSON from "../../json/projects.json";
import ProjectTemplate from "../templates/project";
import { ComingSoonTemplate } from "../templates/coming-soon";

class Projects extends Component {
    state = {
        projects: ProjectsJSON
    }
    render() {
        return (
            <section className="projects">
                <div id="section-projects" className="react-scroll"></div>
                <div className="title-projects">
                    <h2 className="section-title section-projects">PROYECTOS EN DESARROLLO</h2>
                </div>
                <div className="projects">
                    <div className="container p-3">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                            {this.state.projects.map((project, i) => {
                                let photo = require(`../../img/projects/${project.fileName}`);
                                return (
                                    <ProjectTemplate
                                        key={i}
                                        photo={photo.default}
                                        project={project}
                                        showModal={this.props.showModal}
                                    />
                                )
                            })
                            }
                            {ComingSoonTemplate(ProjectsJSON.length)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;