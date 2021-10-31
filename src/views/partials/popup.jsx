import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopUp extends Component {
    render() {
        return (
            <Modal show={this.props.show} size="lg" centered>
                <Modal.Header>
                    <h2 className="mx-auto mb-0">{this.props.project.name}</h2>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-7 my-2">
                            <img src={this.props.photo} alt={this.props.project.name} className="popup-img shadow" />
                        </div>
                        <div className="col-md-5 my-2">
                            <p><b>Fecha de lanzamiento: </b>{this.props.project.releaseDate ? this.props.project.releaseDate : 'Sin definir'}</p>
                            <p><b>Estado actual: </b>{this.props.project.status}</p>
                            <p><b>Tipo de negocio: </b>{this.props.project.businessType}</p>
                            <p><b>Temática: </b>{this.props.project.topic}</p>
                            <p><b>Website: </b>{this.props.project.url}</p>
                            <p><b>Visitas al sitio: </b>{this.props.project.visits}</p>
                        </div>
                    </div>
                    <h4 className="text-center mt-3">Historia</h4>
                    <p className="popup-history">{this.props.project.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PopUp;