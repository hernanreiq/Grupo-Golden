import React, { Component } from "react";

class Contact extends Component {
    nameRef = React.createRef();
    subjectRef = React.createRef();
    emailRef = React.createRef();
    messageRef = React.createRef();

    sendMessage = (e) => {
        e.preventDefault();
        var data = {
            id: 'hernandemure1202',
            domain: 'gmail.com',
            subject: this.subjectRef.current.value,
            body: this.messageRef.current.value,
            name: this.nameRef.current.value,
            email: this.emailRef.current.value
        }
        window.open(`mailto:${data.id}@${data.domain}?subject=${data.subject}&body=Nombre: ${data.name} %0AEmail: ${data.email} %0AMensaje: ${data.body}`);
    }

    render() {
        return (
            <section className="contact">
                <div id="section-contact" className="react-scroll"></div>
                <div className="title-contact">
                    <h2 className="section-title section-contact">CONTACTO</h2>
                </div>
                <div className="container py-5 px-3">
                    <form className="form mx-auto" action="none" method="POST" autoComplete="off" onSubmit={this.sendMessage}>
                        <br />
                        <label htmlFor="nombre" className="label-form">Nombre: </label>
                        <input type="text" className="input-form" placeholder="Escriba su nombre..." ref={this.nameRef} required />

                        <label htmlFor="asunto" className="label-form">Asunto: </label>
                        <input type="text" className="input-form" placeholder="Escriba el asunto..." ref={this.subjectRef} required />

                        <label htmlFor="correo" className="label-form">Correo electrónico: </label>
                        <input type="email" className="input-form" placeholder="Escriba su correo electrónico..." ref={this.emailRef} required />

                        <label htmlFor="mensaje" className="label-form">Mensaje: </label>
                        <textarea className="textarea-form" placeholder="Escriba su mensaje aquí..." ref={this.messageRef} required></textarea>

                        <button type="submit" className="btn-submit">ENVIAR MENSAJE</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;