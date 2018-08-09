import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) =>(
    <div className="weatherExtraInfoContainer">
        <span className="humidity">{`Humidity: ${humidity}%`}</span>
        <span className="wind">{`Wind: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes ={
    humidity: PropTypes.number,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;