import React from "react";
import Logo from "../../img/Logo.png";

export function Header() {
    return (
        <header>
            <div className="container py-5">
                <img src={Logo} alt="Logo de Grupo Golden" className="logo" />
            </div>
        </header>
    )
}