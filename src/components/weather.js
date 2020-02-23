import React from "react";

const Weather = props => (
        <div className="infoWeath">
            {props.city &&
            <div>
                <p>Местоположение: {props.city},{props.country} </p>
                <p>Температура: {props.temp}&deg;C</p>
                <p>Восход: {props.sunrise}</p>
                <p>Заход: {props.sunset}</p>
                <p>Давление: {props.pressure}</p>

            </div>
        }
        
        <p className="error">{ props.error }</p>
        </div>
    );

export default Weather;