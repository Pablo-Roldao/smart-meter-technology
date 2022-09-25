import React from "react";
import { Link } from "react-router-dom";

class RecoverPassword extends React.Component {

    render() {
        return (
            <form className="container w-75 rounded p-5" method="post" action="/recover-password-submit">
                <div className="text-center w-100">
                    <Link to="/">
                        <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded" />
                    </Link>
                </div>
                <div className="form-floating m-3">
                    <input type="email" className="form-control border border-dark" id="password" placeholder="Insira a senha..." required></input>
                    <label for="password">E-mail</label>
                    <br />
                    <div>
                        <Link to="/login" className="link link-dark">Entre</Link> ou <Link to="/sign-up" className="link link-dark">Cadastre-se.</Link>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3">Recuperar</button>
                </div>
            </form>
        );
    }

}

export default RecoverPassword;