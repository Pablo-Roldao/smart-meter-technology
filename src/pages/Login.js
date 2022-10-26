import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        alert("Login feito com: \nE-mail: " + this.state.email + "\nSenha: " + this.state.password);
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
                <div id="emailInput" className="form-floating mb-3">
                    <input id="email" name="email" type="email" value={this.state.email} onChange={(event) => this.setEmail(event)} required placeholder="Insira seu e-mail..." className="form-control border border-dark" />
                    <label htmlFor="email">E-mail</label>
                    <div>
                        Não possui uma conta? <Link to="/sign-up" className="link link-dark">Cadastre-se</Link>
                    </div>
                </div>
                <div id="passwordInput" className="form-floating mb-3">
                    <input id="password" name="password" type="password" value={this.state.password} onChange={(event) => this.setPassword(event)} required placeholder="Insira sua senha..." className="form-control border border-dark" />
                    <label htmlFor="password">Senha</label>
                    <div>
                        Esqueceu a senha? <Link to="/recover-password" className="link link-dark">Recuperar.</Link>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3">Entrar</button>
                </div>
            </form>
        );
    }
}

export default Login;