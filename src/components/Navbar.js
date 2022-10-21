import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav p-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Início
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;