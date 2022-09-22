import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <form className="container w-75 rounded p-5" method="post" action="/submit-login">
                <div className="text-center w-100">
                    <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded" />
                </div>
                <div className="form-floating m-3">
                    <input type="email" className="form-control border border-dark" id="email" placeholder="Insira seu e-mail..." required></input>
                    <label for="email">E-mail</label>
                    <div>
                        Não possui uma conta? <Link to="/sign-up" className="link link-dark">Cadastre-se</Link>
                    </div>
                </div>
                <div className="form-floating m-3">
                    <input type="password" className="form-control border border-dark" id="password" placeholder="Insira a senha..." required></input>
                    <label for="password">Senha</label>
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