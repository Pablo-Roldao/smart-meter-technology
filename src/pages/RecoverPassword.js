import React from "react";
import { Link } from "react-router-dom";

class RecoverPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };

        this.setEmail = this.setEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit(event) {
        alert("Recuperação de senha para o e-mail: " + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container w-75 rounded p-5">

                <div className="text-center w-100">
                    <Link to="/">
                        <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded w-25" />
                    </Link>
                </div>

                <div id="emailInput" className="form-floating m-3">
                    <input id="email" name="email" type="email" value={this.state.email} onChange={(event) => this.setEmail(event)} required placeholder="Insira seu email..." className="form-control border border-dark" />
                    <label htmlFor="email">E-mail</label>

                    <br />

                    <div>
                        <Link to="/login" className="link link-dark">Entre</Link> ou <Link to="/sign-up" className="link link-dark">Cadastre-se.</Link>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3">Recuperar</button>
                </div>
            </form >
        );
    }
}

export default RecoverPassword