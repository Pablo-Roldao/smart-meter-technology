import React from "react";
import { Link } from "react-router-dom";

const Place = (props) => {

    var total = 0;

    const incrementTotal = (value) => {
        total += value;
    }

    const sensorsData = props.placeData.sensors.map((sensor) => {
        return (
            <>
                <div className="form-check form-switch" key={sensor.id}>
                    {sensor.state != 0
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
            <div className="card">
                <div className="card-body text-center row">
                    <Link to={"/factory-monitoring?id=" + props.placeData.id} className="card-title link-dark text-decoration-none fw-bold">{props.placeData.name}</Link>
                    <div className="col">
                        <h1 id="qntd-sensores-cadastrados" className="text-center">{props.placeData.sensors.length}<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-broadcast-pin col text-start" viewBox="0 0 16 16">
                            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z" />
                        </svg></h1>
                        <p className="text-center fw-bold">Sensores cadastrados</p>
                    </div>
                    <div className="col">
                        {sensorsData}
                    </div>
                    <div className="col">
                        <h6 className="text-center fw-bold">Demanda atual</h6>
                        <div className="row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-lightning-fill col" viewBox="0 0 16 16">
                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                            </svg>
                            <h2 className="text-start col-8">{total.toFixed(2)}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Place;

/*import React from "react";
import { Link } from "react-router-dom";

class Place extends React.Component {
    render() {
        return (
            <>
                <div className="card w-75 p-3 m-3 shadow-lg border-dark">
                    <div className="card-body">
                        <Link to="/factory-monitoring" className="card-title text-center text-uppercase text-decoration-none link-dark"><h5>Fábrica 01</h5></Link>
                        <br />
                        <div className="row">
                            <div className="col-4">
                                <h1 id="qntd-sensores-cadastrados" className="text-center">4 <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-broadcast-pin col text-start" viewBox="0 0 16 16">
                                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z" />
                                </svg></h1>
                                <p className="text-center">Sensores cadastrados</p>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Pasteurização - 5,05kw</label>
                                </div>
                                <div className="form-check form-switch">
                        ~            <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Linha de envase - 0,00kw</label>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Sala de refrigeração - 6,52kw</label>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Escritório - 3,48kw</label>
                                </div>
                            </div>
                            <div className="col-4">
                        ~        <h6 className="text-center">Demanda atual</h6>
                                <div className="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-lightning-fill col" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                    </svg>
                        ~ className="card-body">
                        <h5 className="card-title text-center text-uppercase">Fábrica 02</h5>
                        <br />
                        <div className="row">
                            <div className="col-4">
                                <h1 id="qntd-sensores-cadastrados" className="text-center">3 <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" className="bi bi-broadcast-pin col text-start" viewBox="0 0 16 16">
                                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z" />
                                </svg></h1>
                                <p className="text-center">Sensores cadastrados</p>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Pasteurização - 5,05kw</label>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Linha de envase - 0,00kw</label>
                                </div>
                                <div className="form-check form-switch">
                                    <input className="form-check-input bg-black" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Sala de refrigeração - 6,52kw</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <h6 className="text-center">Demanda atual</h6>
                                <div className="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-lightning-fill col" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                    </svg>
                                    <h2 className=" text-start col-9">11,57 kw
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Place;*/