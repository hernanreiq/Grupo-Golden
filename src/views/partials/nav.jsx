import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Navigation extends Component {
    navScroll = (section) => {
        if (section === "information") {
            document.getElementById('section-information').scrollIntoView();
        } else if (section === "projects") {
            document.getElementById('section-projects').scrollIntoView();
        } else if (section === "contact") {
            document.getElementById('section-contact').scrollIntoView();
        }
    }
    render() {
        return (
            <Navbar sticky="top" className="menu">
                <div className="container">
                    <ul className="mx-auto">
                        <li><button onClick={() => { this.navScroll('information') }}>Sobre nosotros</button></li>
                        <li><button onClick={() => { this.navScroll('projects') }}>Proyectos</button></li>
                        <li><button onClick={() => { this.navScroll('contact') }}>Contacto</button></li>
                    </ul>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;