import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FactoryMonitoring extends Component {
  render() {
    return (
      <nav className="navbar p-3 border-bottom border-dark shadow-lg">
        <div className="container-fluid row">
          <div className="navbar-brand col">
            <Link to="/">
              <img src="./images/smt-logo.png" alt="Smart Meter Technology's logo" width="15%" height="auto" />
            </Link>
          </div>
          <div className="display-5 fw-bold navbar-item col text-center">Fábrica 01 - Monitoramento</div>
          <div className="col text-end">
            <Link to="/new-measurement" className="m-3">
              <button className="btn btn-lg btn-outline-dark shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg> Nova medição
              </button>
            </Link>
            <Link to="/places" className="m-2">
              <button className="btn btn-lg btn-outline-dark shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                </svg> Meus locais
              </button>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default FactoryMonitoring;