import React from "react";

class SignUp extends React.Component {

    render() {
        return (
            <form className="container w-75 rounded p-5" method="post" action="#home">
                <div className="text-center w-100">
                    <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded" />
                </div>
                <div className="form-floating m-3">
                    <input type="text" className="form-control border border-dark shadow-sm" id="name" placeholder="Insira seu nome..." required></input>
                    <label for="name">Nome</label>
                </div>
                <div className="form-floating m-3">
                    <input type="email" className="form-control border border-dark shadow-sm" id="email" placeholder="Insira seu e-mail..." required></input>
                    <label for="email">E-mail</label>
                </div>
                <div className="form-floating m-3">
                    <input type="password" className="form-control border border-dark shadow-sm" id="password" placeholder="Insira a senha..." required></input>
                    <label for="password">Senha</label>
                </div>
                <div className="form-floating m-3">
                    <input type="password" className="form-control border border-dark shadow-sm" id="passwordConfirmation" placeholder="Insira a senha novamente..." required></input>
                    <label for="passwordConfirmation">Confirmar senha</label>
                    <br />
                    <a href="#loginform" className="link-dark text-decoration-none">Já possui uma conta? Entre.</a>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3 shadow-lg">Entrar</button>
                </div>
            </form>
        );
    }

}

export default SignUp;