import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const getWeatherIcon = weatherState =>{
    return(<WeatherIcons className="wicon" name={weatherState} size="3x"/>)

};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureContainer">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature}</span>
        <span className="temperatureC"> ℃</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;