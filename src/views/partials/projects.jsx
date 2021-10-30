import React, { Component } from "react";
import photoProjects from "../../img/Proyectos en desarrollo.png";

class Projects extends Component {
    render() {
        return (
            <div class="proyectosdesarrollo">
                <div class="imagenproyectos">
                    <img src={photoProjects} />
                </div>
                <div class="Proyectos">
                    <div class="LoteriaGolden">
                        <img src="Fotos/Main/Loteria Golden.png" />
                        <button id="btn-abrir-popup-loteriagolden">LOTERÍA GOLDEN</button>
                    </div>
                    <div class="EarnGoldenMoney">
                        <img src="Fotos/Main/Earn Golden Money.png" />
                        <button id="btn-abrir-popup-earngoldenmoney">EARN GOLDEN MONEY</button>
                    </div>
                    <div class ="proximamente1">
                        <img src="Fotos/Main/Proximamente 1.png" />
                        <button>PRÓXIMAMENTE</button>
                    </div>
                    <div class ="proximamente2">
                        <img src="Fotos/Main/Proximamente 2.png" />
                        <button>PRÓXIMAMENTE</button>
                    </div>
                    <div class ="proximamente3">
                        <img src="Fotos/Main/Proximamente 3.png" />
                        <button>PRÓXIMAMENTE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;