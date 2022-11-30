import React from "react";
import { Link } from "react-router-dom";

import { Auth } from "aws-amplify";

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setPasswordConfirmation = this.setPasswordConfirmation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setName(event) {
        this.setState({
            name: event.target.value
        });
    }

    setEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    setPasswordConfirmation(event) {
        this.setState({
            passwordConfirmation: event.target.value
        });
    }

    async handleSubmit(event) {
        try {
            const username = this.state.email;
            const name = this.state.name;
            const password = this.state.password;
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    name,
                },
                autoSignIn: {
                    enabled: true,
                }
            });
            alert(user);
            alert("Cadastro com:" +
                "\nName: " + this.state.name +
                "\nE-mail: " + this.state.email +
                "\nSenha: " + this.state.password +
                "\nConfirmação de senha: " + this.state.passwordConfirmation);
            event.preventDefault();
        } catch (error) {
            alert("Error signing up: ", error);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container w-75 rounded p-5">
                <div className="text-center w-100">
                    <Link to="/">
                        <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded w-25" />
                    </Link>
                </div>
                <div id="nameInput" className="form-floating m-3">
                    <input id="name" name="name" type="text" value={this.state.name} onChange={(event) => this.setName(event)} className="form-control border border-dark shadow-sm" placeholder="Insira seu nome..." required />
                    <label htmlFor="name">Nome</label>
                </div>
                <div id="emailInput" className="form-floating m-3">
                    <input id="email" name="email" type="email" value={this.state.email} onChange={(event) => this.setEmail(event)} className="form-control border border-dark shadow-sm" placeholder="Insira seu e-mail..." required />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div id="passwordInput" className="form-floating m-3">
                    <input id="password" name="password" type="password" value={this.state.password} onChange={(event) => this.setPassword(event)} className="form-control border border-dark shadow-sm" placeholder="Insira a senha..." required />
                    <label htmlFor="password">Senha</label>
                </div>
                <div id="passwordConfirmationInput" className="form-floating m-3">
                    <input id="passwordConfirmation" name="passwordConfirmation" type="password" value={this.state.passwordConfirmation} onChange={(event) => this.setPasswordConfirmation(event)} className="form-control border border-dark shadow-sm" placeholder="Insira a senha novamente..." required />
                    <label htmlFor="passwordConfirmation">Confirmar senha</label>
                    <br />
                    <div>
                        Já possui uma conta? <Link to="/login" className="link link-dark">Entre.</Link>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3 shadow-lg">Cadastrar</button>
                </div>
            </form>
        );
    }

}

export default SignUp;