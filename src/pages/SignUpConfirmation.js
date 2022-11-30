import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Auth } from "aws-amplify";

export class SignUpConfirmation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            code: "",
        }

        this.setCode = this.setCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    setCode(event) {
        this.setState({
            code: event.target.value
        });
    }

    async handleSubmit(event) {
        const username = this.props.username;
        const code = this.state.code;
        try {
            await Auth.confirmSignUp(username, code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmmit} className="container w-75 rounded p-5">
                    <div className="text-center w-100">
                        <div className="text-center w-100">
                            <Link to="/">
                                <img src="./images/smt-logo.png" alt="Smart Meter Technology's Logo" className="rounded w-25" />
                            </Link>
                        </div>
                        <div id="codeInput" className="form-floating m-3">
                            <input id="code" name="code" type="text" value={this.state.code} onChange={(event) => this.setCode(event)} className="form-control border border-dark shadow-sm" placeholder="Insira o código enviado ao e-mail..." required />
                            <label htmlFor="code">Código de confirmação enviado ao e-mail</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-dark mb-3 shadow-lg">Confirmar</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default SignUpConfirmation;