import React from "react";

class RecoverPassword extends React.Component {

    render() {
        return (
            <form className="container w-75 rounded p-5" method="post" action="#home">
                <div className="text-center w-100">
                    <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded" />
                </div>
                <div className="form-floating m-3">
                    <input type="text" className="form-control border border-dark" id="name" placeholder="Insira seu nome de usuário..."></input>
                    <label for="name">Usuário</label>
                </div>
                <div className="form-floating m-3">
                    <input type="password" className="form-control border border-dark" id="password" placeholder="Insira a senha..."></input>
                    <label for="password">E-mail cadastrado</label>
                    <br />
                    <div>
                        <a href="#loginform" className="link-dark text-decoration-none">Entre </a>
                        ou
                        <a href="#signupform" className="link link-dark text-decoration-none"> cadastre-se.</a>
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