import React, { Component } from "react";
import { Header } from "./partials/header";
import { Navigation } from "./partials/nav";
import { Information } from "./partials/information";
import Projects from "./partials/projects";
import Contact from "./partials/contact";
import { Footer } from "./partials/footer";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navigation />
                <Information />
                <Projects />
                <Contact />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;