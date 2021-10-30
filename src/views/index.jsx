import React, { Component } from "react";
import { Header } from "./partials/header";
import { Navigation } from "./partials/nav";
import { Information } from "./partials/information";
import Projects from "./partials/projects";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navigation />
                <Information />
                <Projects />
            </React.Fragment>
        )
    }
}

export default Index;