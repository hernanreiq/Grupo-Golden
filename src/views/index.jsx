import React, { Component } from "react";
import { Header } from "./partials/header";
import { Navigation } from "./partials/nav";
import { Information } from "./partials/information";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navigation />
                <Information />
            </React.Fragment>
        )
    }
}

export default Index;