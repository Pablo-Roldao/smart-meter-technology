import React from "react";
import { Container } from "react-bootstrap";

import Place from "../components/Place";

const Places = (props) => {

    var places = props.placesData;

    const place01 = {
        name: "ESP Mikael",
        id: 1,
        sensors: [
            {
                name: "Sensor 01",
                id: 1,
                state: 1,
                value: 5.05
            }
        ],
    }

    const place02 = {
        name: "ESP Protótipo",
        id: 2,
        sensors: [
            {
                name: "Sensor 01",
                id: 1,
                state: 1,
                value: 10
            },
        ],
    }

    places = [place01, place02];

    const placesResult = places.map((place) => {
        return (
            <>
                <Container className="rounded">
                    <Place placeData={place} key={place.id} />
                </Container>
            </>
        );
    });

    return (
        <>
            {/*<Navbar className="border-bottom border-dark">
                <Container fluid>
                    <Navbar.Brand>Bem vindo, {props.name}!</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Item className="display-5">
                                <Nav.Link>
                                    Meus locais
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Button onClick={props.signOutFunction} variant="dark">Sair</Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>*/}
            <nav className="navbar p-3 border-bottom border-dark">
                <div className="container-fluid row">
                    <div className="navbar-brand fw-bold col">Bem vindo, {props.name}!</div>
                    <div className="navbar-item display-5 fw-bold col">Meus locais</div>
                    <button onClick={props.signOutFunction} className="col-2 btn btn-dark border-dark fw-bold navbar-item">Sair</button>
                </div>
            </nav>

            <div className="d-flex justify-content-center p-3">
                {placesResult}
            </div>
        </>
    );
}

export default Places;