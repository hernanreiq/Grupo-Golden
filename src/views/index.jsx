import React, { Component } from "react";
import { Header } from "./partials/header";
import { Navigation } from "./partials/nav";
import { Information } from "./partials/information";
import Projects from "./partials/projects";
import Contact from "./partials/contact";
import { Footer } from "./partials/footer";
import PopUp from "./partials/popup";

class Index extends Component {
    state = {
        photo: '',
        projectData: {},
        showModal: false
    }
    showModal = (photo, data) => {
        this.setState({
            photo: photo,
            projectData: data,
            showModal: true
        });
    }
    hideModal = () => {
        this.setState({
            photo: '',
            projectData: {},
            showModal: false
        });
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navigation />
                <Information />
                <Projects showModal={this.showModal} />
                <Contact />
                <Footer />
                {this.state.showModal &&
                    <PopUp 
                        show={this.state.showModal}
                        photo={this.state.photo}
                        project={this.state.projectData}
                        hideModal={this.hideModal}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Index;