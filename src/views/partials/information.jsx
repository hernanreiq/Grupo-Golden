import React from "react";
import photoInformation from "../../img/Sobre Nosotros.png";

export function Information() {
    return (
        <div class="sobrenosotros">
            <div class="fotosobrenosotros">
                <img src={photoInformation} />
            </div>
            <div class="sobrenosotrosdescripcion">
                <p>
                    Grupo Golden nace de la necesidad de querer emprender, para de esta manera poder crecer a nivel ético y
                    profesional.

                    <br /><br />

                    Nosotros somos un grupo de amigos que por situaciones de la vida, coincidimos al elegir la misma carrera
                    universitaria de Ingeniería en Sistemas y Computación.

                    <br /><br />

                    Es por ello que estando en los tramos finales de la carrera, decidimos unirnos para motivarnos a
                    intentar emprender nuevas propuestas.
                </p>
            </div>
        </div>
    )
}