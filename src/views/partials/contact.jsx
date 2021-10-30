import React, { Component } from "react";
import photoContact from "../../img/Contacto.png";

class Contact extends Component {
    render() {
        return (
            <div class="contacto">
                <div class="imagencontacto">
                    <img src={photoContact} />
                </div>
                <div class="contenedor-form">
                    <form class="form" action="C:\Users\MaReiq\Desktop\Grupo Golden\Web\PHP\contacto.php" method="POST">
                        <br />
                        <label for="nombre" class="label-form">Nombre: </label>
                        <input type="text" class="input-form" placeholder="Escriba su nombre..." id="nombre" name="nombre"
                            autocomplete="off" required />

                        <label for="asunto" class="label-form">Asunto: </label>
                        <input type="text" class="input-form" placeholder="Escriba el asunto..." id="asunto" name="asunto"
                            autocomplete="off" required />

                        <label for="correo" class="label-form">Correo electrónico: </label>
                        <input type="email" class="input-form" placeholder="Escriba su correo electrónico..." id="correo"
                            name="correo" autocomplete="off" required />

                        <label for="mensaje" class="label-form">Mensaje: </label>
                        <textarea class="textarea-form" placeholder="Escriba su mensaje aquí..." id="mensaje" name="mensaje"
                            autocomplete="off" required></textarea>

                        <input type="submit" value="Enviar mensaje" class="btn-submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;