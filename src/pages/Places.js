import React from "react";
import { Link } from "react-router-dom";

import Place from "../components/Place";

const Places = (props) => {

    var places = props.placesData;

    const place01 = {
        name: "Fábrica A",
        id: 1,
        sensors: [
            {
                name: "Pasteurização",
                id: 1,
                state: 1,
                value: 5.05
            },
            {
                name: "Linha de envase",
                id: 2,
                state: 1,
                value: 12.06
            },
            {
                name: "Escritório",
                id: 2,
                state: 0,
                value: 0
            }
        ],
    }

    const place02 = {
        name: "Fábrica B",
        id: 2,
        sensors: [
            {
                name: "Pasteurização",
                id: 1,
                state: 1,
                value: 8
            },
            {
                name: "Linha de envase",
                id: 2,
                state: 1,
                value: 12.06
            }
        ],
    }

    places = [place01, place02];

    const placesResult = places.map((place) => {
        return (
            <>
                <div className="container rounded d-flex justify-content-center p-3">
                    <Place placeData={place} key={place.id} />
                </div>
               
            </>
        );
    });

    return (
        <>
            <nav className="navbar p-3 border-bottom border-dark shadow-lg">
                <div className="container-fluid row">
                    <div className="navbar-brand col">
                        <Link to="/">
                            <img src="./images/smt-logo.png" alt="Smart Meter Technology's logo" width="15%" height="auto" />
                        </Link>
                    </div>
                    <div className="display-3 fw-bold navbar-item col text-center">Meus locais</div>
                    <Link to="/adicionar-local" className="col text-end">
                        <button className="btn btn-lg btn-outline-dark shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg> Adicionar local
                        </button>
                    </Link>
                </div>
            </nav>

            <div className="d-flex justify-content-center">
                {placesResult}
            </div>
        </>
    );
}

export default Places;