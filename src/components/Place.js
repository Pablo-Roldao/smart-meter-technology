import React from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col } from "react-bootstrap";

const Place = (props) => {

    var total = 0;

    const incrementTotal = (value) => {
        total += value;
    }

    const sensorsData = props.placeData.sensors.map((sensor) => {
        return (
            <>
                <div className="form-check form-switch" key={sensor.id}>
                    {sensor.state !== 0
                        ? <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onClick={sensor.state = 1}/>
                        : <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" />}
                    <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckChecked">{sensor.name} - {sensor.value}</label>
                </div>
                {incrementTotal(sensor.value)}
            </>
        );
    });

    return (
        <>
            <Card className="border-dark">
                <Card.Body className="text-center">
                    <Card.Title>
                        <Link to={"/factory-monitoring?id=" + props.placeData.id} className="link-dark text-decoration-none">
                            <h2>{props.placeData.name}</h2></Link>
                    </Card.Title>
                    <Row>
                        <Col>
                            <h5 className="fw-bold">Sensores cadastrados</h5>
                            <Row>
                                <Col></Col>
                                <Col className="text-end">
                                    <h3>{props.placeData.sensors.length}</h3>
                                </Col>
                                <Col className="text-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-broadcast-pin col text-start" viewBox="0 0 16 16">
                                        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z" />
                                    </svg>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col>
                            <h5 className="fw-bold">Sensores</h5>
                            {sensorsData}
                        </Col>
                        <Col>
                            <h5 className="fw-bold">Demanda atual</h5>
                            <Row>
                                <Col className="text-end">
                                    <h3>{total.toFixed(2)}</h3>
                                </Col>
                                <Col className="text-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                    </svg>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Place;