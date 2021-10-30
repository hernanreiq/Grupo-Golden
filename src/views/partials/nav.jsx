import React from "react";
import { Navbar } from "react-bootstrap";

export function Navigation() {
    return (
        <Navbar sticky="top" className="menu">
            <div className="container">
                <ul className="mx-auto">
                    <li><button>Sobre nosotros</button></li>
                    <li><button>Proyectos</button></li>
                    <li><button>Contacto</button></li>
                </ul>
            </div>
        </Navbar>
    )
}