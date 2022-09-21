import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <>
                <h1>Início</h1>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/recover-password">Recuperar senha</Link>
                    </li>
                    <li>
                        <a href="/sign-up">Cadastrar</a>
                    </li>
                </ul>
            </>
        );
    }

}

export default Home;