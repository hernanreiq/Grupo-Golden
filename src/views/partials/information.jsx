import React from "react";
import photoInformation from "../../img/Sobre Nosotros.png";

export function Information() {
    return (
        <section className="information">
            <div className="title title-information">
                <img src={photoInformation} alt="title information" />
            </div>
            <div className="text-justify py-5 h5 px-5">
                <div className="container">
                    <p>
                        Grupo Golden nace de la necesidad de querer emprender, para de esta manera poder crecer a nivel ético y
                        profesional.
                    </p>
                    <p>
                        Nosotros somos un grupo de amigos que por situaciones de la vida, coincidimos al elegir la misma carrera
                        universitaria de Ingeniería en Sistemas y Computación.
                    </p>
                    <p>
                        Es por ello que estando en los tramos finales de la carrera, decidimos unirnos para motivarnos a
                        intentar emprender nuevas propuestas.
                    </p>
                </div>
            </div>
        </section>
    )
}