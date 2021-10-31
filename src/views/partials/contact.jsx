import React, { Component } from "react";
import photoContact from "../../img/Contacto.png";

class Contact extends Component {
    render() {
        return (
            <section className="contact" id="section-contact">
                <div className="title-contact">
                    <img src={photoContact} alt="contact" />
                </div>
                <div className="container py-5 px-3">
                    <form className="form mx-auto" action="C:\Users\MaReiq\Desktop\Grupo Golden\Web\PHP\contacto.php" method="POST" autoComplete="off">
                        <br />
                        <label htmlFor="nombre" className="label-form">Nombre: </label>
                        <input type="text" className="input-form" placeholder="Escriba su nombre..." id="nombre" name="nombre" required />

                        <label htmlFor="asunto" className="label-form">Asunto: </label>
                        <input type="text" className="input-form" placeholder="Escriba el asunto..." id="asunto" name="asunto" required />

                        <label htmlFor="correo" className="label-form">Correo electrónico: </label>
                        <input type="email" className="input-form" placeholder="Escriba su correo electrónico..." id="correo" name="correo" required />

                        <label htmlFor="mensaje" className="label-form">Mensaje: </label>
                        <textarea className="textarea-form" placeholder="Escriba su mensaje aquí..." id="mensaje" name="mensaje" required></textarea>

                        <input type="submit" value="ENVIAR MENSAJE" className="btn-submit" />
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;